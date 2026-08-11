---
title: "TCP/UDP Socket 适配"
type: guide
category: guide/engine/common-adaptation
source: https://developers.weixin.qq.com/minigame/dev/guide/game-engine/common-adaptation/Design/SocketAdapter.html
---

# TCP/UDP Socket 适配

本文档介绍如何在 Emscripten 项目中集成微信小游戏 Socket 网络通信模块（WXSocketLib），支持 TCP 和 UDP 协议。

## 目录

  1. 概述
  2. POSIX 接口支持情况
  3. 编译集成方法
  4. 典型会话流程
  5. 使用示例
  6. 注意事项
  7. 常见问题

* * *

## 概述

WXSocketLib 是一个基于 Emscripten 的 WebAssembly 网络库，为微信小游戏环境提供类 POSIX Socket 接口。该库封装了微信小游戏的网络 API，使得原生 C/C++ 网络代码可以在 WebAssembly 环境中运行。

### 支持的协议

  * TCP (SOCK_STREAM)
  * UDP (SOCK_DGRAM)

### 支持的地址族

  * IPv4 (AF_INET)
  * IPv6 (AF_INET6)

* * *

## POSIX 接口支持情况

### 1\. 原生支持的接口（无需修改）

以下接口与标准 POSIX 接口完全兼容，可直接使用：

#### 1.1 Socket 创建与关闭
    
    
    int socket(int domain, int type, int protocol);
    int shutdown(int sockfd, int how);
    

#### 1.2 地址绑定与连接
    
    
    int bind(int sockfd, const struct sockaddr *addr, socklen_t addrlen);
    int connect(int sockfd, const struct sockaddr *address, socklen_t address_len);
    

> ⚠ **注意** ：小游戏环境基于安全考虑，在非调试模式时不支持直接 IP 地址连接，需要采用域名连接。参考 [微信小游戏网络使用说明](<../../base-ability/network.md>) 前往 MP 配置相关域名，然后采用域名接口建立连接。
> 
> 域名连接接口：
>     
>     
>     int WXSocket::connect(int sockfd, const char *domain, int port,
>                           bool enable_http_dns = false,
>                           const char *http_dns_serviceid = nullptr);
>     

**MP 配置示例** ：

