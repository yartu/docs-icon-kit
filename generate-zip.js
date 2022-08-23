/* eslint-disable no-undef */
const JSZip = require('jszip');
const fs = require('fs');

let fontIcons = null;

fs.readdir('src/generated-font-icons/', function (err, items) {
  let zip = new JSZip();
  if (err) {
    console.log('cant read directory');
  }
  fontIcons = items.filter((i) => i.toLowerCase()).map((i) => 'src/generated-font-icons/' + i);
  try {
    const yartuIcons = zip.folder('files');
    for (const file of fontIcons) {
      const fileData = fs.readFileSync(file);
      yartuIcons.file(file, fileData);
    }

    zip
      .generateNodeStream({ type: 'nodebuffer', streamFiles: true })
      .pipe(fs.createWriteStream('public/yartu-icons.zip'))
      .on('finish', function () {
        console.log('.zip written.');
      });
  } catch (err) {
    console.error(err);
  }
  zip = null;
});

const zip = new JSZip();

fs.readdir('src/generated-colored-icons/colored-icons-svgs', function (err, items) {
  if (err) {
    console.log('cant read directory');
  }
  svgFiles = items
    .filter((i) => i.toLowerCase().endsWith('.svg'))
    .map((i) => 'src/generated-colored-icons/colored-icons-svgs/' + i);

  try {
    const yartuIcons = zip.folder('files');
    for (const file of svgFiles) {
      const fileData = fs.readFileSync(file);
      yartuIcons.file(file, fileData);
    }
    zip
      .generateNodeStream({ type: 'nodebuffer', streamFiles: true })
      .pipe(fs.createWriteStream('public/yartu-colored-icons.zip'))
      .on('finish', function () {
        console.log('.zip written.');
      });
  } catch (err) {
    console.error(err);
  }
});

fs.readdir('src/generated-colored-icons/', function (err, items) {
  if (err) {
    console.log('cant read directory');
  }
  svgFiles = items.filter((i) => i.toLowerCase().endsWith('.css')).map((i) => 'src/generated-colored-icons/' + i);

  try {
    const yartuIcons = zip.folder('files');
    for (const file of svgFiles) {
      const fileData = fs.readFileSync(file);
      yartuIcons.file(file, fileData);
    }

    zip
      .generateNodeStream({ type: 'nodebuffer', streamFiles: true })
      .pipe(fs.createWriteStream('public/yartu-colored-icons.zip'))
      .on('finish', function () {
        console.log('.zip written.');
      });
  } catch (err) {
    console.error(err);
  }
});
