## hexo 博客
- 克隆当前仓库进入 `blog` 分支进行写作
- 本地启动 `yarn start`
- 创建新文章 `yarn new [文章名称]`
- 部署 `yarn deploy`
##### 基本介绍
- 源代码放在 `blog` 分支，编译后代码部署在 `master`分支

##### 功能
- [x] 统计 uv、pv [不蒜子](http://ibruce.info/2015/04/04/busuanzi/) -- 统计uv不准确
- 关于我（新增页面）依次在 `scipts/index.js layout/xxx.ejs include/generate/xxx.js` 增加相应的项
- [ ] 增加小工具页面-tool，以后可以放一些小工具，比如：图片压缩，单位转换函数之类的
- [x] 评论插件 [gitment借助issue](https://imsun.net/posts/gitment-introduction/)
- [x] 头像、favicon 更换
- [x] 页脚网站运行时间
- [x] 代码高亮显示文件名称 [md 书写时注意事项](https://hexo.io/zh-cn/docs/writing.html) [md2](http://yearito.cn/posts/hexo-writing-skills.html) 
- [ ] 更换到自己的域名
- 网站美化-参考网站
    * [alphalxy](https://www.alphalxy.com/2019/03/customize-icarus/#more)
    * [xxs](https://verbf.github.io/post/deeplearning-ai-4-week-4/)
    * [yearito](http://yearito.cn/about/)
    * [知乎讨论](https://www.zhihu.com/question/24422335/answer/667475744)