![MP域名配置示例](https://res8.wxqcloud.qq.com.cn/wxdoc/6d5e08ee-eee6-4683-91a5-384c2df4d66c.png)

#### 1.3 数据收发
    
    
    ssize_t send(int sockfd, const void *message, size_t length, int flags);
    ssize_t recv(int sockfd, void *buffer, size_t length, int flags);
    ssize_t sendto(int sockfd, const void *buffer, size_t length, int flags,
                   const struct sockaddr *dest_addr, socklen_t addrlen);
    ssize_t recvfrom(int sockfd, void *buffer, size_t length, int flags,
                     struct sockaddr *src_addr, socklen_t *addrlen);
    

#### 1.4 地址信息获取
    
    
    int getsockname(int sockfd, struct sockaddr *address, socklen_t *address_len);
    int getpeername(int sockfd, struct sockaddr *address, socklen_t *address_len);
    

#### 1.5 Socket 选项
    
    
    int getsockopt(int sockfd, int level, int option_name, void *option_value,
                   socklen_t *option_len);
    int setsockopt(int socket, int level, int option_name, const void *option_value,
                   socklen_t option_len);
    

**支持的选项** ：

选项 | 说明  
---|---  
`SO_ERROR` | 获取错误状态  
`SO_TYPE` | 获取 socket 类型  
`SO_RCVBUF` | 设置/获取接收缓冲区大小  
`SO_SNDBUF` | 设置发送缓冲区大小（部分支持）  
`SO_SNDTIMEO` | 设置发送超时（用于连接超时）  
  
* * *

### 2\. 需要修改的接口

#### 2.1 select() - 需要使用 WXSocket 命名空间

标准调用：
    
    
    #include <sys/select.h>
    int select(int nfds, fd_set *readfds, fd_set *writefds, fd_set *exceptfds,
               struct timeval *timeout);
    

WXSocketLib 调用：
    
    
    #include "socket/wx_socket_interface.h"
    
    // 使用 WXSocket 命名空间的 select
    int result = WXSocket::select(nfds, &readfds, &writefds, &exceptfds, NULL);
    

> **修改原因** ：该库实现了自定义的 select 机制，用于检查 WXSocket 的连接/可读/可写状态。

#### 2.2 ioctl() - 仅支持 FIONREAD

标准调用：
    
    
    #include <sys/ioctl.h>
    int ioctl(int d, int request, ...);
    

WXSocketLib 调用：
    
    
    #include "socket/wx_socket_interface.h"
    
    int available = 0;
    int result = WXSocket::ioctl(sockfd, FIONREAD, &available);
    

**限制** ：

  * 仅支持 `FIONREAD` 请求（查询可读数据量）
  * `argp` 参数必须是 `int*` 类型

#### 2.3 connect() - 支持域名连接（扩展接口）

除了标准的 IP 地址连接，WXSocketLib 还提供了域名连接接口：
    
    
    #include "socket/wx_socket_interface.h"
    
    // 使用域名连接（支持 HTTP DNS）
    int WXSocket::connect(int sockfd, const char *domain, int port,
                          bool enable_http_dns = false,
                          const char *http_dns_serviceid = nullptr);
    

**示例** ：
    
    
    int sockfd = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);
    fcntl(sockfd, F_SETFL, O_NONBLOCK);
    
    // 使用域名连接
    int ret = WXSocket::connect(sockfd, "www.example.com", 80, true, "your_service_id");
    if (ret == -1 && errno == EINPROGRESS) {
        // 连接正在进行中，使用 select 等待连接完成
    }
    

#### 2.4 close() - 关闭 socket

标准调用：
    
    
    int close(int sockfd);
    

WXSocketLib 调用：
    
    
    #include "socket/wx_socket_interface.h"
    int result = WXSocket::close(sockfd);
    

> ⚠ 确保调用 `WXSocket::close` 才能正确释放 socket 资源。

* * *

### 3\. 不支持的接口

以下接口在当前版本中不支持，调用会返回 -1 并设置 errno：
    
    
    // 服务端接口（不支持）
    int listen(int sockfd, int backlog);
    int accept(int sockfd, struct sockaddr *address, socklen_t *address_len);
    int accept4(int sockfd, struct sockaddr *address, socklen_t *address_len, int flags);
    
    // 其他不支持的接口
    int socketpair(int domain, int type, int protocol, int socket_vector[2]);
    ssize_t sendmsg(int socket, const struct msghdr *message, int flags);
    ssize_t recvmsg(int socket, struct msghdr *message, int flags);
    int sockatmark(int sockfd);
    int getaddrinfo(const char *node, const char *service,
                    const struct addrinfo *hints, struct addrinfo **res);
    int getnameinfo(const struct sockaddr *addr, socklen_t addrlen, char *host,
                    socklen_t hostlen, char *serv, socklen_t servlen, int flags);
    

> **原因** ：微信小游戏环境不支持服务端 Socket 功能，仅支持客户端连接。

* * *

## 典型会话流程

### TCP 会话建立流程

