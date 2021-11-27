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
    normalize: false,
    html:true,
    htmlTemplate: 'yartu/templates/html.hbs',

    cssTemplate: 'yartu/templates/font-css.hbs',
    templateOptions: {
      classPrefix: '',
      baseSelector: '.yartu-icon'
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