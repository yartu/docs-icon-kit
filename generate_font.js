const webfontsGenerator = require('@vusion/webfonts-generator');
const fs = require('fs');

fs.readdir('yartu/icons', function(err, items) {
  if (err) {
    console.log('cant read directory');
  }
  const files = items.filter((i) => i.toLowerCase().endsWith('.svg')).map(
    (i) => 'yartu/icons/'+i);

  webfontsGenerator({
    files: files,
    dest: 'yartu/generated_fonts/',
    fontName: 'yartu-icons',
    
    // https://github.com/nfroidure/svgicons2svgfont options
    normalize: true,
    html:true,
    htmlDest: 'yartu/generated_fonts/index.html',
    htmlTemplate: 'yartu/templates/html.hbs',
    fontHeight: 1000,//this option scale icons to max font size do not change
    centerHorizontally:true,
    centerVertically:true,

    cssTemplate: 'yartu/templates/font-css.hbs',
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