![TCP会话建立流程](https://res8.wxqcloud.qq.com.cn/wxdoc/9593f04b-fbd1-4138-b1ea-ab036b3c541e.png)

### UDP 会话建立流程

![UDP会话建立流程](https://res8.wxqcloud.qq.com.cn/wxdoc/eed9fe6d-39cd-40db-8444-930eb81ea8f0.png)

* * *

## 编译集成方法

### 1\. 前置要求

  * **Emscripten SDK** ：需要安装 Emscripten 编译工具链（版本需与 SDK 版本号一致）
  * **编译器** ：`emcc` (C 编译器) 和 `em++` (C++ 编译器)

### 2\. 获取库文件

集成 WXSocketLib 需要以下三个文件：

文件名 | 说明 | 用途  
---|---|---  
`libwxgamesdk.a` | 静态库文件 | 包含网络库的编译后代码  
`wx_socket_interface.h` | 头文件 | 提供 API 接口声明  
`libwxsocket_open.jslib` | JavaScript 库 | 提供 JS 与 C++ 的桥接代码  
  
### 3\. 推荐的项目目录结构
    
    
    YourProject/
    ├── lib/                          # 第三方库目录
    │   └── wxsocket/                 # WXSocketLib 库文件
    │       ├── libwxgamesdk.a         # 静态库
    │       ├── wx_socket_interface.h # 头文件
    │       └── libwxsocket_open.jslib # JS 库
    ├── src/                          # 您的源代码
    │   ├── main.cpp
    │   ├── network.cpp
    │   └── network.h
    ├── build/                        # 编译输出目录（自动生成）
    └── Makefile                      # 构建脚本
    

**文件放置步骤** ：
    
    
    # 1. 创建库目录
    mkdir -p lib/wxsocket
    
    # 2. 复制库文件
    cp libwxgamesdk.a lib/wxsocket/
    cp wx_socket_interface.h lib/wxsocket/
    cp libwxsocket_open.jslib lib/wxsocket/
    
    # 3. 在代码中引用头文件
    # #include "lib/wxsocket/wx_socket_interface.h"
    

### 4\. Emscripten 编译选项配置

#### 4.1 必需的编译选项

在您的 Makefile 或编译脚本中添加以下选项：
    
    
    # 编译器
    CXX = em++
    
    # 头文件路径
    CXXFLAGS = -I. -Ilib/wxsocket -O2 -Wall
    
    # 链接选项（必需）
    LDFLAGS = -s WASM=1 \
              -s DYNCALLS=1 \
              -s ALLOW_MEMORY_GROWTH=0 \
              -s EXPORTED_RUNTIME_METHODS='["ccall", "cwrap", "stringToUTF8", "UTF8ToString", "lengthBytesUTF8", "allocateUTF8"]' \
              -s EXPORTED_FUNCTIONS='["_UdpSocketOnMessage", "_UdpSocketOnError", "_TcpSocketOnConnect", "_TcpSocketOnConnectError", "_TcpSocketOnError", "_TcpSocketOnMessage", "_SocketOnClose", "_main", "_free", "_malloc"]' \
              -Wl,--whole-archive lib/wxsocket/libwxgamesdk.a -Wl,--no-whole-archive \
              --js-library=lib/wxsocket/libwxsocket_open.jslib
    

#### 4.2 编译选项详解

选项 | 说明 | 是否必需  
---|---|---  
`-s WASM=1` | 生成 WebAssembly 输出 | ✅ 必需  
`-s DYNCALLS=1` | 启用动态调用支持 | ✅ 必需  
`-s ALLOW_MEMORY_GROWTH=0` | 不允许内存动态增长（建议通过 `INITIAL_MEMORY` 配置合理值，避免内存动态增长） | ✅ 必需  
`-s EXPORTED_RUNTIME_METHODS` | 导出运行时方法 | ✅ 必需  
`-s EXPORTED_FUNCTIONS` | 导出回调函数 | ✅ 必需  
`-Wl,--whole-archive` | 强制链接整个静态库 | ✅ 必需  
`--js-library` | 链接 JavaScript 库 | ✅ 必需  
  
### 5\. 完整 Makefile 示例
    
    
    # 编译器配置
    CXX = em++
    BUILD_DIR = build
    
    # 编译选项
    CXXFLAGS = -I. -Ilib/wxsocket -O2 -Wall -std=c++11
    
    # 链接选项
    LDFLAGS = -s WASM=1 \
              -s DYNCALLS=1 \
              -s ALLOW_MEMORY_GROWTH=0 \
              -s EXPORTED_RUNTIME_METHODS='["ccall", "cwrap", "stringToUTF8", "UTF8ToString", "lengthBytesUTF8", "allocateUTF8"]' \
              -s EXPORTED_FUNCTIONS='["_UdpSocketOnMessage", "_UdpSocketOnError", "_TcpSocketOnConnect", "_TcpSocketOnConnectError", "_TcpSocketOnError", "_TcpSocketOnMessage", "_SocketOnClose", "_main", "_free", "_malloc"]' \
              -Wl,--whole-archive lib/wxsocket/libwxgamesdk.a -Wl,--no-whole-archive \
              --js-library=lib/wxsocket/libwxsocket_open.jslib
    
    # 源文件
    SRCS = src/main.cpp
    OBJS = $(SRCS:src/%.cpp=$(BUILD_DIR)/%.o)
    
    # 目标文件
    TARGET = $(BUILD_DIR)/app.html
    
    # 默认目标
    all: $(TARGET)
    
    # 创建构建目录
    $(BUILD_DIR):
    	@mkdir -p $(BUILD_DIR)
    
    # 编译源文件
    $(BUILD_DIR)/%.o: src/%.cpp | $(BUILD_DIR)
    	$(CXX) $(CXXFLAGS) -c $< -o $@
    
    # 链接生成最终文件
    $(TARGET): $(OBJS) | $(BUILD_DIR)
    	$(CXX) $(OBJS) -o $@ $(LDFLAGS)
    
    # 清理
    clean:
    	rm -rf $(BUILD_DIR)
    
    .PHONY: all clean
    

### 6\. 编译与输出
    
    
    # 编译项目
    make
    
    # 清理编译产物
    make clean
    

编译成功后，在 `build/` 目录下会生成：

文件 | 说明  
---|---  
`app.html` | HTML 入口文件，用于加载 WASM  
`app.js` | JavaScript 胶水代码  
`app.wasm` | WebAssembly 二进制文件  
  
> ⚠ 该库只能在微信小游戏环境下使用，浏览器环境不支持。请将上述 Emscripten 构建产物利用微信小游戏转换工具进行转换，具体请参考 [转换工具](<TransformTool.md>)。

* * *

## 使用示例

### 示例 1：TCP 客户端连接
    
    
    #include "socket/wx_socket_interface.h"
    #include <arpa/inet.h>
    #include <fcntl.h>
    #include <netinet/in.h>
    #include <stdio.h>
    #include <string.h>
    #include <sys/socket.h>
    #include <unistd.h>
    #include <errno.h>
    
    #define SERVER_IP "192.168.1.100"
    #define SERVER_PORT 8080
    #define MESSAGE "Hello, Server!"
    
    typedef enum {
        STATE_CONNECTING,
        STATE_CONNECTED,
        STATE_SENDING,
        STATE_RECEIVING,
        STATE_DONE
    } connection_state_t;
    
    typedef struct {
        int sockfd;
        connection_state_t state;
        char send_buffer[256];
        char recv_buffer[256];
        int bytes_sent;
        int bytes_received;
    } tcp_client_t;
    
    tcp_client_t client;
    
    void tcp_client_loop() {
        fd_set readfds, writefds;
        int ret;
    
        // 准备 fd_set
        FD_ZERO(&readfds);
        FD_ZERO(&writefds);
        FD_SET(client.sockfd, &readfds);
        FD_SET(client.sockfd, &writefds);
    
        // 使用 WXSocket::select 检查状态
        ret = WXSocket::select(client.sockfd + 1, &readfds, &writefds, NULL, NULL);
        if (ret == -1) {
            perror("select failed");
            return;
        }
    
        switch (client.state) {
            case STATE_CONNECTING:
                if (FD_ISSET(client.sockfd, &writefds)) {
                    // 检查连接是否成功
                    int error = 0;
                    socklen_t len = sizeof(error);
                    getsockopt(client.sockfd, SOL_SOCKET, SO_ERROR, &error, &len);
                    
                    if (error == 0) {
                        printf("Connected successfully!\n");
                        client.state = STATE_SENDING;
                    } else {
                        printf("Connection failed: %s\n", strerror(error));
                        client.state = STATE_DONE;
                    }
                }
                break;
    
            case STATE_SENDING:
                if (FD_ISSET(client.sockfd, &writefds)) {
                    ret = send(client.sockfd, client.send_buffer, 
                              strlen(client.send_buffer), 0);
                    if (ret > 0) {
                        printf("Sent %d bytes\n", ret);
                        client.bytes_sent += ret;
                        client.state = STATE_RECEIVING;
                    } else if (ret == -1 && errno != EAGAIN) {
                        perror("send failed");
                        client.state = STATE_DONE;
                    }
                }
                break;
    
            case STATE_RECEIVING:
                if (FD_ISSET(client.sockfd, &readfds)) {
                    // 检查可读数据量
                    int available = 0;
                    WXSocket::ioctl(client.sockfd, FIONREAD, &available);
                    printf("Available data: %d bytes\n", available);
    
                    ret = recv(client.sockfd, client.recv_buffer, 
                              sizeof(client.recv_buffer) - 1, 0);
                    if (ret > 0) {
                        client.recv_buffer[ret] = '\0';
                        printf("Received: %s\n", client.recv_buffer);
                        client.state = STATE_DONE;
                    } else if (ret == 0) {
                        printf("Connection closed by server\n");
                        client.state = STATE_DONE;
                    } else if (errno != EAGAIN) {
                        perror("recv failed");
                        client.state = STATE_DONE;
                    }
                }
                break;
    
            case STATE_DONE:
                WXSocket::close(client.sockfd);
                printf("Connection closed\n");
                #ifdef __EMSCRIPTEN__
                emscripten_cancel_main_loop();
                #endif
                break;
        }
    }
    
    int main() {
        int ret;
        struct sockaddr_in server_addr;
    
        // 1. 创建 TCP socket
        client.sockfd = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);
        if (client.sockfd == -1) {
            perror("socket creation failed");
            return -1;
        }
    
        // 2. 设置为非阻塞模式
        fcntl(client.sockfd, F_SETFL, O_NONBLOCK);
    
        // 3. 准备服务器地址
        memset(&server_addr, 0, sizeof(server_addr));
        server_addr.sin_family = AF_INET;
        server_addr.sin_port = htons(SERVER_PORT);
        inet_pton(AF_INET, SERVER_IP, &server_addr.sin_addr);
    
        // 4. 连接服务器
        ret = connect(client.sockfd, (struct sockaddr *)&server_addr, 
                      sizeof(server_addr));
        if (ret == -1 && errno != EINPROGRESS) {
            perror("connect failed");
            return -1;
        }
    
        // 5. 准备发送数据
        strcpy(client.send_buffer, MESSAGE);
        client.state = STATE_CONNECTING;
    
        // 6. 启动主循环
        #ifdef __EMSCRIPTEN__
        emscripten_set_main_loop(tcp_client_loop, 60, 0);
        #else
        while (client.state != STATE_DONE) {
            tcp_client_loop();
        }
        #endif
    
        return 0;
    }
    

### 示例 2：TCP 域名连接
    
    
    #include "socket/wx_socket_interface.h"
    #include <fcntl.h>
    #include <stdio.h>
    #include <string.h>
    
    int main() {
        int sockfd;
        int ret;
    
        // 1. 创建 socket
        sockfd = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);
        if (sockfd == -1) {
            perror("socket creation failed");
            return -1;
        }
    
        // 2. 设置为非阻塞
        fcntl(sockfd, F_SETFL, O_NONBLOCK);
    
        // 3. 使用域名连接（启用 HTTP DNS）
        ret = WXSocket::connect(sockfd, "www.example.com", 80, 
                               true, "your_http_dns_service_id");
        
        if (ret == -1 && errno == EINPROGRESS) {
            printf("Connecting to www.example.com:80...\n");
            
            // 4. 等待连接完成
            fd_set writefds;
            while (1) {
                FD_ZERO(&writefds);
                FD_SET(sockfd, &writefds);
                
                ret = WXSocket::select(sockfd + 1, NULL, &writefds, NULL, NULL);
                if (ret > 0 && FD_ISSET(sockfd, &writefds)) {
                    int error = 0;
                    socklen_t len = sizeof(error);
                    getsockopt(sockfd, SOL_SOCKET, SO_ERROR, &error, &len);
                    
                    if (error == 0) {
                        printf("Connected successfully!\n");
                        break;
                    } else {
                        printf("Connection failed: %s\n", strerror(error));
                        WXSocket::close(sockfd);
                        return -1;
                    }
                }
            }
        } else {
            printf("Connect failed immediately\n");
            WXSocket::close(sockfd);
            return -1;
        }
    
        // 5. 发送 HTTP 请求
        const char *request = "GET / HTTP/1.1\r\nHost: www.example.com\r\n\r\n";
        send(sockfd, request, strlen(request), 0);
    
        // 6. 接收响应
        char buffer[1024];
        ret = recv(sockfd, buffer, sizeof(buffer) - 1, 0);
        if (ret > 0) {
            buffer[ret] = '\0';
            printf("Response:\n%s\n", buffer);
        }
    
        // 7. 关闭连接
        WXSocket::close(sockfd);
        return 0;
    }
    

