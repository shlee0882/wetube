import routes from "./routes";

export const localMiddleware = (req, res, next) => {
  // express locals에 변수를 저장하면 이 변수를 템플릿에서 사용할수 있다.
  res.locals.siteName = 'wetube';  
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1
  }
  next();
};