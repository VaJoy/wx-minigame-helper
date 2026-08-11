---
title: "安全指南"
type: guide
category: guide/security
source: https://developers.weixin.qq.com/minigame/dev/guide/security/security.html
---

# 安全指南

本文档整理了小游戏开发和运营过程当中的一些常见的安全事项，用于帮助开发者了解、发现和修复相关安全和漏洞问题，避免对业务的正常运营造成损失。为了便于落地，部分事项已经有相应的能力来支持解决。

## 安全原则

小游戏的开发过程中容易不经意埋下一些安全问题，遵循一套良好的安全开发原则，能够规避大部分风险。现整理一些原则如下：

**代码保护原则** ：妥善保护源码，首次上线前需对提审的代码进行加固，提高恶意阅读、分析、对抗的成本。

**权限最小原则** ：代码提审时，只保留常规玩家权限，剔除一切的特殊权限，如：生产代币/虚拟道具的权限、测试期的Mock代码、特殊接口等，防止上线后被恶意利用。

**票据鉴权原则** ：自定义登录态后需要隐藏好票据，票据的设计尽量结合身份信息、时效信息、包数据信息、权限信息等，规避各类越权风险。

**互不信任原则** ：前后端的数据交互中每一次都需鉴权，后端不能信任前端提交的数据，重要数据需要结合游戏的特点、上下文、合理性等做出合法性判定，拒绝预期之外的请求。

**活动风控原则** ：活动运营中，现金和高价值道具发放需要设置足够合理的门槛，例如：时间价值、等级价值、账号价值等，避免被非目标玩家恶意刷走。

**UGC不可信原则** ：用户产生的UGC内容（图片、文本、音视频等）均不可信任，在采信和应用之前，务必过内容安全审查，检测正常的内容才可对外展示。

## 代码加固3.0

代码加固是对明文游戏代码的一种保护，包含了**代码混淆** 、**代码水印** 、**代码锁** 以及部分**对抗外挂** 的能力，能够较全面的保护代码和游戏运营。为了便于应用，相关能力统一打包在了开发者工具插件——《游戏深度保护》里面。能力项以及加固的等级，根据游戏自身的情况可以自由选择生效。

### 代码混淆

混淆是代码特征工程的基础上，对代码进行功能等价、结构异型、名称重组的一种转换。转化后的代码不会改变原有的游戏逻辑，但名称上、结构上、控制流程上会发生巨大的变化。几乎丧失了可读性，可大幅的提升攻击者的理解成本。根据转化复杂程度的不同，插件里提供了初级、中级、高级三类选项，开发者可以在体积膨胀开销和结果代码复杂程度之间，自行衡量选择。

以下是几行简单的示例代码，在选择不同的混淆等级后，转化出来的结果代码。

示例代码：
    
    
    {
        let info = {name: "xiaoming", year: 2024, version: 2};
        console.log(info);
        info.version =3;
        let more = {obj: info};
        console.log(more.info);
        more.obi.name ='wx';
        console.log(more);
    }
    

“初级”选项的混淆结果：
    
    
    let a=Math.log,b=Math.pow,c=Math.floor,d=Math.random,e=Math.exp,f=Math.abs,g=Math.round,h=Math.E,i=Math.LN10,j=Math.LN2,k=Math.LOG10E,l=Math.PI,m=Math.SQRT1_2,n=Math.SQRT2;{let a={name:"xiaoming",year:2024,version:2};console.log(a);a.version=3;let b={obj:a};console.log(b.obj);b.obj.name="wx";console.log(b)}
    

