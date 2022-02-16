const webfontsGenerator = require('@vusion/webfonts-generator');
const fs = require('fs');

fs.readdir('icons/', function(err, items) {
  if (err) {
    console.log('cant read directory');
  }
  const files = items.filter((i) => i.toLowerCase().endsWith('.svg')).map(
    (i) => 'icons/'+i);

  webfontsGenerator({
    files: files,
    dest: './',
    fontName: 'yartu-icons',
    
    // https://github.com/nfroidure/svgicons2svgfont options
    normalize: true,
    html:true,
    htmlDest: './index.html',
    htmlTemplate: './templates/html.hbs',
    fontHeight: 900,//this option scale icons to max font size do not change
    centerHorizontally:true,
    centerVertically:true,

    cssTemplate: './templates/font-css.hbs',
    templateOptions: {
      classPrefix: '',
      baseSelector: '.yi'
    },
    types: ['svg', 'ttf', 'woff', 'eot'],
    startCodepoint: 0xF101,
    
  }, function (error) {
    if (error) {
      console.log('Fail!', error);
    } else {
      console.log('Done!');
    }
  })
})