
const fs = require('fs');
const hbs = require("handlebars");

let iconsPath = fs.readdirSync("src/generated-colored-icons/colored-icons-svgs/");
var icon = createJSON(iconsPath);

let html_template = readTemplate("src/templates/colored-icon-templates/html.hbs");
var compiled_html_template = hbs.compile(html_template);

var compiled_html = compiled_html_template(icon);
try {
    writeTemplate("src/views/colored-icons/index.html", compiled_html);
} catch (error) {
    console.log("Can not write to file" + error)
}

let css_template = readTemplate("src/templates/colored-icon-templates/css.hbs");
var compiled_css_template = hbs.compile(css_template);

var compiled_css = compiled_css_template(icon);
try {
    writeTemplate("src/generated-colored-icons/yartu-colored-icons.css", compiled_css);

} catch (error) {
    console.log("Can not write to file" + error)
}

function createJSON(arr) {
    let object = {};
    object.icons = {};

    arr.forEach(element => {
        var el = element.split('.')[0];
        object.icons[el] = {};
        object.icons[el].url = './colored-icons-svgs/' + element;
    })

    return object;
}

function readTemplate(path) {
    return fs.readFileSync(path, { encoding: 'utf8', flag: 'r' });
}

function writeTemplate(path, data) {
    return fs.writeFileSync(path, data, { encoding: 'utf8', flag: 'w' });
}