“中级”选项的混淆结果：
    
    
    let a=Math.log,b=Math.pow,c=Math.floor,d=Math.random,e=Math.exp,f=Math.abs,g=Math.round,h=Math.E,i=Math.LN10,j=Math.LN2,k=Math.LOG10E,l=Math.PI,m=Math.SQRT1_2,n=Math.SQRT2;let o=80,p=26,q=46,r=35,s=22,t=99,u=23,v=45,w=3,x=68,y=50,z=40,A=90,B=79,C=21,D=57,E=51,F=22,G=63,H=49,I=85,J=39,K=99,L=10,M=81,N=73,O=32,P=27,Q=94,R=1,S=41,T=60,U=74,V=11,W=88,X=64,Y=13,Z=37,_0=69,_1=11,_2=28,_3=11,_4=33,_5=87,_6=73,_7=50,_8=27,_9=79,ba=42,bb=35,bc=70,bd=50,be=31,bf=59,bg=93,bh=70,bi=43,bj=70,bk=16,bl=54,bm=57,bn=21,bo=77,bp=55,bq=2,br=28,bs=23,bt=88,bu=93,bv=58,bw=65,bx=72,by=68,bz=53,bA=32,bB=60,bC=16,bD=47,bE=71,bF=69;let bG=g(2*a(f(31*Y+70*bj)))<=g(a(13*13+70*bj)+a(be*be+70*bj)),bH=g(2*a(f(68*bo+bC*bC)))<=g(a(bC*bC+77*77)+a(16*bC+by*by)),bI=16*bC+99*t+94*Q+22*22<16*22+22*Q+99*16+Q*t,bJ=c((16+X+_1)/3)>=c(e((a(X)+a(11)+a(16))/3)),bK=g(2*a(f(57*_6+93*99)))<=g(a(bu*bu+73*_6)+a(99*K+57*bm)),bL=g(2*a(f(16*y+72*D)))>g(a(50*y+D*D)+a(16*bC+bx*bx)),bM=_4*_4+93*bu+47*47+79*_9<93*_4+79*bu+47*_9+33*bD,bN=c((O+G+_5)/3)<c(e((a(32)+a(_5)+a(G))/3)),bO=c((85+11+P)/3)<c(e((a(I)+a(V)+a(27))/3)),bP=c((x+37+23)/3)<c(e((a(bs)+a(x)+a(37))/3)),bQ=c((s+U+69)/3)<c(e((a(_0)+a(U)+a(22))/3)),bR=g(2*a(f(bx*bq+81*M)))<=g(a(72*bx+M*M)+a(M*M+2*bq)),bS=g(2*a(f(10*L+3*Z)))<=g(a(10*L+3*3)+a(10*L+37*37)),bT=28*_2+80*o+37*37<28*Z+80*Z+28*80,bU=g(2*a(f(32*_6+J*B)))<=g(a(32*32+39*J)+a(B*B+73*73)),bV=c((p+53+27)/3)<c(e((a(P)+a(bz)+a(p))/3)),bW=g(2*a(f(69*69+1*88)))<=g(a(1*R+_0*_0)+a(88*bt+69*69)),bX=g(2*a(f(50*be+V*_4)))>g(a(11*11+50*y)+a(33*_4+be*be)),bY=g(2*a(f(K*be+ba*ba)))>g(a(42*42+K*K)+a(42*ba+31*be)),bZ=10*L+M*M+74*U+Z*Z<10*74+U*Z+81*L+81*Z,b0=13*13+16*bk+31*31+B*B>=79*31+16*Y+79*Y+be*bk,b1=g(2*a(f(37*q+s*s)))<=g(a(22*s+37*Z)+a(s*s+46*q)),b2=58*58+22*s+bB*bB+_1*_1<58*_1+bB*s+60*bv+11*s,b3=g(2*a(f(69*37+54*bc)))>g(a(69*_0+54*bl)+a(37*Z+70*bc)),b4=g(2*a(f(D*D+70*br)))>g(a(57*D+br*br)+a(bc*bc+57*D)),b5=g(2*a(f(60*br+94*bo)))<=g(a(60*60+77*bo)+a(br*br+94*94)),b6=bl*bl+63*G+69*bF+88*bt>=54*69+88*63+69*88+63*bl,b7=58*58+63*G+70*bc>=bc*G+bv*bc+63*58,b8=R*R+40*40+54*bl+88*bt>=1*54+z*bt+40*bl+1*bt,b9=70*bh+81*M+Q*Q<70*M+81*Q+70*94,ca=37*Z+70*bh+73*N<Z*bh+70*N+73*37,cb=c((28+t+bf+by)/4)<c(e((a(68)+a(28)+a(99)+a(59))/4)),cc=99*K+57*bm+28*_2+40*40>=40*K+bm*z+99*28+57*_2,cd=c((bs+s+Z)/3)<c(e((a(22)+a(Z)+a(bs))/3)),ce=11*_1+57*D+_0*_0+60*60<bB*_0+11*bB+57*_0+57*_1,cf=81*81+bd*bd+W*W+16*16>=W*M+50*16+16*88+81*bd,cg=g(2*a(f(31*63+_9*w)))<=g(a(31*be+79*79)+a(w*w+63*63)),ch=c((35+H+T)/3)>=c(e((a(H)+a(bb)+a(60))/3)),ci=93*93+28*28+41*S+bA*bA>=_2*bA+93*_2+41*93+32*S,cj=_6*_6+31*be+39*J>=73*be+73*39+39*be;{let q,a,s,b,u,c,d,e,z,f;let g=1;String.prototype.m=String.prototype.substr;String.prototype.s=function(a){let b=[];for(let c=0;c<this.length;c+=a)b.push(this.slice(c,c+a));return b};let h={m:function a(a,b){let c=a.length;let d=[];for(let e=0;e<c;++e){let f=-1;if(2===b){f=1*(e-56)%2;if(f<0)f+=c}if(3===b){f=1*(e-67)%6;if(f<0)f+=c}if(4===b){f=1*(e-47)%8;if(f<0)f+=c}if(7===b){f=1*(e-39)%7;if(f<0)f+=c}if(8===b){f=5*(e-27)%8;if(f<0)f+=c}if(f>=0)d[f]=a[e]}return d.join("")}};let i=h.m("wx",2);let j=i.s(2);let k=h.m("jlogob",3);let l=k.s(3);let m=h.m("ameyearn",4);let n=m.s(4);let o=h.m("sionver",7);let p=o.s(7);let r=h.m("inoxiagm",8);let t=r.s(8);let v="2,Wq,A,B";function w(a){let b='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&()*+./:;<=>?@[]^_`{|}~"',c={};for(let a=0;a<b.length;++a)c[b[a]]=a;function d(a){let d=b.length,e=0,f=a.length,g=1;for(let b=f-1;b>=0;b--){let f=c[a[b]];e+=f*g;g*=d}return e}let e=",",f=a.split(e),g=Number(f[0]),h=[];for(let a=1;a<f.length;++a){let b=d(f[a]);h.push(b+g)}return h}let x=w(v);if(g)q=n[0];if(g)a=t[0];if(g)s=n[1];if(g)b=x[0];if(g)u=p[0];if(g)c=x[1];if(g)d=l[0];if(g)e=x[2];if(g)z=l[1];if(g)f=j[0];g=0;let y={[q]:a,[s]:b,[u]:c},A=(console<a href="y" target="_blank">d</a>,y[u]=e,{[z]:y});console<a href="A[z]" target="_blank">d</a>,A[z][q]=f,console<a href="A" target="_blank">d</a>}
    

