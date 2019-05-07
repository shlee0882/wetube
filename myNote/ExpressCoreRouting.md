### 모듈을 사용한 코드의 분리

js es6에서는 모듈이라는 것이 있다.  
다른 파일에서의 코드를 가져와 사용할수 있다.  

```js
import express from 'express';
import morgan from "morgan";
import helmet from "helmet";
```  

express morgan helmet은 node_modules안에서 찾아온것이다.  
기존의 1개로 구성되어 있는 app.js를 2개로 분리해서 만들어보자.

app.js를 export하고    
init.js를 생성하여 app.js를 init.js로 import한다.  

app.js 코드 일부분을 옮겨 init.js에서 작성한다.  


```js
// app.js
import express from 'express';
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();
const handleHome = (req, res) => res.send("Hello from Home");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome);

app.get("/user",userRouter )

export default app;

```

app.js 파일에서 상수 app이 가지고 있는 모든 속성(cookieParser, bodyParser ... )을 export default 하고 있다.


```js

// init.js
import app from "./app";

const PORT = 4000;

const handleListening = () => console.log(`Listening on http:localhost:${PORT}`);

app.listen(PORT, handleListening);

```

init.js는 export된 app.js를 import하고 서버를 여는 메소드를 호출한다.  
import를 하면 app object를 모두 받아오는 것이다.  
<br>
### Router 

router는 많은 route들이 담긴 파일이다.

```js
// userRouter.js
export const userRouter = express.Router();

// 익명의 함수를 사용해 표현할수 있다.
userRouter.get("/", (req,res) => res.send("user index"))
userRouter.get("/edit", (req,res) => res.send("user index"))
userRouter.get("/", (req,res) => res.send("user index"))
```

userRouter.js파일에 다음과 같이 작성하고 userRouter를 export하고 있다.  
userRouter는 **default export, export** 가 있다.

```js
export default app;
```

import할떄 default export 시 ```import router from "./router";``` 라고 명시하면 되지만  
import할때 그냥 export 시   ``` import { userRouter } from "./router";``` 라고 명시해줘야한다.  

원하는 만큼의 router를 만들수 있다.  
(userRouter, passwordRouter, commonRouter, videoRouter...) 

router도 모든 걸 작은파일로 쪼개서 분할 정복할수 있다.  
