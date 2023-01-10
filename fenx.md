# 约定式提交

通常我们通过 commit message 说明本次提交的目的，但是很多人在提交 git 信息的时候，为了图方便，大多都会简单的写一下，开发一时爽，维护火葬场

# 参照物

[VUE](https://github.com/vuejs/vue)

# 参考文献

https://www.conventionalcommits.org/zh-hans/v1.0.0/
https://github.com/zuoxiaobai/commitizen-practice-demo

# 使用手册

```javascript
//安装commitizen 及其适配器
npm install -g commitizen cz-conventional-changelog  # 安装规范化提交插件
//配置适配器 mac用户
echo '{ "path": "cz-conventional-changelog" }' > ~/.czrc
//windows用户
echo { "path": "cz-conventional-changelog" } > C:\Users\12747\.czrc
//至此，第一步全局安装Commitizen完成。在任何一个git仓库中运行git cz，就可以通过Commitizen来填写commit message完成提交。
git cz
`
? Select the type of change that you're committing: (Use arrow keys)
> feat:     A new feature
  fix:      A bug fix
  docs:     Documentation only changes
  style:    Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
  refactor: A code change that neither fixes a bug nor adds a feature
  perf:     A code change that improves performance
  test:     Adding missing tests or correcting existing tests
(Move up and down to reveal more choices)

// 对某些模块有影响 回车下一步
What is the scope of this change (e.g. component or file name): (press enter to skip)
// 简短描述
Write a short, imperative tense description of the change (max 90 chars):
// 长描述
Provide a longer description of the change: (press enter to skip)
// 有什么突破性的变化吗
Are there any breaking changes?
// 是否改变了issues
Does this change affect any open issues?
`

```

# commit message

# git 提交的坑

在开发中大多技术使用 git 都会遇到文件夹名称大小写修改 push 不上的问题
git 默认是忽略检查文件大小写的，git 觉得这样会对性能有影响
