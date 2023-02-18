function onload(){
    console.log("Page loaded");
    // document.getElementsByClassName('waves')[0].style.transform = 'rotate(-45deg)'
}

function waveRaise(){
    document.getElementsByClassName('waves')[0].style.top = '50%';
    
}

function waveFall(){
    document.getElementsByClassName('waves')[0].style.top = '100%' ;
}

function tsunami(){
    document.getElementsByClassName('waves')[0].style.top = '-100%';
    var style = getComputedStyle(document.body)
    let t =  parseFloat(style.getPropertyValue('--waveTransTime'))
    setTimeout(() => { window.location.href = "/"; }, t*1000 + 100);
}

function matrixFall(){
    document.getElementsByClassName('matrix')[0].style.top = '-100%';
}

function matrixRise(){
    document.getElementsByClassName('matrix')[0].style.top = '-150%';
}

function enterTheMatrix(){
    document.getElementsByClassName('matrix')[0].style.top = '0%';
    var style = getComputedStyle(document.body)
    let t =  parseFloat(style.getPropertyValue('--waveTransTime'))
    // 
    setTimeout(() => { window.location.href = "/programmer.html"; }, t*1000 + 100);
}