<template>
  <v-container >
    <div  class="article-div">
      <h1 class="pe-text blue-text"> Gulbenkian - Faraós Superstars</h1>

      <BreadCrumbs  :items="breadcrumbs" />
      <br>

      <p class="pe-text"> No final de Janeiro de 2023 fui ver a exposição Faraós Superstars à Gulbenkian e depois fui almoçar com
        as minhas primas.
      </p>


      <ArticleFigure :figure=example1 />
      <ArticleFigure :figure=example2 />
      <ArticleFigure :figure=example3 />
      <ArticleFigure :figure=example4 />


    </div>
  </v-container>
</template>
<script>

import ArticleFigure from '../../../components/ArticleFigure.vue';
import BreadCrumbs from   '../../../components/BreadCrumbs.vue';
import translations from  '../../../translations/articles/Fablemans.js';

export default {
  name: 'Gulbenkian',
  components: {ArticleFigure,BreadCrumbs},
  data: () => ({
    breadcrumbs: [
      {"title": {"en": "Blog" , "pt": "Blog"},       "path":"/blog"},
      {"title": {"en": "Museums", "pt": "Museus"},    "path":"/blog/museums"},
      {"title": {"en": "Gulbenkian - Faraós Superstars", "pt": "Gulbenkian - Faraós Superstars"}, "path":"/blog/museums/gulbenkian"},
    ],
    example1: { 
        "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1677381520/pedrofortunatoesteves-site/blog/museums/IMG_0377_zwbjdu.jpg",
        "description": {
          "pt": "Réplicas do Busto de Nefertiti, Oficina de moldes em gesso dos museus de Berlim, 1933 - A partir da década de 1920, o Museu Egípcio de Berlim produz e difunde \
            uma grande quantidade de réplicas do busto de Nefertiti. Numerosos museus de todo o mundo adquirem-nas, de modo \
            a proporcionarem aos seus visitantes a possibilidade de um encontro com a célebre imagem. Nas réplicas mais antigas, \
            o olho esquerdo da rainha, ausente na escultura original, é sistemeaticamente reconstituído, na esperança de \
            oferecer ao público o verdadeiro rosto de Nefertiti.",
          "en": "Replicas of Nefertiti's bust, Berlin Museums plaster casting workshop 1933 - In the 1920s, the Egyptian museum \
           in Berlin began to commission the production and dissemination of large numbers of replicas of Nefertiti's bust.\
            Many museums throughout the world bough them, to give their visitors an oppotunity to come face to face with the \
            famous queen. In the earliest copies, the sculpture's let eye, which had never been completed in the original, \
            was routinely reconstructed, in the hope of recreating a true image of the queen's face."
        }
    },
    example2: { 
        "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1677381520/pedrofortunatoesteves-site/blog/museums/IMG_0379_npnwvx.jpg",
        "description": {
          "pt": "Cleópatra por Claude Bertin (1653-1705) - Muitos artistas dão particular atenção à ambiguidade da rainha nos seus momentos finais. \
          A cabeça lançada para trás, os olhos revirados e a boca entreaberta evocam um arrebatamento entre a morte e o êxtase orgástico, comparável \
          às representações barrocas de Maria Madalena (esta era a legenda da obra na exposição, não foi escrita por mim :) ).",
          "en": "Artists often take great pains to convey the ambiguous pose of the queen at the moment of her death. \
          With her neck arched, eyes rolled back and mouth half-open, the images evokes a rapture between death and orgasm, comparable\
          to the baroque portrayals of Mary Magdalene (this description was taken from the exhibition :) )."
        }
    },
    example3: { 
        "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1677381519/pedrofortunatoesteves-site/blog/museums/IMG_0382_xdkpbs.jpg",
        "description": {
          "pt": "Uma gramática egípcia. Pelo que me recordo da exposição o que permitiu descodificar o significado dos hieroglifos foi \ a 'Pedra da Roseta' \
          que continha um texto traduzido em egípcio e grego antigo. Como havia nomes conhecidos no grego isto permitiu o mapeamento dos carateres para fonemas e avanços \
          significativos na tradução dos hieroglifos.",
          "en": "An Egyptian grammar. From what I recall from the exhibition, what enabled the decoding of the hieroglyphs \
          meaning was the 'Rosetta Stone', which contained a text translated into ancient Egyptian and Greek. As there were \
          known names in Greek, this allowed for the mapping of characters to phonemes and significant progress in translating \
          hieroglyphs."
        }
    },
    example4: { 
        "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1677381520/pedrofortunatoesteves-site/blog/museums/IMG_0384_df6rfi.jpg",
        "description": {
          "pt": "A vista da exposição para o jardim, como se pode constatar estava uma manhã muito soalheira.",
          "en": "The view from the exhibition to the garden, as it can be seen, the morning was very sunny."
        }
    }


    
  })
}
</script>
<style lang="scss" scoped>
    @import  "../../../styles/images.scss";
    @import  "../../../styles/text.scss";
</style>