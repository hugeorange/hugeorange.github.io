##### 基本介绍
- 源代码放在 `blog` 分支，编译后代码部署在 `master`分支
- 克隆当前仓库进入 `blog` 分支进行写作

##### 基本命令 
- 本地启动命令 `yarn start` 开始进行写作
- 创建新文章 `yarn new [文章名称]`
- 将代码push到远程仓库 blog 分支
- 部署命令本地执行 `yarn deploy`

##### 待做事项
- [ ] 优化资源加载-静态资源放在国内cdn平台上提高加载速度
- [ ] gitment、不蒜子 插件的观察或者找到更好的替代品
- [ ] 更换到自己的域名
- [ ] github 屏蔽了百度的爬虫，[尝试把静态page部署到 coding page](https://blog.csdn.net/qq_36759224/article/details/100899489)
- [ ] 每次修改 `themes/includes` 下面的js文件，node服务并不会重启，不知什么原因，很难受
##### 需要思考的地方
- 分类，标签怎么安排，才能更好的管理文章