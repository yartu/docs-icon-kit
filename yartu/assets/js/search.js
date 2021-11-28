
function search() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('search');
  filter = input.value.toUpperCase();
  iconsContainer = document.getElementsByClassName("card");
  icons = document.getElementsByClassName("icon-name")

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < iconsContainer.length; i++) {
    iconText = icons[i].innerText;
    console.log(iconText);
    if (iconText.toUpperCase().indexOf(filter) > -1) {
        iconsContainer[i].style.display = "";
    } else {
        iconsContainer[i].style.display = "none";
    }
  }
}