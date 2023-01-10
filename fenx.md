# 约定式提交

通常我们通过 commit message 说明本次提交的目的，但是很多人在提交 git 信息的时候，为了图方便，大多都会简单的写一下，开发一时爽，维护火葬场

# 参照物

[VUE](https://github.com/vuejs/vue)

# 参考文献

https://www.conventionalcommits.org/zh-hans/v1.0.0/
https://github.com/zuoxiaobai/commitizen-practice-demo

# commit message 体验 low 版 cz

```javascript
//安装commitizen 及其适配器
npm install -g commitizen cz-conventional-changelog  # 安装规范化提交插件
//配置适配器 mac用户
echo '{ "path": "cz-conventional-changelog" }' > ~/.czrc
//windows用户
echo { "path": "cz-conventional-changelog" } > C:\Users\你的账号\.czrc
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

npm 版本须大于等于 7.24.2，过低的话可能会导致下面有的命令无法使用
commitlint 结合 husky 可以在 git commit 时校验 commit 信息是否符合规范

- 安装 husky

```js
  npm i husky -D // 安装husky
  npx husky install // 初始化husky
  npm set-script prepare "husky install" // 写入script脚本
  npx husky add .husky/pre-commit "npm test"  // 创建一个hook 再commit-m 前置执行个npm 命令


```

pre-commit 提交前置 hook 会在 commit 之前执行.husky 里的 pre-commit 文件脚本

- 安装 commitlint

```js
npm i @commitlint/config-conventional @commitlint/cli -S

npx husky add .husky/commit-msg 'npx --no-install commitlint --edit ${1}'  // 配置校验提交信息钩子

// 创建.commitlintrc.js配置文件内容如下 自定义提交内容约束
module.exports = {
// 继承的规则
extends: ["@commitlint/config-conventional"],
// 定义规则类型
rules: {
  // type 类型定义，表示 git 提交的 type 必须在以下类型范围内
  "type-enum": [
    2,
    "always",
    [
      "feat", // 增加新功能
      "fix", // 修复 bug
      "add", // 增加代码逻辑
      "del", // 删除功能
      "update", // 更新功能
      "docs", // 文档相关的改动
      "style", // 不影响代码逻辑的改动，例如修改空格，缩进等
      "build", // 构造工具或者相关依赖的改动
      "refactor", //  代码重构
      "revert", // 撤销，版本回退
      "test", // 添加或修改测试
      "perf", // 提高性能的改动
      "chore", // 修改 src 或者 test 的其余修改，例如构建过程或辅助工具的变动
      "ci", // CI 配置，脚本文件等改动
    ],
  ],
  // subject 大小写不做校验
  "subject-case": [0], 
},
plugins: [
  {
    rules: {
      "commit-rule": ({ raw }) => {
        return [
          /^\[(feat|fix|add|del|update|docs|style|build|refactor|revert|test|perf|chore)].+/g.test(raw),
          `commit备注信息格式错误，格式为 <[type] 修改内容>，type支持${types.join(",")}`,
        ];
      },
    },
  },
],
};

```

- 测试
  修改一个文件
  git add .
  git commit -m "xxxx"

如果出现了·Error [ERR_REQUIRE_ESM]: require() of ES Module·的报错 说明你的项目不支持 require 模块
将 package.json 文件 “type”: “module” 去掉 

- standard-version（自动生成、打tag）
```js
npm install standard-version --save-dev
npm set-script release "standard-version"
npm run release
// 会出现一个changelog日志文件 文件是追加形式的
```
# git 提交的坑

在开发中大多技术使用 git 都会遇到文件夹名称大小写修改 push 不上的问题
git 默认是忽略检查文件大小写的，git 觉得这样会对性能有影响