### 示例 3：UDP 客户端
    
    
    #include "socket/wx_socket_interface.h"
    #include <arpa/inet.h>
    #include <fcntl.h>
    #include <netinet/in.h>
    #include <stdio.h>
    #include <string.h>
    #include <sys/socket.h>
    
    #define SERVER_IP "192.168.1.100"
    #define SERVER_PORT 9000
    #define MESSAGE "Hello, UDP Server!"
    
    int main() {
        int sockfd;
        struct sockaddr_in server_addr;
        char buffer[256];
        int ret;
    
        // 1. 创建 UDP socket
        sockfd = socket(AF_INET, SOCK_DGRAM, IPPROTO_UDP);
        if (sockfd == -1) {
            perror("socket creation failed");
            return -1;
        }
    
        // 2. 设置为非阻塞
        fcntl(sockfd, F_SETFL, O_NONBLOCK);
    
        // 3. 准备服务器地址
        memset(&server_addr, 0, sizeof(server_addr));
        server_addr.sin_family = AF_INET;
        server_addr.sin_port = htons(SERVER_PORT);
        inet_pton(AF_INET, SERVER_IP, &server_addr.sin_addr);
    
        // 4. 发送数据（使用 sendto）
        ret = sendto(sockfd, MESSAGE, strlen(MESSAGE), 0,
                     (struct sockaddr *)&server_addr, sizeof(server_addr));
        if (ret == -1) {
            perror("sendto failed");
            WXSocket::close(sockfd);
            return -1;
        }
        printf("Sent %d bytes to %s:%d\n", ret, SERVER_IP, SERVER_PORT);
    
        // 5. 接收响应
        struct sockaddr_in from_addr;
        socklen_t from_len = sizeof(from_addr);
        
        fd_set readfds;
        FD_ZERO(&readfds);
        FD_SET(sockfd, &readfds);
        
        ret = WXSocket::select(sockfd + 1, &readfds, NULL, NULL, NULL);
        if (ret > 0 && FD_ISSET(sockfd, &readfds)) {
            ret = recvfrom(sockfd, buffer, sizeof(buffer) - 1, 0,
                          (struct sockaddr *)&from_addr, &from_len);
            if (ret > 0) {
                buffer[ret] = '\0';
                char ip_str[INET_ADDRSTRLEN];
                inet_ntop(AF_INET, &from_addr.sin_addr, ip_str, INET_ADDRSTRLEN);
                printf("Received from %s:%d: %s\n", 
                       ip_str, ntohs(from_addr.sin_port), buffer);
            }
        }
    
        // 6. 关闭 socket
        WXSocket::close(sockfd);
        return 0;
    }
    

