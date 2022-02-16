const metadata = document.getElementById('metadata');
const colorPicker = document.getElementById('color-picker');
const selectedIcon = document.getElementById('selected');
let iconsContainer = document.getElementsByClassName("icons-container");


colorPicker.addEventListener("input", function() {
    selectedIcon.style.color = colorPicker.value;
    for (i = 0; i < iconsContainer.length; i++) {
        iconsContainer[i].style.color = colorPicker.value;
    }
}, false);