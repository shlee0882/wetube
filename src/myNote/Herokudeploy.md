
- heroku 생성

```code
heroku login
heroku create
```

create되면 임의의 URL 생성해서 부여함
ex ) https://git.heroku.com/sharp-rain-871.git


- 임의로 부여받은 URL 재설정 방법

``` code 
// Check for the current url 
git remote -v

// remove remote url
git remote rm heroku

// re-add the remote url
git remote add heroku https://git.heroku.com/shlee0882.git
```


- heroku 소스 반영방법

```code
git remote -v
git add .
git commit -m "commit"
git push heroku master
```

- express-flash 설치

npm i express-flash