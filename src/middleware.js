import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import routes from "./routes";

// const multervideo = multer({ dest: "uploads/videos/" });
// const multerAvatar = multer({ dest: "uploads/avatars/" });

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: "ap-northeast-2"
});

const multerVideo = multer({
  storage: multerS3({
    s3,
    acl: "public-read",
    bucket: "shlee0882-bukit/video"
  })
});
const multerAvatar = multer({
  storage: multerS3({
    s3,
    acl: "public-read",
    bucket: "shlee0882-bukit/avatar"
  })
});

export const uploadVideo = multerVideo.single("videoFile");
export const uploadAvatar = multerAvatar.single("avatar");

export const localMiddleware = (req, res, next) => {
  // express locals에 변수를 저장하면 이 변수를 템플릿에서 사용할수 있다.
  res.locals.siteName = 'wetube';  
  res.locals.routes = routes;
  // res.locals.user = {
  //   isAuthenticated: false,
  //   id: 1
  // };
  res.locals.loggedUser = req.user || null;
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
  if(req.user){
    next();
  } else{
    res.redirect(routes.home);
  }
}

// export const uploadVideo = multervideo.single('videoFile');
// export const uploadAvatar = multerAvatar.single("avatar");