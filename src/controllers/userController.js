import passport from "passport";
import routes from "../routes";
import User from "../models/User";

export const getJoin = (req, res) => {
    res.render("join", { pageTitle: "Join" });
};

export const postJoin = async (req, res, next) => {
    const {
      body: { name, email, password, password2 }
    } = req;
    if (password !== password2) {
      req.flash("error", "패스워드가 맞지 않습니다.");
      res.status(400);
      res.render("join", { pageTitle: "Join" });
    } else {
      try {
        const user = await User({
          name,
          email
        });
        await User.register(user, password);
        next();
      } catch (error) {
        console.log(error);
        res.redirect(routes.home);
      }
    }
};
  


export const getLogin = (req, res) => 
    res.render("login", { pageTitle: 'Login'});

export const postLogin = passport.authenticate("local", {
    failureRedirect: routes.login,
    successRedirect: routes.home,
    successFlash: "Welcome",
    failureFlash: "로그인 할 수 없습니다. 이메일/패스워드를 확인해주세요."
});

export const githubLogin = passport.authenticate("github", {
  successFlash: "Welcome",
  failureFlash: "로그인 할 수 없습니다. 이메일/패스워드를 확인해주세요."
});

export const githubLoginCallback = async (_, __, profile, cb) => {
  // console.log(accessToken, refreshToken, profile, cb);
  const { _json: {id, avatar_url: avatarUrl, name, email} } = profile;
  try{
    console.log("-------profile-----");
    console.log(profile);
    const user = await User.findOne({ email });
    console.log(user);
    if(user){
      user.githubId = id;
      user.save();
      return cb(null, user);
    }
    const newUser = await User.create({
      email,
      name,
      githubId: id,
      avatarUrl
    });
    return cb(null, newUser);
  }catch(error){
    return cb(error);
  }
};

export const postGithubLogIn = (req, res) => {
  res.redirect(routes.home);
}

export const facebookLogin = passport.authenticate("facebook", {
  successFlash: "Welcome",
  failureFlash: "로그인 할 수 없습니다. 이메일/패스워드를 확인해주세요."
});

export const facebookLoginCallback = async (_, __, profile, cb) => {
  const {
    _json: { id, name, email }
  } = profile;
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.facebookId = id;
      user.avatarUrl = `https://graph.facebook.com/${id}/picture?type=large`;
      user.save();
      return cb(null, user);
    }
    const newUser = await User.create({
      email,
      name,
      facebookId: id,
      avatarUrl: `https://graph.facebook.com/${id}/picture?type=large`
    });
    return cb(null, newUser);
  } catch (error) {
    return cb(error);
  }
};

export const postFacebookLogin = (req, res) => {
  res.redirect(routes.home);
} 

export const logout = (req, res) => {
    //To Do : Process Log out
    req.flash("info", "로그아웃 되었습니다.");
    req.logout();
    res.redirect(routes.home);
};

export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate("videos");
    res.render("userDetail", { pageTitle: "User Detail", user });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const userDetail = async (req, res) => {
  const { params: {id} } = req;
  try{
    const user = await User.findById(id).populate("videos");
    console.log(user);
    res.render("userDetail", { pageTitle: 'User Detail', user});
  }catch(error){
    req.flash("error", "유저를 찾을 수 없습니다.");
    res.redirect(routes.home);
  }
}

export const getEditProfile = (req, res) => 
  res.render("editProfile", { pageTitle: 'EditProfile'});

export const postEditProfile = async (req, res) => {
  const {
    body: { name, email },
    file
  } = req;
  try {
    await User.findByIdAndUpdate(req.user.id, {
      name,
      email,
      avatarUrl: file ? file.location : req.user.avatarUrl
    });
    req.flash("success", "프로필이 업데이트 되었습니다.");
    res.redirect(routes.me);
  } catch (error) {
    req.flash("error", "프로필을 업데이트하지 못했습니다.");
    res.redirect(routes.editProfile);
  }
};
  

export const getChangePassword = (req, res) => res.render("changePassword", { pageTitle: 'ChangePassword'});

export const postChangePassword = async(req, res) => {
  const user = req.user;
  const {
    body: { oldPassword, newPassword, newPassword1 }
  } = req;

  if(user.githubId != null){
    res.redirect(routes.home);
  }else{
    try{
      if(newPassword !== newPassword1){
        req.flash('error', "패스워드가 맞지 않습니다.");
        res.status(400);
        res.redirect(`/uesrs${routes.changePassword}`);
        return;
      }
      await req.user.changePassword(oldPassword, newPassword);
      res.redirect(routes.me);
    }catch(error){
      console.log(error);
      req.flash("error", "패스워드를 변경할 수 없습니다.");
      res.status(400);
      res.redirect(`/uesrs${routes.changePassword}`);
    }
  }
} 