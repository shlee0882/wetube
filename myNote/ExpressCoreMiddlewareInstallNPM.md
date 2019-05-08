
### Express Core 미들웨어 여러가지 설치

### morgan
```bash
npm install morgan
```
morgan 미들웨어 역할은 application에서 발생하는 모든 일들을 logging하는 것이다.  
logging에 도움을 준다.  

### helmet
```bash
npm install helmet
```
helmet 미들웨어는 application이 더 안전하도록 만들어준다.  
nodejs 앱 보안을 제공한다. 

### cookie-parser
```bash
npm install cookie-parser
```
cookieParser는 cookie를 전달받아서 사용할 수 있도록 만들어주는 미들웨어이다.  
사용자 인증 같은 곳에서 쿠키를 검사할떄 사용해야 한다.  
cookie 다루는 것을 제공한다.  

### body-parser
```bash
npm install body-parser
```
bodyParser는 사용자가 웹사이트로 전달하는 정보들을 검사하는 미들웨어이다.  
request 정보에서 form이나 json형태로 된 body를 검사한다.  
body로 부터 정보를 받게 한다.