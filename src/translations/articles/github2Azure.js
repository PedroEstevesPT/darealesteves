const translations  = {
    "title": {
        "en" : "Do Github Pages para o Azure (I)",
        "pt" : "From Github Pages to Azure (I)"
    },

    "text1": {
        "en": "One day, while I was enjoying programming this project, as usual, I ran the command <b>yarn deploy</b> \
        that I had created in my package.json to deploy the project to GitHub Pages. But the website refused to update.\
        After pressing F5 multiple times without getting the expected result, \
        I went to GitHub, accessed the repository, and this caught my attention:",
        "pt": "Certo dia, estava eu a divertir-me a programar este projeto e como costume, dei o comando <b>yarn deploy</b> que criei \
        no meu package.json  para fazer o deploy do projeto para o Github Pages. Mas o site teimava em não atualizar, depois de \
        carregar F5 múltiplas vezes sem obter o resultado esperado fui ao Github, acedi ao repositório e isto chamou-me à atenção:"
    },

    "text2": {
        "en": "Naturally, I wasn't going to pay 48 euros per year to host my website (lol).\
        But it bothered me to have to learn some obscure free tool (which probably still required some manual configuration)\
        to deploy this website, especially when my beloved free tier of Heroku was already long dead and decomposing:\
         <a href='https://help.heroku.com/RSBRUH58/removal-of-heroku-free-product-plans-faq'>Removal of Heroku Free Product Plans FAQ</a>\
        After discussing this with a friend of mine, the alternative was clear. I could use my Azure Credits for working at Microsoft.\
        My initial idea was to deploy the site using App Services. But it wasn't the most suitable solution given the static nature of this frontend. \
        Azure has a service called 'Static Web Apps' that seemed suitable for what I wanted.\
        That being said, I went to Azure to create a Static Web App, deployed it in 2 minutes, and voila:",
        "pt": "Naturalmente não ia pagar 48 euros ao ano para hospedar o meu site (lol). Mas incomodava-me ter de aprender uma ferramenta gratuita \
        recôndita (que provavelmente ainda iria exigir alguma configuração manual) para fazer o deploy deste website, principalmente \
        quando a minha querida modalidade gratuita do Heroku já estava mais que morta e em decomposição: \
        <a href='https://help.heroku.com/RSBRUH58/removal-of-heroku-free-product-plans-faq'> Removal of Heroku Free Product Plans FAQ </a> \
        <br><br> \
        Após discutir isto com um amigo meu a alternativa era clara. Podia usar os meus Azure Credits por trabalhar para a Microsoft. \
        <br> \
        A minha ideia inicial era fazer o deploy do site usando o App Services. Mas não era a solução mais adequada dado a natureza estática \
        deste frontend. O Azure tem um serviço: 'Static Web Apps' que parecia indicado para o que queria. \
        <br><br> \
        Dito e Feito, fui para o Azure criar uma Static Web App, em 2 minutos fiz deploy e bum:"
    },

    "text3" : {
        "en": "After 15 minutes of debugging, I understood what was going on. The culprit was the vite.config.js file.",
        "pt": "Após 15 minutos de debugging, entendi o que se passava. \
        A culpa era do ficheiro vite.config.js"
    },

    "text4" : {
        "en": "After making the change, voilà, the site was deployed perfectly. Below are the detailed steps:",
        "pt": "Depois de fazer a alteração, voilá, o site foi deployed às mil maravilhas. \
        Abaixo seguem-se os passos detalhados:"
    },
    "redeployingInAzureTitle": {
        "en": "Redeploying in Azure",
        "pt": "Redeploying no Azure"
    }, 
    "redeployingInAzureText": {
        "en": "In my initial tests to update the site, I had to create a new Static Web App each time, resulting in a different URL. Obviously, there must be a more CI/CD (Continuous Integration/Continuous Deployment) way to do this (and there is: Github Actions).<br><br>",
        "pt": "Nos meus primeiros testes para dar o update do site tinha de ser criada cada vez uma Static Web App que iria gerar um url diferente. Obviamente tem de exister alguma forma mais CI/CD de fazer isto (e há: Github Actions :) )<br><br>"
    }
}
export default translations;