“高级”选项的混淆结果：
    
    
    let a=Math.log,b=Math.pow,c=Math.floor,d=Math.random,e=Math.exp,f=Math.abs,g=Math.round,h=Math.E,i=Math.LN10,j=Math.LN2,k=Math.LOG10E,l=Math.PI,m=Math.SQRT1_2,n=Math.SQRT2;let o=84,p=53,q=89,r=84,s=26,t=47,u=60,v=26,w=40,x=89,y=51,z=3,A=63,B=8,C=76,D=58,E=96,F=67,G=69,H=14,I=96,J=85,K=81,L=57,M=9,N=97,O=74,P=30,Q=1,R=68,S=78,T=39,U=35,V=37,W=83,X=34,Y=72,Z=4,_0=66,_1=76,_2=25,_3=12,_4=13,_5=9,_6=24,_7=21,_8=52,_9=84,ba=45,bb=71,bc=73,bd=34,be=67,bf=19,bg=24,bh=23,bi=81,bj=93,bk=7,bl=48,bm=21,bn=49,bo=29,bp=31,bq=42,br=54,bs=55,bt=29,bu=57,bv=34,bw=46,bx=9,by=78,bz=80,bA=58,bB=69,bC=8,bD=77,bE=96,bF=29;let bG=g(2*a(f(H*u+34*34)))<=g(a(14*H+34*bd)+a(60*u+34*bd)),bH=c((46+96+C)/3)<c(e((a(bw)+a(76)+a(bE))/3)),bI=g(2*a(f(23*bd+57*57)))>g(a(57*bu+23*bh)+a(57*57+bd*bd)),bJ=g(2*a(f(40*w+7*I)))<=g(a(bk*bk+40*w)+a(96*I+40*w)),bK=9*_5+19*bf+N*N+o*o<N*_5+9*bf+84*97+19*o,bL=g(2*a(f(52*58+72*bg)))<=g(a(72*72+_8*_8)+a(58*58+24*24)),bM=c((I+9+bc+W)/4)>=c(e((a(W)+a(I)+a(bc)+a(_5))/4)),bN=24*_6+51*51+29*bo<51*29+24*bo+24*y,bO=g(2*a(f(V*z+93*G)))>g(a(69*69+V*V)+a(93*bj+3*z)),bP=g(2*a(f(84*84+8*U)))<=g(a(r*r+bC*bC)+a(U*U+r*r)),bQ=g(2*a(f(46*24+96*J)))>g(a(46*bw+96*I)+a(85*85+24*bg)),bR=c((_7+66+53+19)/4)>=c(e((a(66)+a(bf)+a(_7)+a(53))/4)),bS=29*29+77*77+bd*bd>=bF*bd+bD*bF+bd*bD,bT=bB*bB+_4*_4+49*bn+bl*bl>=49*69+48*_4+48*bB+13*bn,bU=52*_8+51*y+63*A>=51*A+52*y+63*_8,bV=g(2*a(f(78*x+96*42)))>g(a(96*96+78*S)+a(bq*bq+89*x)),bW=g(2*a(f(Y*_6+69*26)))>g(a(69*69+Y*Y)+a(26*v+24*_6)),bX=30*P+bl*bl+40*w+66*_0>=bl*_0+66*w+P*bl+40*P,bY=g(2*a(f(9*O+84*84)))<=g(a(74*O+84*r)+a(9*bx+84*84)),bZ=g(2*a(f(89*F+69*S)))>g(a(S*S+q*q)+a(67*F+69*69)),b0=c((bn+96+9+46)/4)<c(e((a(bw)+a(49)+a(bE)+a(9))/4)),b1=78*78+_5*_5+48*bl+3*z<3*bl+bl*_5+78*z+9*by,b2=g(2*a(f(96*bA+24*71)))>g(a(58*bA+24*_6)+a(96*bE+71*71)),b3=c((bw+21+55+69)/4)>=c(e((a(bs)+a(bB)+a(bm)+a(46))/4)),b4=ba*ba+47*47+60*u<45*60+60*47+45*t,b5=9*bx+84*_9+40*w+29*bt>=9*bt+84*9+29*40+w*_9,b6=c((bD+s+U)/3)>=c(e((a(26)+a(bD)+a(U))/3)),b7=21*bm+51*y+J*J+U*U<21*y+51*J+35*85+21*U,b8=c((Y+J+40)/3)>=c(e((a(Y)+a(85)+a(40))/3)),b9=c((bb+47+bg+_7)/4)<c(e((a(21)+a(71)+a(bg)+a(47))/4)),ca=c((Y+29+bh)/3)>=c(e((a(bo)+a(23)+a(72))/3)),cb=63*63+N*N+69*bB+85*J>=A*N+85*A+69*85+97*bB,cc=g(2*a(f(25*U+96*78)))>g(a(bE*bE+25*_2)+a(78*78+35*35)),cd=X*X+67*be+68*R+89*89>=68*67+34*be+89*R+89*X,ce=w*w+N*N+58*bA+v*v>=97*26+40*97+58*w+v*bA,cf=84*84+66*66+bp*bp+68*R<31*66+84*R+_0*o+31*R,cg=c((89+13+p)/3)<c(e((a(53)+a(13)+a(89))/3)),ch=69*69+63*A+83*W+bp*bp>=83*63+69*W+63*bp+69*bp,ci=bk*bk+60*60+F*F<7*u+u*F+67*bk,cj=c((76+46+bg)/3)<c(e((a(76)+a(bw)+a(bg))/3));{let v,w,x,a,b,c,d,e,f,I,g;let h=1;String.prototype.m=String.prototype.substr;String.prototype.s=function(a){let b=[];for(let c=0;c<this.length;c+=a)b.push(this.slice(c,c+a));return b};let i={r:function a(a,b){let c=a.length;let d=[];for(let e=0;e<c;++e){let f=-1;if(2===b){f=1*(e-20)%2;if(f<0)f+=c}if(3===b){f=5*(e-7)%6;if(f<0)f+=c}if(4===b){f=1*(e-49)%8;if(f<0)f+=c}if(5===b){f=4*(e-13)%5;if(f<0)f+=c}if(7===b){f=2*(e-1)%7;if(f<0)f+=c}if(8===b){f=5*(e-130)%8;if(f<0)f+=c}if(f>=0)d[f]=a[e]}return d.join("")}};let j=i.r("wx",2);let k=j.s(2);let l=i.r("bogolj",3);let m=l.s(3);let n=i.r("rnameyea",4);let o=n.s(4);let p=i.r("lppay",5);let q=p.s(5);let r=i.r("ovrines",7);let s=r.s(7);let t=i.r("noxiagmi",8);let u=t.s(8);let y="2,Wq,A,B";function z(a){let b='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&()*+./:;<=>?@[]^_`{|}~"',c={};for(let a=0;a<b.length;++a)c[b[a]]=a;function d(a){let d=b.length,e=0,f=a.length,g=1;for(let b=f-1;b>=0;b--){let f=c[a[b]];e+=f*g;g*=d}return e}let e=",",f=a.split(e),g=Number(f[0]),h=[];for(let a=1;a<f.length;++a){let b=d(f[a]);h.push(b+g)}return h}let A=z(y);if(h)v=o[0];if(h)w=o[1];if(h)x=s[0];if(h)a=u[0];if(h)b=A[0];if(h)c=A[1];if(h)d=q[0];if(h)e=m[1];if(h)f=A[2];if(h)I=m[0];if(h)g=k[0];h=0;function B(a,b,c){let d=a[b];a[b]=a[c];a[c]=d}let C,D;C=function(){let d;d={[v]:0,[w]:0,[x]:0};d[v]=a;d[w]=b;d[x]=c;return d}[d](),D=(console<a href="C" target="_blank">e</a>,C[x]=f,function(){let a;a={[I]:0};a[I]=C;return a}[d]());console<a href="D[I]" target="_blank">e</a>,D[I][v]=g,console<a href="D" target="_blank">e</a>}
    

