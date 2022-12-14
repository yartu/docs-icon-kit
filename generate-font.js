/* eslint-disable no-undef */
const webfontsGenerator = require('@vusion/webfonts-generator');
const fs = require('fs');

fs.readdir('src/assets/font-icons-svgs/', function (err, items) {
  if (err) {
    console.log('cant read directory');
  }
  const files = items.filter((i) => i.toLowerCase().endsWith('.svg')).map((i) => 'src/assets/font-icons-svgs/' + i);

  webfontsGenerator(
    {
      files: files,
      dest: './src/generated-font-icons',
      fontName: 'yartu-icons',
      // https://github.com/nfroidure/svgicons2svgfont options
      normalize: true,
      html: true,
      htmlDest: './src/icons/font-icons.json',
      htmlTemplate: './src/templates/font-icon-templates/html.hbs',
      fontHeight: 900, //this option scale icons to max font weight do not change
      centerHorizontally: true,
      centerVertically: true,
      cssTemplate: './src/templates/font-icon-templates/font-css.hbs',
      templateOptions: {
        classPrefix: 'yi-',
        baseSelector: '.yi'
      },
      types: ['svg', 'ttf', 'woff', 'eot'],
      startCodepoint: 0xf101
    },
    function (error) {
      if (error) {
        console.log('Fail!', error);
      } else {
        console.log('Done!');
      }
    }
  );
});
