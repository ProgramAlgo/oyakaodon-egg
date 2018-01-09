# oyakaodon-egg



## QuickStart

<!-- add docs here for user -->
eggjs + JWT + TypeScript StarterKit  
see [egg docs][egg] for more detail.

### Development

```bash
$ yarn install
$ yarn run tsc:w #Task watch
$ yarn run dev #Task 1
$ open http://localhost:7001/
```
Tips:
in VS Code use ⌘+⇧+B(Mac) Control+Shift+B (Win) 
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

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org