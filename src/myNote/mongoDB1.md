### mongoDB
mongoDB is NoSql  
mongoDB 다운로드 환경변수 설정해준다.  
Path에 추가해준다.  
(C:\Program Files\MongoDB\Server\4.0\bin)  

cmd창을 열어 mongod, mongo 명령어가 작동하는지 확인한다.  

### mongoose
```bash
npm install mongoose
```
mongoos는 js와 mongodb를 연결해준다.

### dotenv
```bash
npm install dotenv
```

### multer
```bash
npm install multer
```

### mongoDB 접속하기

```bash
cmd > mongo
use we-tube
show collections
db.videos.remove({})
```

### eslinst 설치하기

```bash

1. remove if you installed eslint globally  $ npm uninstall eslint -g

2. install  eslint extension on vscode
https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

3.  install 3 packages manually, not by command on eslint installed globally, 
$ yarn add eslint-config-airbnb-base eslint eslint-plugin-import

4. make .eslintrc.js file and copy paste codes below
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: "airbnb-base",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {}
};

5. install eslint-config-prettier $yarn add eslint-config-prettier

6. go to .eslintrc.js file and change "extends" from   "airbnb-base", to ["airbnb-base", "prettier"],

7. go to app.js and try save by ctrl+s  then you will see red lines if eslint activates succesfully

```