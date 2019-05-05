
// require는 node module을 어딘가에서 가져온다.
const express = require('express')
const app = express();
const PORT = 4000;
 
function handleListening (){
    console.log(`Listening on: http://localhost:${PORT}`);
}

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
 
app.listen(PORT, handleListening);

/*

### nodeJS와 express 설치방법

1. node js 설치
2. 자신의 작업폴더 생성 후 이동
3. npm init
4. npm install express


### nodeJS 프로젝트를 Git에 올리는 방법

- git에 nodeJS 프로젝트를 올릴때 무거운 파일을 올릴 필요 없다. 
- npm init, npm install express 명령을 사용해 생성된
    package-lock.json, node_modules는 올리지 않아도 된다.

- package.json파일 하나만 있으면 node install 명령을 통해 
    node_modules, package-lock.json 파일을 받기 때문이다. 

* .gitignore 파일 생성 후 아래 내용을 추가한다.
    - node_modules
    - package-lock.json
    - 구글에서 gitignore nodejs 검색 후 내용 복사해 붙여넣기

- .gitignore에 해당 내용을 추가하면 3개만 (index.js, package.json, .gitignore) 올리면 된다.
- git clone 시 *npm install* 만 해주면 된다.


### nodejs 실행 방법

```js
    node index.js
```

- node index.js 명령을 입력하면 index.js가 실행된다.
- 하지만 실행할 js파일명(app.js? index.js?)을 알아야 하는 어려움이 있다.

- package.json을 열어 다음을 추가해준다.

```js
  "scripts": {
    "start": "node index.js"
  }
```

- npm start 시 node index.js가 호출되며 실행된다.

*/

