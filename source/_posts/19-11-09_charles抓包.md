---
title: charles 抓包
date: 2019-11-09
updated: 2019-11-09
tags:
    - 移动端
categories:
    - 技术
    - 移动端
keywords: 
    - 抓包
description: 
    - charles 抓包 charles 破解
toc: true
---
> 开发 hybird app 时，需要用到 charles 抓包工具，来分析网络请求，记录下安装配置的过程，以免日后忘记

<!-- more -->
## 安装、破解（系统环境：mac）
- [下载地址](https://www.charlesproxy.com/)
- [破解程序](https://www.charles.ren/)、[csdn上的大佬](https://blog.csdn.net/qq_25821067/article/details/79848589)  - 感谢大佬们的无私奉献。
<!-- 备用注册码： Registered Name: https://zhile.io  License Key: 48891cf209c6d32bf4 -->

## 配置 (电脑安装证书并信任、ios安装证书并信任)
- 电脑端：启动后会自动帮我开启代理即勾选 `Proxy -> macOS Proxy`（如未自动勾选，请自行手动勾选），然后在电脑上安装证书，然后在`钥匙串中信任该证书` - 如下图所示，这样就可以抓取电脑上的所有网络请求了（如果发现未能成功代理，请检查本机网络设置里面的`高级 -> 代理`，注意：可能回和翻墙代理产生冲突）
- <img src="http://img.code-sky.cn/charles-1.png">
- 手机端（ios）：
    - 首先确保电脑和手机连的同一 wifi，然后选择所连的wifi -> 配置代理:选择 手动 -> 填写服务器（即电脑 ip地址）-> 端口号(charles默认 8888) 
    - 手机端安装证书，点击上图所示的 `install root certification in mobile device`，弹出下图
    - <img src="http://img.code-sky.cn/WX20191109-154105@2x.png">
    - 访问上图所示地址下载安装证书: 安装位置 `设置 -> 通用 -> 描述文件`
    - 信任证书：`设置 -> 通用 -> 关于本机 -> 证书信任设置`
    - 完成以上步骤即可通过 charles 抓取 hybird app 上的网络请求了


## charles 使用技巧
- 现在一般都是 https 请求了，charles 抓取到的 https 请求都是乱码，需要在该请求上右键点击 `Enable SSL Proxy`，再重新请求就可以明文显示https请求了
- 未完待续...