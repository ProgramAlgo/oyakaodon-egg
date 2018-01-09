# oyakaodon-egg



## 快速入门

<!-- 在此次添加使用文档 -->
一个eggjs + JWT + TypeScript 的 StarterKit  
如需进一步了解，参见 [egg 文档][egg]。 

### 本地开发

```bash
$ yarn install
$ yarn run tsc:w #Task watch
$ yarn run dev #Task 1
$ open http://localhost:7001/
```
 在VS Code上可以使用快捷键 ⌘+⇧+B(Mac) Control+Shift+B (Win) 然后执行下面的命令，监听typescript编译
```bash
$ yarn run tsc:w #Task watch
```

Then
```
curl 127.0.0.1:7001
// response 401

curl 127.0.0.1:7001/login
// response hello admin

curl -H "Authorization: Bearer TOKEN_FROM_LOGIN" 127.0.0.1:7001/success
// response {foo: bar}
```
### 部署

```bash
$ npm start
$ npm stop
```

### 单元测试

- [egg-bin] 内置了 [mocha], [thunk-mocha], [power-assert], [istanbul] 等框架，让你可以专注于写单元测试，无需理会配套工具。
- 断言库非常推荐使用 [power-assert]。
- 具体参见 [egg 文档 - 单元测试](https://eggjs.org/zh-cn/core/unittest)。

### 内置指令

- 使用 `npm run lint` 来做代码风格检查。
- 使用 `npm test` 来执行单元测试。
- 使用 `npm run autod` 来自动检测依赖更新，详细参见 [autod](https://www.npmjs.com/package/autod) 。


[egg]: https://eggjs.org
