function onload(){
    document.getElementsByTagName("body")[0].setAttribute("class", "bodyTerminal");
    document.getElementsByClassName('matrix')[0].style.top = '-150%';
    document.getElementsByClassName("footer")[0].setAttribute("class", "footerTerminal");
    
    //matrix Rise
    var style = getComputedStyle(document.body)
    let t =  parseFloat(style.getPropertyValue('--waveTransTime'))
    setTimeout(() => { document.getElementsByClassName('matrix')[0].style.display = "none";}, t*1000 + 100);
}   

function pressEnter(e, textBox){
    e = e.keyCode ? e.keyCode : e.which;
    if(e != 13) return;
    
    let inp = textBox.value;
    console.log(inp);
}