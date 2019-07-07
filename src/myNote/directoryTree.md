### 구조정리

npm start 시 init.js 이후  
app.js 에서 불러오는 구조정리

### app.js 구조

```bash
├─ app.js
│   ├─ express
│   ├─ morgan
│   ├─ helmet
│   ├─ cookie-parser
│   ├─ body-parser
│   │	
│   ├─ userRouter.js
│   	├─ express
│	│	├─ routes.js
│	│	├─ userController.js
│	│	│	├─ routes.js
│	│	│	│ 
│	│	│	│ getJoin(), postJoin(), getLogin(), logout()
│	│	│	│ userDetail(), editProfile(), changePassword()
│	│	│ 
│	│	│ userRouter.get(routePath, controllerMethodName);
│	│	│
│	│	│
│	├─ videoRouter.js
│	│	├─ express
│	│	├─ routes.js
│	│	├─ middleware.js
│	│	├─ videoController.js
│	│	│	├─ routes.js
│	│	│	├─ Video.js
│	│	│	│	│ const VideoSchema = new mongoose.Schema({})
│	│	│	│	│ const model = mongoose.model("Video", VideoSchema);
│	│	│	│
│	│	│	│ home(), search(), getUpload(), postUpload()
│	│	│	│ videoDetail(), getEditVideo(), postEditVideo(), deleteVideo()
│	│	│
│	│	│ videoRouter.get(routePath, controllerMethodName);
│	│	│ videoRouter.post(routePath, uploadVideo ,controllerMethodName);
│	│	│
│	│	│ 
│	├─ globalRouter.js
│	│	├─ express
│	│	├─ routes.js
│	│	├─ videoController.js
│	│	├─ userController.js
│	│	│
│	│	│ globalRouter.get(routePath, controllerMethodName);
│	│	│ globalRouter.post(routePath, controllerMethodName);
│	│	│ 
│	│	│
│	├─ routes.js
│	│	│ routes = {each const variable routesPath }
│	│	│ 
│	├─ middleware.js
│	│	├─ multer
│	│	├─ routes.js
│	│	│
│	│	│ const localMiddleware(local value setting)
│	│	│ const uploadVideo
│	│	│
│	│	
│	│ const app = express();
│	│
│	│ app.use(helmet());
│	│ app.set("view engine", "pug");
│	│ app.use("/uploads", express.static("uploads"));
│	│ 
│	│ app.use(cookieParser());
│	│ app.use(bodyParser.json());
│	│ app.use(bodyParser.urlencoded({extended: true}));
│	│ app.use(morgan("dev"));
│	│ 
│	│ app.use(localMiddleware);
│	│ 
│	│ app.use(routes.home, globalRouter);
│	│ app.use(routes.users, userRouter);
│	│ app.use(routes.videos, videoRouter);
│	│ 
│	│ export default app; 
```
