### middleware란 무엇인가?

middleware는 우리가 어떤 경로로 라우팅할 때 최종 response 전에  
중간에 가로채서 실행하는 함수를 말한다.  
여기서 로그인 여부를 체크한다던가, 접속로그를 쌓는다는가 요청한 데이터를 반환하기 전에   
필요한 과정을 거치는 것을 말한다.  

### connection 함수

우리는 express에서 홈 경로(/)로 route할때  
response로 다음과 같이 console.log('Hello Home') 이라고 반환할수 있었다.

```js
const handleHome = (req, res) => res.send("Hello Home");
app.get("/", handleHome);
```

handleHome 함수와 같이  
connection 다루는 것은 reqeust, response, next를 갖는다.  
총 인자를 3개를 갖지만
위에서 req,res 인자 2개만 사용한 이유는 next 인자를 쓰지 않을 것이고  
response로 반환하기 때문에 next가 필요없는 인자이고   
다음으로 넘길 함수가 없기 떄문에 3번쨰 인자를 생략한 것이다.  

connection을 다루는 함수는 아래와 같이 3개의 인자(req, res, next)를  가진다.  

```js
const handleHome = (req, res, next) => res.send("Hello Home");
```

미들웨어로 중간에서 처리하기 원한다면 다음과 같이  
라우팅 할 경로 사이에 미들웨어로 처리를 원하는 함수를 명시하면 된다.  
( app.get("/", **betweenHome**, handleHome); )  

```js
const handleHome = (req, res, next) => res.send("Hello Home");

const betweenHome = (req, res, next) => {
    console.log("between");
    next();
}

app.get("/", betweenHome, handleHome);
```

위 소스를 보면 홈경로로 들어왔을때 betweenHome 함수가 middleware가 되고  
console.log를 찍고 next()를 통해 handleHome 함수로 가게된다.  
handleHome 에서 response를 반환하고 종료된다.  

next()는 다음으로 진행할 수 있게 도와준다.
  
만약 middleware가 있고 next()가 없다면 화면은 계속 loading상태가 된다.  
middleware를 중간에 여러개 놓을수 있어서 express서버는 양파와 같다.  
middleware를 통해 유저의 로그인 여부 확인, 로그를 쌓을수도 있다.  

하지만 middleware를 여러개 설정하고 여기저기서 쓰게 된다면  
라우팅 할 경로 중간중간에 미들웨어 함수를 명시해줘야 하므로 어려움이 있다.  
그래서 middleware를 globally 하게 사용할 수도 있다.  

### globally middleware 사용

```js
import express from 'express';

const app = express();
const PORT = 4000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);
const handleProfile = (req,res) => res.send("You are on my profile");
const handleHome = (req, res) => res.send("Hello Home");
const betweenHome = (req, res, next) => {
    console.log("between");
    next();
}
app.use(betweenHome);
app.get("/", handleHome);
app.get("/profile", handleProfile);
app.listen(PORT, handleListening);
```

app.use()를 사용하면 전역적으로 미들웨어를 실행할 수 있다.(top to bottom 실행으로 순서 중요)    
홈 경로(/), /profile 경로에 접근 시 미들웨어 함수부터 실행되고 처리한 다음 response를 반환한다.  