### 示例 4：UDP 连接模式（connect + send/recv）
    
    
    #include "socket/wx_socket_interface.h"
    #include <arpa/inet.h>
    #include <fcntl.h>
    #include <netinet/in.h>
    #include <stdio.h>
    #include <string.h>
    #include <sys/socket.h>
    
    #define SERVER_IP "192.168.1.100"
    #define SERVER_PORT 9000
    
    int main() {
        int sockfd;
        struct sockaddr_in server_addr;
        char buffer[256];
        int ret;
    
        // 1. 创建 UDP socket
        sockfd = socket(AF_INET, SOCK_DGRAM, IPPROTO_UDP);
        if (sockfd == -1) {
            perror("socket creation failed");
            return -1;
        }
    
        // 2. 设置为非阻塞
        fcntl(sockfd, F_SETFL, O_NONBLOCK);
    
        // 3. 准备服务器地址
        memset(&server_addr, 0, sizeof(server_addr));
        server_addr.sin_family = AF_INET;
        server_addr.sin_port = htons(SERVER_PORT);
        inet_pton(AF_INET, SERVER_IP, &server_addr.sin_addr);
    
        // 4. 连接到服务器（UDP 连接模式）
        ret = connect(sockfd, (struct sockaddr *)&server_addr, sizeof(server_addr));
        if (ret == -1) {
            perror("connect failed");
            WXSocket::close(sockfd);
            return -1;
        }
        printf("UDP socket connected to %s:%d\n", SERVER_IP, SERVER_PORT);
    
        // 5. 使用 send 发送数据（无需指定地址）
        const char *message = "Hello from connected UDP!";
        ret = send(sockfd, message, strlen(message), 0);
        if (ret > 0) {
            printf("Sent %d bytes\n", ret);
        }
    
        // 6. 使用 recv 接收数据
        fd_set readfds;
        FD_ZERO(&readfds);
        FD_SET(sockfd, &readfds);
        
        ret = WXSocket::select(sockfd + 1, &readfds, NULL, NULL, NULL);
        if (ret > 0 && FD_ISSET(sockfd, &readfds)) {
            ret = recv(sockfd, buffer, sizeof(buffer) - 1, 0);
            if (ret > 0) {
                buffer[ret] = '\0';
                printf("Received: %s\n", buffer);
            }
        }
    
        // 7. 关闭 socket
        WXSocket::close(sockfd);
        return 0;
    }
    

