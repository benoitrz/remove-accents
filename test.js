const removeAccents = require('./index.js');
const assert = require('assert').strict;

const emptyString = '';
const frenchTextWithAccents = 'Lorem superposés valise pourparlers rêver chiots rendez-vous naissance Eiffel myrtille. Grèves Arc de Triomphe encore pourquoi sentiments baguette pédiluve une projet sentiments saperlipopette vachement le. Brume éphémère baguette Bordeaux en fait sommet avoir minitel. Nous avoir parole la nous moussant. Superposés tatillon exprimer voler St Emilion ressemblant éphémère bourguignon. Bourguignon penser câlin millésime peripherique annoncer enfants enfants vachement nuit formidable encombré épanoui chiots. Arc truc cacatoès lorem flâner.';
const frenchTextWithoutAccents = 'Lorem superposes valise pourparlers rever chiots rendez-vous naissance Eiffel myrtille. Greves Arc de Triomphe encore pourquoi sentiments baguette pediluve une projet sentiments saperlipopette vachement le. Brume ephemere baguette Bordeaux en fait sommet avoir minitel. Nous avoir parole la nous moussant. Superposes tatillon exprimer voler St Emilion ressemblant ephemere bourguignon. Bourguignon penser calin millesime peripherique annoncer enfants enfants vachement nuit formidable encombre epanoui chiots. Arc truc cacatoes lorem flaner.';
const spanishTextWithAccents = 'Lorem Ipsum es un texto de marcador de posición comúnmente utilizado en las industrias gráficas, gráficas y editoriales para previsualizar diseños y maquetas visuales';
const spanishTextWithoutAccents = 'Lorem Ipsum es un texto de marcador de posicion comunmente utilizado en las industrias graficas, graficas y editoriales para previsualizar disenos y maquetas visuales';

assert.deepStrictEqual(removeAccents(emptyString), emptyString, "empty string base case");
assert.deepStrictEqual(removeAccents(frenchTextWithAccents), frenchTextWithoutAccents, "french accents");
assert.deepStrictEqual(removeAccents(spanishTextWithAccents), spanishTextWithoutAccents, "spanish accents");