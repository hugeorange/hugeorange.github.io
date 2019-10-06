---
title: hexo & Icarus 博客搭建总结
date: 2019-10-05
updated: 2019-10-06
tags:
    - hexo
categories:
    - 技术/hexo
keywords: 
    - hexo 博客搭建 
    - Icarus 主题自定义修改
description: 
    - hexo 博客搭建 Icarus 主题自定义修改
toc: true
# thumbnail: http://img007.hc360.cn/y1/M03/D5/FA/wKhQc1TLGYmEcbHmAAAAAODp6Jg943.jpg
# banner: http://img007.hc360.cn/y1/M03/D5/FA/wKhQc1TLGYmEcbHmAAAAAODp6Jg943.jpg
---

#### hexo 博客的搭建
- 直接参照官网即可 [地址](https://hexo.io/zh-cn/docs/)
- github上创建一个和 `[username].github.io` 的repo，master 上放 `hexo deploy`的代码，我又创建了一个`blog`分支，用于存放博客源码
<!-- more -->

#### 自定义主题选择 
- 对比了好多主题最终觉得这个主题比较简洁大方 - [Icarus](https://github.com/ppoffice/hexo-theme-icarus)
- 使用时对该主题样式魔改了好多 [魔改后的代码地址-themes/icarus](https://github.com/hugeorange/hugeorange.github.io/tree/blog)
- 统计网站`uv、pv`用的主题自带的 [不蒜子](http://ibruce.info/2015/04/04/busuanzi/)，只要将`_config.yml`里面的`busuanzi: true`，发现一个问题当用手机访问时，连续刷新会造成 `uv` 统计不准确，还没找到原因
- 评论插件用的主题自带的 `gitment`，需要配置一下参数
  ``` bash gitment 配置
    comment:
        # Name of the comment plugin
        type: gitment
        owner: hugeorange         # 账户名称
        repo: hugeorange.github.io # 评论存储的仓库，评论数据存储到该仓库内的issue里
        client_id: e966f4d67d8699dedd08 # 一下两个密码需要在github里注册OAuth Application
        client_secret: 7e4deaa079c3c0992cb90cf17dd9a26bb08d17d9 

        注册地址：https://github.com/settings/applications/new
        注册关键字说明：https://imsun.net/posts/gitment-introduction/
  ```
  * 使用过程中发现一个问题，当当前文章没有评论数据，会返回一个 `Error: Comments Not Initialized`，或者显示一个`Initialize Comments`的按钮，翻了一下该项目的issue暂时未找到原因
- 魔改底部增加网站运行时间功能 [代码地址](https://github.com/hugeorange/hugeorange.github.io/blob/blog/themes/icarus/layout/common/footer.ejs)

#### 主题魔改-参考
- [alphalxy](https://www.alphalxy.com/2019/03/customize-icarus/#more)
- [xxs](https://verbf.github.io/post/deeplearning-ai-4-week-4/)
- [yearito](http://yearito.cn/about/)
- [知乎讨论](https://www.zhihu.com/question/24422335/answer/667475744)
- hexo 博客协作指南 [官方文档](https://hexo.io/zh-cn/docs/writing) [yearito](http://yearito.cn/posts/hexo-writing-skills.html)