* * *

## 注意事项

### 1\. 非阻塞模式

必须使用非阻塞模式：
    
    
    fcntl(sockfd, F_SETFL, O_NONBLOCK);
    

所有 socket 操作都应该在非阻塞模式下进行，配合 `WXSocket::select()` 使用，或者根据返回码 `EAGAIN` 等判断是阻塞还是发生异常。

### 2\. 错误处理
    
    
    if (ret == -1) {
        if (errno == EAGAIN || errno == EWOULDBLOCK) {
            // 操作会阻塞，稍后重试
        } else if (errno == EINPROGRESS) {
            // 连接正在进行中
        } else {
            // 真正的错误
            perror("operation failed");
        }
    }
    

### 3\. 主循环

在 Emscripten 环境中，必须使用 `emscripten_set_main_loop()` 而不是传统的 `while` 循环：
    
    
    #ifdef __EMSCRIPTEN__
    #include <emscripten.h>
    emscripten_set_main_loop(main_loop_function, 60, 0);  // 60 FPS
    #else
    while (running) {
        main_loop_function();
    }
    #endif
    

### 4\. 缓冲区大小

类型 | 默认接收缓冲区  
---|---  
TCP | 8 MB  
UDP | 2 MB  
  
可以通过 `setsockopt(SO_RCVBUF)` 在创建 socket 后立即设置：
    
    
    int buffer_size = 1024 * 1024;  // 1 MB
    setsockopt(sockfd, SOL_SOCKET, SO_RCVBUF, &buffer_size, sizeof(buffer_size));
    

