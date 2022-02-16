
let selectedItem = document.getElementById("selected");
let iconMeta = document.getElementById("metadata");

function selected(item){
    let meta = item.children[0].children[1];
    let icon = item.children[0].children[0];
    selectedItem.innerHTML = icon.outerHTML;

    let metaContainer = meta.cloneNode(true);
    metaContainer.classList.remove("hidden");

    iconMeta.innerHTML =  metaContainer.outerHTML;

}