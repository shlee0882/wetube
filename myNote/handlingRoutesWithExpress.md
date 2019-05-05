### Handling Routes with Express

```js

// require는 node module을 어딘가에서 가져온다.
const express = require('express')
const app = express();
const PORT = 4000;
 
function handleListening (){
    console.log(`Listening on: http://localhost:${PORT}`);
}

function handleHome(req, res){
    res.send("hello");
}

function handleProfile(req, res){
    res.send("my profile");
}

app.get("/", handleHome);
app.get("/profile", handleProfile);


app.listen(PORT, handleListening);

```

- http://localhost:4000
- express를 가진 app 상수를 listen하여 포트 4000번으로 handleListening을 실행한다.
- / 경로로 handleHome() 실행하고 response로 화면에 hello를 보여준다.

- http://localhost:4000/profile
- express를 가진 app 상수를 listen하여 포트 4000번으로 handleListening을 실행한다.
- /profile 경로로 handleProfile() 실행하고 response로 화면에 my profile를 보여준다.

- res.send()에 현재 문자열을 넣었지만 나중에 html 파일을 넣어 보여준다.