### 代码水印

代码水印是在代码加固过程中添加的一段身份指纹信息，对代码运行逻辑不产生任何影响，无额外的性能开销，同时还具有隐蔽性和唯一性。水印信息在一定程度上证明了代码和开发者的权益关系，在判定代码归属关系时候，可以作为证据向平台寻求支持。

![](https://res8.wxqcloud.qq.com.cn/wxdoc/3257573a-bb05-4dfd-b167-378fc5448978.png)

### 动态保护

加固后的代码，攻击者会进行分析和逆向混淆等，视图理解和复原代码逻辑。因此，本方案也支持了运行时加固，杜绝静态分析的可行性，并从多方面提升动态调试、注入的成本，进一步夯实加固代码的安全性。

### 体积与性能开销

性能和体积在小游戏场景里是非常重要的，相关的开销上给予了针对性优化考虑。在既有数据样本里统计到，运行性能上额外损耗非常低(几乎可忽略)。代码体积膨胀上，"高级"加固 平均<= 30%，“中级”加固 平均<=10%，低级”加固 平均<=5%。

注意：提倡源码直接加固，尽量不要引入第三方混淆工具参与二次加固，带来不必要的开销和安全隐患。

### 如何使用

下载并安装 **1.06.2401020** 或以上版本的开发者工具、安装 "游戏深度保护" 插件即可使用。详细说明见：[游戏深度保护插件](<https://developers.weixin.qq.com/minigame/dev/devtools/codeprotect>)。

## 游戏内容安全

游戏内容安全是一套更适合小游戏场景的UGC安全解决方案，相关标准更贴合游戏行业，覆盖主流的游戏违规检测项，同时结合一定的反恶意账号能力。相关能力以服务端API的形式提供， 支持开发者自由添加关键词，定制化游戏的安全策略。

接口调用需符合规范，严禁通过接口实施撞库或进行异常高频请求，例如违规测试等。违规操作将会被限制小游戏的运营能力。

### 文本内容安全

**功能描述**

文本内容安全能够识别游戏领域常见的违规类型，例如：谩骂、低俗、营销广告、小语种，无意义灌水以及违法违规，帮助构建健康的游戏环境。

  * •违法违规内容识别
  * •谩骂，隐晦低俗，软色情
  * •灰黑产广告引流识别
  * •文本变种对抗，拆字叠楼识别
  * •文本小语种类型识别
  * •灌水无意义文本识别

**应用场景**

  * •用户昵称检测
  * •聊天类文本检测
  * •游戏素材类文本检测
  * •社区类文本检测
  * •资料类文本检测
  * •其他文本检测场景

**开发接入指引**

[调用API](<https://developers.weixin.qq.com/minigame/dev/api-backend/open-api/sec-check/security.msgSecCheck.html>)

### 图片内容安全

**功能描述**

图片内容安全主要针对游戏领域常见的违规类型，例如：色情，低俗软色情、血腥、恐怖、恶心不适、营销引流广告，辱骂以及违法违规，帮助构建健康的游戏环境。

  * •违法违规图片识别
  * •色情图片识别
  * •低俗软色情图片识别
  * •血腥、恐怖、恶心不适图片识别
  * •营销引流广告图片识别
  * •辱骂图片识别

**应用场景**

  * •用户头像检测
  * •公屏聊天图片检测
  * •游戏素材类检测
  * •资料类图片检测
  * •社区类图片检测
  * •其他图片检测场景

**开发接入指引**

[同步接口](<https://developers.weixin.qq.com/minigame/dev/api-backend/wxa-sec-check/api_mediacheckasync>)

[异步接口](<https://developers.weixin.qq.com/minigame/dev/api-backend/wxa-sec-check/api_mediacheckasync>)

### 音频内容安全

**功能描述**

主要针对游戏领域常见的违规类型（例如：色情、涉政、谩骂等违规内容），从而降低人工审核成本，提高审核效率，帮助构建健康的游戏环境。

**应用场景**

  * •游戏聊天频道的实时语音
  * •游戏社区论坛的语音内容
  * •其他音频检测场景 

**开发接入指引**

[调用API](<https://developers.weixin.qq.com/minigame/dev/api-backend/wxa-sec-check/api_mediacheckasync>)

### 常见问题

**请不要完全依赖内容安全服务**

将小游戏UGC内容接入内容安全服务，可以有效缓解人工审核、降低违规风险，但接入内容安全服务并不意味着一劳永逸解决所有问题，为了进一步确保内容安全，仍建议开发者关键环节上设置人工审核确认，以弥补机器识别存在的不足。建议：API判断为review的内容，说明可能存在风险，需要人工确认；API判断为pass的内容，可能包含被漏掉的违规内容，可以按照一定比例抽查。

**如果对内容安全解决方案有使用疑问或者需求，应该如何反馈？**

有疑问和需求可以点击[咨询小助手](<https://work.weixin.qq.com/kfid/kfcca4feec277f91616>)。

## 游戏反外挂

游戏反外挂是游戏安全的重要组成部分，尤其是当游戏具备一定的用户和营收规模之后，如果外挂问题不及时处理，会影响游戏公平性，造成核心玩家流失，营收减少。因此，我们提供了基础的，通用的反外挂能力，帮助开发者抵御外挂攻击，保障游戏的健康可持续运营。

如遇站外侵权情况，可向平台反馈线索：[侵权线索反馈](<https://mp.weixin.qq.com/cgi-bin/loginpage?redirect_url=https%253A%252F%252Fmp.weixin.qq.com%252Fwxamp%252FsubApp%252Fgame%252Fminigame%252Fexternal-cheat-feedback>)

### 协议挂对抗

协议挂是一种比较常见的外挂，其工作原理是伪造数据包，向后台服务发起网络通信。协议挂攻击的是开发者的后台服务，我们整理了小游戏中常见的后台安全风险，用于帮助开发者在开发环节中发现和修复相关漏洞，避免上线后被黑灰产利用。针对协议挂，平台提供了加密网络通道和微信网关，可大幅提升网络协议破解的成本，推荐开发者接入

#### 后台安全风险

##### 接口鉴权

接口鉴权是指后台接口（包括自建后台接口与云函数）在被调用时需要对本次接口调用进行权限校验，否则容易发生越权行为。

  * •平行越权：即每个接口应该区分不同用户，每个用户只能操作自己的数据。例如：用户 A1 把请求改为 opt_userinfo.php?id=A2 便可以操作/获取到 A2 用户的信息，信息泄露或破坏。
  * •垂直越权：即每个接口区分当前用户的权限，每个用户只能操作自己有权的数据。例如：用户 A1 不是管理员，但他请求 opt_alluserinfo.php 来操作/获取了所有用户信息，造成泄露或破坏。

建议：

  * •敏感数据、能力相关接口需要在后台进行鉴权。通常可校验 openid、 IP 地址、自定义登录态等信息。
  * •鉴权逻辑应放在后台进行，不应在小游戏前端以隐藏页面、隐藏按钮等方式来代替。

##### 信息泄露

敏感信息是指一旦泄露可能会对开发者的业务、合作伙伴和用户带来利益损害的数据，包括但不限于**账号 Appsecret、特权账号信息、后台加密密钥、登录账户密码、用户身份证号、手机号、银行卡号等。**

建议：

  * •敏感信息不应以明文、注释、可逆的编码方式（如 base64）、不安全散列函数（如 MD5、 SHA1）等形式出现在小游戏文件内。
  * •如果小游戏存在敏感信息泄露的问题，微信开放平台将有可能下架该小游戏，并暂停该小游戏的相关服务。
  * •部分敏感信息如用户的银行卡号、手机号等需要用于展示的，需要进行脱敏处理。常用脱敏规范如下：

敏感信息类型 | 展示样例  
---|---  
姓名 | 名字只有两个字，对第一个字打码，如： _三。 多于两个字，只保留第一个和最后一个，其余都打码，如：王_ 四、欧**五  
身份证 | 只显示第一位和最后一位，如：3****************1  
手机号 | 除去手机国际码后，手机号位数不少于10位时，只显示前三位和最后两位，如：156******77。手机号位数少于10位时，只显示前两位和后两位，如：12*****89。国家码可以完全显示。  
银行卡 | 只显示最后4位，如：************1234  
  
##### 接口条件竞争

接口条件竞争是指同时多次请求同一个接口，导致这个接口同时响应时有某些条件上的竞争的 bug。比较常见的例子是攻击者通过并发 https 请求而达到多次获奖、多次收获、多次获赠等非正常逻辑所能触发的效果。示例代码：
    
    
    // 从DB里查询该用户剩余获奖次数，初始值为1
    int remain_times = SelectRemainTimes();
    
    if(1 == remain_times){
        EarnRewards();          // 用户获得奖励
        CleanRemainTimes();     // 在DB里更新获奖次数为0
    }
    

开发者的设计本意是只允许用户获得一次奖励。但是当同一个用户的 n 个请求多次到达时，多个线程分别处理，`SelectRemainTimes` 查出来次数都是 1，这个用户就可以最多获得 n 次奖励。

建议：对关键（完整）逻辑加锁操作或把关键逻辑以队列任务的形式去进行处理。

#### 加密网络通道

##### HTTPS加密网络通道

为了避免小游戏端上与后台通信的网络请求被分析、篡改，开发者可以使用平台的"小程序加密网络通道"能力，提升安全性。

从基础库 [2.17.3](<../runtime/client-lib/compatibility.md>) 开始支持 

###### 功能介绍

为了避免小游戏与开发者后台通信时数据被截取和篡改，微信侧维护了一个用户维度的可靠key，用于小游戏和后台通信时进行加密和签名。

开发者可以分别通过小游戏前端和微信后台提供的接口，获取用户的加密 key。

###### 使用说明

在小游戏中开发者可以使用[UserCryptoManager.getLatestUserKey](<https://developers.weixin.qq.com/minigame/dev/api/base/crypto/UserCryptoManager.getLatestUserKey.html>)获取获取用户最新的加密密钥信息。

**前端调用示例**
    
    
    const somedata = 'xxxxx'
    const userCryptoManager = wx.getUserCryptoManager()
    userCryptoManager.getLatestUserKey({
        success({encryptKey, iv, version, expireTime}) {
            const encryptedData = someAESEncryptMethod(encryptKey, iv, somedata)
            wx.request({
               data: encryptedData,
               success(res) {
                    const decryptedData = someAESDEcryptMethod(encryptKey, iv, res.data)
                    console.log(decryptedData)
               }
            })
        }
    })
    

someAESEncryptMethod 和 someAESDEcryptMethod 分别为加解密函数，由开发者自行引入加解密库来实现，基础库暂时不提供加解密能力。 开发者可参考开源加密库: <https://github.com/ricmoo/aes-js> <https://github.com/flash1293/aes-wasm>

在开发者服务端，可以调用[ _getUserEncryptKey_](<https://developers.weixin.qq.com/minigame/dev/api-backend/internet/api_getuserencryptkey>)后台接口获取用户最近三次的key。在获取key的同时，接口会携带version信息，开发者可以比较version版本来选择使用对应的key对数据进行加解密。

**服务端调用示例**
    
    
    curl -X POST "https://api.weixin.qq.com/wxa/business/getuserencryptkey?access_token=ACCESS_TOKEN&openid=OPENID&signature=SIGNATURE&sig_method=hmac_sha256"
    

##### Donut网关方案

为了避免小游戏端上与后台通信的网络请求被拦截、分析、篡改，开发者可以使用Donut服务，端上的网络请求将直接接入微信私有链路，经过网关，转发到开发者后台，避免上述安全问题。[微信安全网关](<https://developers.weixin.qq.com/platform/gateway?utm_source=developers_home_ga>)

### 内存挂对抗

内存挂是的原理一般分三步走：搜索目标数值->定位内存空间->篡改内存数值。应对方案上，开发者不能信任单一数值，核心数据在内存里需要创建“校验对象”，采信数据前做双重/多重校验，校验不通过的话，则认为数值被外挂攻击了，可以进行下一步动作，例如：游戏中断、游戏产出作废、封禁账号等。开发者可接入[小游戏内存风险检测与辅助加固工具](<https://developers.weixin.qq.com/minigame/dev/devtools/memoryprotect>),选择需要保护的关键内存数值，加固之后的内存可隔断外挂搜索、设置内存陷阱，会触发自定义的反制手段，有效保护内存数值。也可参考下面的两种保护方式自行实现。

#### 内存数值校验

游戏在运行过程中的关键内存数值，需要进行校验，如果校验不通过，则可认为被外挂攻击了，再进行下一步动作。下面是一个内存数值校验的示例：
    
    
    /////////////////////////////// 感知篡改需要用到的 hash 函数和 检查函数
    function MyHash(val){
        return val + 10;
    }
    
    function CheckCoin(obj){
        if(obj.coin_hash !== MyHash(obj.coin)){
            console.info("检测到外挂");
            // 继续做其他事：退出游戏，或者上报等
        } 
    }
    
    ///////////////////////////// 以下是原业务逻辑代码区
    let obj = {};
    
    // 写关键数值时, 也同步写一个校验值
    obj.coin = 10;
    obj.coin_hash = MyHash(obj.coin);    // 写校验值
    
    
    // 感知内存篡改方式1，定时每五秒检查一次
    setInterval(CheckCoin, 5000, obj);
    
    // 感知内存篡改方式2，在关键业务逻辑处检查
    function uploadCoin(obj){
        // 在上传云端金币时，先检查一次
        CheckCoin(obj);
        // 校查无问题，再做剩余逻辑
    }
    

#### 内存数值隐藏

在不做特殊处理的情况下，小游戏运行时关键的数值都是以明文的方式存储在内存中的，为内存篡改挂提供了便利，这里建议隐藏游戏内的核心数值。下面是一种有效的实践，使用JS的Proxy特性。
    
    
    let obj = {};
    
    let p_obj = new Proxy(obj, {
        get(target, key, receiver) {
          // 如果为数值，则返回减7
          if (typeof target[key] === 'number') {
            return target[key] - 7;
          }
        },
        set(target, key, value, receiver) {
            // 如果为数值，则写入加7
            if (typeof value === 'number') {
                value += 7;
            }
            return Reflect.set(target, key, value, receiver);
        }
    
    }); 
    
    // 后续所有的操作都针对代理对象
    p_obj.coin = 10;
    
    // 不影响原有的逻辑
    console.assert(p_obj.coin === 10, 'p_obj.coin === 10');
    

### 重打包外挂对抗

重打包外挂的原理是利用APK重打包技术，注入恶意的JS代码，篡改游戏逻辑，这类外挂破坏性强，可以实现出任意逻辑的外挂效果，例如：无敌锁血，一刀秒杀，无限道具等。

#### 代码防注入

针对重打包外挂，平台提供了[代码防注入能力](<https://developers.weixin.qq.com/minigame/dev/devtools/codeprotect>)。接入此能力后，游戏运行过程中，会自动校验指定关键代码的完整性，实时检查是否被恶意注入。它是性能无损的，一旦检测到注入，就执行由开发者预先定义好的拦截动作，比如数据上报、限制特定功能、强制退出游戏等。

如下图是代码防注入的工作原理，开发者也可以参考示例代码自行实现。

![](https://res8.wxqcloud.qq.com.cn/wxdoc/cbfd1dd9-f246-4722-bf1f-aa84d1d19bfb.png)
    
    
    // 哈希函数，计算代码校验值
    function simpleHash(str) {
        let hash = 0;
        if (str.length === 0) return hash;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = (hash << 5) - hash + char;
            hash = hash & hash; 
        }
        return hash.toString(16); 
    }
    
    // 用于验证函数完整性的防注入检查
    function validateFunctionIntegrity(func, expectedHash, onInjected) {
    
        const functionSource = func.toString();
    
        // 计算哈希值
        const functionHash = simpleHash(functionSource);
    
        // 比较哈希值，判断是否一致
        if (functionHash === expectedHash) {
            console.log("函数代码验证通过，没有被篡改。");
        } else {
            console.log("警告：函数代码已被篡改！");
            // 如果发现代码被注入/篡改，执行开发者提供的自定义动作
            if (onInjected) {
                onInjected(); // 执行自定义的注入处理动作
            }
        }
    }
    
    // 待保护的函数
    function targetFunction() {
        console.log("Hello, world!");
    }
    
    // 目标函数的校验哈希值
    const expectedHash = "f2a890b9"; 
    
    // 开发者可以定义一个自定义动作，比如上报注入、强制退出等
    function customInjectionHandler() {
        console.log("执行自定义处理动作！例如：上报数据或限制功能");
        // 在这里可以做更多处理，比如：
        // 1. 上报注入数据
        // 2. 强制退出游戏或应用
        // 3. 禁用某些功能
    }
    
    // 定时器，每5秒检查一次函数完整性
    setInterval(() => {
        validateFunctionIntegrity(targetFunction, expectedHash, customInjectionHandler);
    }, 5000);  // 每5秒钟检查一次
