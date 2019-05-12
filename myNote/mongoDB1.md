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