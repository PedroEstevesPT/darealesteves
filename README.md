npm init @vitejs/app

cd my-vue-app
yarn
yarn dev

#Build https://www.youtube.com/watch?v=yo2bMGnIKE8

rm -r dist/
yarn build
python fix_build.py
git add dist -f
git add .
git commit -m "new build"
git subtree push --prefix dist origin gh-pages


# Followed this to deploy in github pages:

https://www.youtube.com/watch?v=yo2bMGnIKE8

# Develop always in chrome. 


#Animation Libraries:
animacoes
https://www.npmjs.com/package/vue3-animate-onscroll

https://animate.style/

