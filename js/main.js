function RemoveShit() {
    let scripts = document.getElementsByTagName("script");
    scripts[0].parentNode.removeChild(scripts[scripts.length - 1]);

    let divs = document.getElementsByTagName("div");
    document.body.removeChild(divs[divs.length - 1]);
}

setTimeout(RemoveShit, 100);