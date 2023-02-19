let dirs = ["education", "projects", "technical_skills", "education"];
let numCommands = 0;
let commands = [];
let currentFolder = "";

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
    numCommands += 1;

    switch(inp){
        case "ls":
            ls(currentFolder);
            nextInput(numCommands, currentFolder);
            break;
        case "clear":
            clearTerminal();
            nextInput(numCommands, currentFolder);
            break;

        default:
            if(inp.substring(0, 2) == 'cd'){
                changeDirectory(inp.substring(3));
                // break;
            }
            nextInput(numCommands, currentFolder);
            break;
    }

    
}

function nextInput(num, folder){
    let term = document.getElementById("terminal");
    term.innerHTML += `<label class="terminalLabel">Dubey@Website:` + folder + `~$</label>
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

function ls(folder){
    let term = document.getElementById("terminal");
    let str = "";
    if(folder == ""){
        for(let i = 0; i < dirs.length; i++){
            str += `<tag class="lsLinks" onclick="clickLs(this)" >` +  dirs[i] + `</tag> `;
        }
    }
    term.innerHTML += h1(str);
}

function clickLs(inp){
    changeDirectory(inp.innerHTML);
    // clearTerminal();
    nextInput(numCommands, currentFolder);
}

function changeDirectory(inp){
    if(inp == '..'){
        currentFolder = "";
    }
    if(dirs.includes(inp)){
        currentFolder = inp;
    }
}