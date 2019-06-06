import multer from "multer";
import routes from "./routes";

const multervideo = multer({ dest: "uploads/videos/" });

export const localMiddleware = (req, res, next) => {
  // express locals에 변수를 저장하면 이 변수를 템플릿에서 사용할수 있다.
  res.locals.siteName = 'wetube';  
  res.locals.routes = routes;
  // res.locals.user = {
  //   isAuthenticated: false,
  //   id: 1
  // };
  res.locals.user = req.user || null;
  next();
};

export const onlyPublic = (req, res, next) => {
  if(req.user){
    res.redirect(routes.home);
  } else{
    next();
  }
}

export const onlyPrivate = (req, res, next) => {
  if(req,user){
    next();
  } else{
    res.redirect(routes.home);
  }
}

export const uploadVideo = multervideo.single('videoFile');