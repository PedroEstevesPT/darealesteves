const translations  = {
    "title": {
        "en": "💻 About this site" ,
        "pt": "💻 Sobre este site"
    },

    "techStack": {
        "en": "Tech Stack",
        "pt": "Stack Tecnológico"
    },

    "techStackTechnologies":{
        "en":" <li> Frontend - Vue 3.0        </li> \
               <li> Package Manager - Yarn    </li> \
               <li> Version Control - Github  </li> \
               <li> Hosting - <strike> Github Pages </strike> (free) , Azure Static Web Apps (using Azure Credits) </li>",
        "pt":" <li> Frontend - Vue 3.0        </li> \
               <li> Package Manager - Yarn    </li> \
               <li> Version Control - Github  </li> \
               <li> Hosting - <strike> Github Pages </strike> (gratuito) , Azure Static Web Apps (usando créditos do Azure)</li>",
    },
    "featuresTitle": {
        "en": "Ideas for features",
        "pt": "Ideias para features"
    },
    "features": {
        "en": "<p> Below follow some ideas for features I am considering for the site: </p>\
        <br> \
        <li> Breadcrumbs (implemented)    </li> \
        <li> Search bar in Blog Section </li> \
        <li> View counter in website   </li> \
        <li> Make the zoom in the images gallery more useful in Mobile </li>",
        "pt": "<p> Abaixo seguem-se umas ideias que quero implementar no site: </p>\
               <br> \
               <li> Breadcrumbs (implementada)    </li> \
               <li> Implementar barra de pesquisa </li> \
               <li> Contador de visitas no site   </li> \
               <li> Tornar o zoom das fotografias mais interessante em mobile </li>"
    },
    "cdnTitle": {
        "en": "The quest for a Content Delivery Network (CDN)",
        "pt": "A procura por uma Content Delivery Network (CDN)"
    },
    "cdnText": {
        "en": " According to this video from <a href='https://www.cloudflare.com/learning/cdn/what-is-a-cdn/'>Cloudflare</a>, \
        a CDN is a distributed network of servers designed to load websites as quickly as possible. In other words, \
        the distributed network of servers can choose the one geographically closest to the machine that wants to \
        load the site, thus allowing optimized loading of assets.\
        <br><br>\
        Having experienced in the past on previous projects where loading times were long,\
        and with my background in support and performance issues, and after being inspired\
        by hacdias.com to start programming again, this was one of the first concerns in \
        developing this site: finding a dedicated service to store images. \
        <br><br> \
        After a brief investigation, I briefly considered Cloudflare, but when I found out that \
        this option had a monthly fee of 5 euros, I consulted Reddit and opted for Cloudinary, \
        which provides me with this service for free and is used on this site to load images.",
        "pt": "Segundo este vídeo da <a href='https://www.cloudflare.com/learning/cdn/what-is-a-cdn/'>Cloudflare</a> uma CDN é: \
        Uma rede distribuída de servidores desenhada para carregar sites o mais rapidamente possível.\
        Por outras palavras, a rede distribuída de servidores consegue escolher o mais próximo geograficamente da máquina a querer carregar o site, permitindo assim um carregamento de \
        assets otimizado. \
        <br><br> \
        Tendo experienciado no passado em projetos anterior sites em que os loading times eram grandes, tendo o meu background em Suporte e em problemas de performance e após ter sido inspirado pelo site do \
        hacdias.com a voltar a programar, esta foi uma da primeiras preocupações no desenvolvimento deste site: arranjar um serviço dedicado a armazenar as imagens. \
        <br><br> \
        Após uma breve investigação, momentaneamente ponderei a Cloudflare mas quando descobri que para esta modalidade se pagava 5 euros por mês, após uma breve consulta no reddit aderi à \
        Cloudinary que me proporciona este serviço de borla e é empregado neste site para carregar imagens."
    }
}

export default translations;