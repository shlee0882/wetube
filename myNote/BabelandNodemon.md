### babel 이란?

js es6 최신문법을 사용해도 예전 문법으로 바꿔주는 역할을 한다.

### babel 설치

```bash
npm install @babel/node
npm install @babel/preset-env
```

### .babelrc 파일 생성, index.js 및 package.json 수정

- .babelrc 파일 생성 후 내용 추가
```js
{
	"presets": ["@babel/preset-env"]
}
```
- index.js 수정
```js
// const express = require('express');
import express from "express";
```

- package.json 수정
```js
  "scripts": {
    "start": "babel-node index.js"
  }
```

### @babel/core 설치, 
npm install @babel/core

### nodemon 설치

nodemon이란 변경사항이 발생시 서버를 자동으로 껏다 켜주는 역할을 한다.

프로젝트에 필요한게 아닌 내가 필요한 것이므로 -D를 붙여 설치한다.
```bash
npm install nodemon -D
```

설치가 완료되면 package.json 파일에 nodemon이 추가된다.
```js
  "devDependencies": {
    "nodemon": "^1.19.0"
  }
```

설치완료 후 package.json 파일을 수정한다.
```js
  "scripts": {
    "start": "nodemon --exec babel-node index.js"
  },
```

잘 설치 되었는지 확인 하려면 
index.js를 재저장 하면 자동으로 서버를 껐다 켜주는것을 반복한다.