### 5\. 连接超时

设置连接超时（最大 20 秒）：
    
    
    struct timeval timeout;
    timeout.tv_sec = 10;   // 10 秒超时
    timeout.tv_usec = 0;
    setsockopt(sockfd, SOL_SOCKET, SO_SNDTIMEO, &timeout, sizeof(timeout));
    

### 6\. Socket 数量限制

限制项 | 说明  
---|---  
最大 socket 数量 | 512 个（TCP + UDP 总和）  
TCP socket ID 范围 | 0 - 511  
UDP socket ID 范围 | 512 - 1023  
  
### 7\. IPv6 支持
    
    
    // IPv6 socket 创建
    int sockfd = socket(AF_INET6, SOCK_STREAM, IPPROTO_TCP);
    
    struct sockaddr_in6 addr;
    memset(&addr, 0, sizeof(addr));
    addr.sin6_family = AF_INET6;
    addr.sin6_port = htons(8080);
    inet_pton(AF_INET6, "2001:db8::1", &addr.sin6_addr);
    

### 8\. 日志级别

初始提供版本统一为 Debug 日志级别版本，生产版本请提供 Emscripten 版本号联系获取。

### 9\. 资源清理

始终记得关闭不再使用的 socket：
    
    
    WXSocket::close(sockfd);
    

