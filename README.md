# Yartu Icon Pack
Yartu icon kit using https://www.npmjs.com/package/@vusion/webfonts-generator package for generate the font kit for more information visit there.

## Installation
    npm install

## Prepare svg icons

Svg icons should not have a stroke. If the icon pack have a corrupted icon you can convert strokes to fills in different vector editing programs:

## Converting Strokes & Text to Fills

### Adobe Illustrator
    Select the shapes that you want to convert and then choose Object → Expand. You might need to choose Object → Expand Appearance before you can apply Object → Expand.

### Ink Scape
    Select the shapes that you want to convert and then choose Path → Stroke to Path.

### Sketch
    Select the shapes that you want to convert and choose Layer → Convert to Outlines

after that copy all icon svgs to yartu/icons folder. Thats it ready to generate font icons. 


## Generate Font kit
    npm run generate

## Usage

1. Copy all generated files into the assets folder of your own project files.

    Generated files is under the down below path

        /yartu/generated_fonts/

1. Import css file in your html

        <link rel="stylesheet" href="your-project-assets-path/yartu-icons.css">

1. Icon usage

        <i class="yi arrow-right"></i>

## Templates
Font kit css and html handlebars templates destination in down below 

    /yartu/templates
        fonts-css.hbs
        html.hbs

## Output files
Output files under the /yartu/generated_fonts/ path and this path includes this files.
    
        - yartu-icons.css
        - yartu-icons.eot
        - yartu-icons.svg
        - yartu-icons.ttf
        - yartu-icons.woff

## Handlebars ( *.hbs )
Handlebars is a simple templating language. It uses a template and an input object to generate HTML or other text formats. Handlebars templates look like regular text with embedded Handlebars expressions. For more information please visit https://handlebarsjs.com/guide/

## Demo file
Demo file is in the

    /yartu/generated_fonts/index.html
