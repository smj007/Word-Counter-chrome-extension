document.addEventListener('DOMContentLoaded', function(){

    const bg = chrome.extension.getBackgroundPage();
    Object.keys(bg.trump).forEach(function(url){
        const div = document.createElement('div');
        div.textContent = `${url}: ${bg.trump[url]}`
        document.body.appendChild(div)
    })

}, false)