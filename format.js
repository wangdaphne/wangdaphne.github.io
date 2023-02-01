function print_docsize(){
    document.getElementById("JStest").innerHTML = window.outerWidth + "x" + window.outerHeight + ';' + window.innerWidth + "x" + window.innerHeight;
}

function print_elementsize()
{
    var properties = window.getComputedStyle(document.getElementById("nav"), null),
        height = properties.height,
        width = properties.width;
    document.getElementById("JStest").innerHTML = width + 'x' + height;
    // document.getElementById("JStest").innerHTML = "xxxx";
}

function change_css(){
    var fullHeight = window.outerWidth,
        fullWidth = window.outerHeight;
    if (fullWidth < fullHeight)
    {
        document.getElementById('CSSfile').href='styles_portrait.css';
    }
    else
    {
        document.getElementById('CSSfile').href='styles_landscape.css';
        document.getElementsByClassName('header').style.height = 0.29*fullHeight;
        document.getElementsByClassName('mainbody').style.height = 0.59*fullHeight;
        document.getElementsByClassName('nav').style.width = 0.18*fullWidth;
        document.getElementsByClassName('mainbody').style.width = 0.82*fullWidth;
    }
}