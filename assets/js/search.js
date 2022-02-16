
function search() {
  // Declare variables
  let input, filter, i, flag=false;
  input = document.getElementById('search');
  filter = input.value.toUpperCase();
  iconsContainer = document.getElementsByClassName("icons-container");
  icons = document.getElementsByClassName("icon-name")

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < iconsContainer.length; i++) {
    iconText = icons[i].innerText;
    if (iconText.toUpperCase().indexOf(filter) > -1) {
        iconsContainer[i].style.display = "";
    } else {
        iconsContainer[i].style.display = "none";
    }
  }

  for (i = 0; i < iconsContainer.length; i++) {
    if (iconsContainer[i].style.display != "none") {
        flag = true;
    }
  }
  if(!flag){
    console.log(iconsContainer)
  }
}