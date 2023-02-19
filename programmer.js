let dirs = ["education", "projects", "technical_skills", "education"];
let numCommands = 0;
let commands = [];

function onload(){
    document.getElementsByTagName("body")[0].setAttribute("class", "bodyTerminal");
    document.getElementsByClassName('matrix')[0].style.top = '-150%';
    
    //matrix Rise
    var style = getComputedStyle(document.body)
    let t =  parseFloat(style.getPropertyValue('--waveTransTime'))
    setTimeout(() => { document.getElementsByClassName('matrix')[0].style.display = "none";}, t*1000 + 100);
}   

function pressEnter(e, textBox){
    e = e.keyCode ? e.keyCode : e.which;
    if(e != 13) return;
    
    let inp = textBox.value;
    textBox.readOnly = true;
    textBox.placeholder = inp;

    commands.push(inp);

    switch(inp){
        case "ls":
            ls();
            break;
        case "clear":
            clearTerminal();
            break;

        default:
        
            break;
    }

    numCommands += 1;
    
    nextInput(numCommands);
}

function nextInput(num){
    let term = document.getElementById("terminal");
    term.innerHTML += `<label class="terminalLabel">Dubey@Website:~$</label>
    <input type="text" onkeypress="pressEnter(event, this)" name="terminalInput" class="terminalInput" id="terminalInput` + num + `">`;

    document.getElementById('terminalInput' + num).focus();
}


function h1(str){
    return `<h1>` + str + "</h1>";
}

function clearTerminal(){
    let term = document.getElementById("terminal");
    term.innerHTML = "";
}

function ls(){
    let term = document.getElementById("terminal");
    let str = "";
    for(let i = 0; i < dirs.length; i++){
        str += `<tag class="lsLinks">` +  dirs[i] + `</tag> `;
    }

    term.innerHTML += h1(str);
}