或使用 `shutdown()` 进行半关闭：
    
    
    shutdown(sockfd, SHUT_WR);   // 关闭写端
    shutdown(sockfd, SHUT_RD);   // 关闭读端
    shutdown(sockfd, SHUT_RDWR); // 完全关闭
    

### 10\. 线程安全

当前实现不是线程安全的，所有 socket 操作应在同一线程中进行。

* * *

## 常见问题

### 常见集成问题

#### 链接错误：找不到符号

**问题** ：`undefined reference to 'WXSocket::select'`

**解决** ：

  * 确保使用了 `-Wl,--whole-archive` 选项
  * 检查 `libwxgamesdk.a` 路径是否正确

#### 运行时错误：回调函数未定义

**问题** ：`Cannot call unknown function _TcpSocketOnConnect`

**解决** ：

  * 确保在 `EXPORTED_FUNCTIONS` 中包含了所有必需的回调函数
  * 检查函数名前缀是否有下划线 `_`

#### JavaScript 库未加载

**问题** ：网络功能不工作

**解决** ：

  * 确保使用了 `--js-library` 选项
  * 检查 `.jslib` 文件路径是否正确

#### 内存不足

**问题** ：`Cannot enlarge memory arrays`

**解决** ：

  * 使用 `-s INITIAL_MEMORY=<size>` 设置初始内存大小

### 常见使用问题

**Q1: 为什么`select()` 需要使用 `WXSocket::select()`？**

因为 WXSocketLib 实现了自定义的 socket 管理机制，标准的 `select()` 无法检测到 WXSocket 的状态变化。必须使用 `WXSocket::select()` 来正确检查可读/可写状态。

**Q2: 可以使用`poll()` 或 `epoll()` 吗？**

不可以。当前仅支持 `select()` 接口。

**Q3: 为什么不支持服务端功能？**

微信小游戏环境出于安全考虑，不允许应用监听端口，因此无法实现 `listen()` 和 `accept()` 功能。

**Q4: UDP 的`connect()` 有什么作用？**

UDP 的 `connect()` 会将 socket 绑定到特定的远程地址，之后可以使用 `send()`/`recv()` 而不是 `sendto()`/`recvfrom()`，简化代码。

**Q5: 如何调试网络问题？**

  1. 观察控制台输出的网络相关日志，日志始终以 Warning 级别打印
  2. 检查浏览器控制台的 JavaScript 错误
  3. 使用 `getsockopt(SO_ERROR)` 获取 socket 错误状态

* * *

## 下一步

  * 了解 [WebSocket 适配](<WebSocketAdapter.md>)
  * 了解 [HTTP 客户端适配](<HttpAdapter.md>)
  * 了解 [微信开放接口](<WXOpenAPI.md>)
