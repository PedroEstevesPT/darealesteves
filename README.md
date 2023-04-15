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
https://www.npmjs.com/package/vue3-animate-onscroll

https://animate.style/


# README BACKLOG
-> Dar mais estilo ao hamburguer para parecer-se mais semelhante com o header.
-> Adicionar breadcrumbs na seccao do blog.
-> Renomerar as newscards

-> Ideias para artigos: cancioneiro de elvas.
-> A importancia de testar software.
-> O que sao cookies.


# Principles on how to build scalable articles.

- Replace, always when possible javascript through CSS media queries.
- Avoid at max, the use of variables in articles components.
- Remove all text and create a translation file instead.
- Avoid at all cost css directly in HTML.
- Create custom components for example to contain translations.





# Concerning site deployment
Os problemas que estava a experienciar deviam-se essencialmente a um mismatch nos paths quando estava a dar deploy do site.

Ex: 
O código estava a procurar pela screenshot aqui:
https://muradean.github.io/assets/ms.067230fc.png

Mas ela existia nesta diretoria:
https://muradean.github.io/darealesteves/assets/ms.067230fc.png


Os 3 ficheiros para mexer nisso sao essencialmente o 

-> App.vue (que tem as routes que fazem mudar de pagina)
-> routerIndex.js (que junta e mapeia as rotas)
-> vite.config.js que tem uma variavel que e o 'base'

#Learn commands this one:
git push origin --delete gh-pages
https://stackoverflow.com/questions/52087783/git-push-to-gh-pages-updates-were-rejected

#Backlog

-Adcionar imagem da revista ao site e links para paginas fora assim como artigo do dynamics.
-Espacar seccoes da pagina inicial.
-Melhorar o estilo do blog


#fiz que removeu o problema no github:

https://github.com/vuejs/vue-router/issues/1735