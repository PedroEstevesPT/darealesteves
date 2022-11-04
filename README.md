npm init @vitejs/app

cd my-vue-app
yarn
yarn dev

#Build https://www.youtube.com/watch?v=yo2bMGnIKE8
git add dist -f

git subtree push --prefix dist origin gh-pages

yarn build