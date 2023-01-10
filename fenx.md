# 约定式提交

通常我们通过 commit message 说明本次提交的目的，但是很多人在提交 git 信息的时候，为了图方便，大多都会简单的写一下，开发一时爽，维护火葬场

# 参照物

[VUE](https://github.com/vuejs/vue)

# 参考文献

https://www.conventionalcommits.org/zh-hans/v1.0.0/
https://github.com/zuoxiaobai/commitizen-practice-demo

# commit message  体验low版cz

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


# husky + commitlint 提交校验
  commitlint 结合 husky 可以在 git commit 时校验 commit 信息是否符合规范
  - 安装 husky
  ```js
    npm i husky -D // 安装husky
    npx husky install // 初始化husky
    npm set-script prepare "husky install" // 写入script脚本
    npx husky add .husky/pre-commit "npm test"  // 创建一个hook 再commit-m 前置执行个npm 命令

  ```
  pre-commit 提交前置hook 会在commit之前执行.husky里的pre-commit文件脚本
  - 安装commitlint
  ```js
  npm install -g @commitlint/cli @commitlint/config-conventional
  echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js //创建文件写入内容
  npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"' //配置校验钩子
  ```

# git 提交的坑

在开发中大多技术使用 git 都会遇到文件夹名称大小写修改 push 不上的问题
git 默认是忽略检查文件大小写的，git 觉得这样会对性能有影响
