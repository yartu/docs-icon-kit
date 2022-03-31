function CopyToClipboardFontIcon(id){
    
    const body = document.querySelector('body');
    const area = document.createElement('textarea');
    body.appendChild(area);
    
    if(id.split("-")[0] === 'selector'){
        let iconName = id.replace(/selector-/g,"");
        let color = colorPicker.value;
        let iconSelector = `<i class="yi ${iconName}" style="color: ${color}"></i>`;
        area.value = iconSelector;
    }
    else{
        area.value = document.getElementById(id).innerText;
    }
    area.select();
    document.execCommand('copy');
    body.removeChild(area);
    
    var snackbar = document.getElementById("snackbar");
    snackbar.className = "show";
    setTimeout(function(){ snackbar.className = snackbar.className.replace("show", ""); }, 3000);
}

function CopyToClipboard(id){
    
    const body = document.querySelector('body');
    const area = document.createElement('textarea');
    body.appendChild(area);
    if(id.split("-")[0] === 'selector'){
        let name = id.replace(/selector-/g,"");
        let iconSelector = `<i class="ci-${name}"></i>`;
        area.value = iconSelector;
    }
    else{
        area.value = document.getElementById(id).innerText;
    }
    area.select();
    document.execCommand('copy');
    body.removeChild(area);
    
    var snackbar = document.getElementById("snackbar");
    snackbar.className = "show";
    setTimeout(function(){ snackbar.className = snackbar.className.replace("show", ""); }, 3000);
}