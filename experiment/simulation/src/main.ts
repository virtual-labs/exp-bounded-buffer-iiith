import { getRandomInt } from "./helper_functions";

// State of the System
let buffer_size: number = 10;
let p_in:number = 0;
let c_out:number = 0;
let full:number = 0;
let empty:number = buffer_size;
let mutex:number = 1;
let pA: number = 0;
let pB: number = 0;
let pg: number = getRandomInt(1, 5);
let cu: number = getRandomInt(1, 5);
let inst: string = "";

document.getElementById("nextP").onclick = (event: MouseEvent) => {
    switch(pA) {
        case 0:
            if(pg === 0){
                pA = (pA + 1) % 6;
                inst = "";
            }
            else {
                inst = "The Item generation is not yet done. Please click Advance Clock";
            }
            break;
        case 1:
            if(empty > 0){
                pA = (pA + 1) % 6;
                empty--;
                inst = "";
            }
            else {
                inst = "The buffer is full.";
            }
            break;
        case 2:
            if(mutex > 0){
                pA = (pA + 1) % 6;
                mutex--;
                inst = "";
            }
            else {
                inst = "The Consumer is running the code. So Producer cannot run it now";
            }
            break;
        case 3:
            pA = (pA + 1) % 6;
            p_in = (p_in + 1) % buffer_size;
            inst = "";
            break;
        case 4:
            pA = (pA + 1) % 6;
            mutex++;
            inst = "";
            break;
        default:
            pA = (pA + 1) % 6;
            full++;
            pg = getRandomInt(1, 5);
            inst = "";
    }
    cu = Math.max(0, cu - 1);
    update();
}
document.getElementById("nextC").onclick = (event: MouseEvent) => {
    switch(pB) {
        case 0:
            if(full > 0){
                pB = (pB + 1) % 6;
                full--;
                inst = "";
            }
            else {
                inst = "The Buffer is Empty. Nothing to consume";
            }
            break;
        case 1:
            if(mutex > 0){
                pB = (pB + 1) % 6;
                mutex--;
                inst = "";
            }
            else {
                inst = "The Producer is running the code. So Consumer cannot run it now";
            }
            break;
        case 2:
            pB = (pB + 1) % 6;
            c_out = (c_out + 1) % buffer_size;
            inst = "";
            break;
        case 3:
            pB = (pB + 1) % 6;
            mutex++;
            inst = "";
            break;
        case 4:
            pB = (pB + 1) % 6;
            full++;
            cu = getRandomInt(1, 5);
            inst = "";
            break;
        default:
            if(cu === 0){
                pB = (pB + 1) % 6;
                inst = "The Item using is done";
            }
            else {
                inst = "The Item using is not yet done. Please click Advance Clock";
            }
    }
    pg = Math.max(0, pg - 1);
    update();
}
document.getElementById("advance_clock").onclick = (event: MouseEvent) => {
    pg = Math.max(0, pg - 1);
    cu = Math.max(0, cu - 1);
    inst = "";
    update();
}

function update_instrucion(){
    let instruction = document.getElementById("instruction");
    if(pA === 0 && pg === 0){
        inst = "Producer Generated the Item.";
    }
    else if(pA === 0 && pB == 5){
        inst = "Advance the Clock";
    }
    instruction.textContent = inst;
}
function update_codes(){
    document.querySelector(`#codeP :nth-child(${(pA - 1 + 6)%6 + 1})`).classList.remove('highlight');
    document.querySelector(`#codeP :nth-child(${pA + 1})`).classList.add('highlight');

    document.querySelector(`#codeC :nth-child(${(pB - 1 + 6)%6 + 1})`).classList.remove('highlight');
    document.querySelector(`#codeC :nth-child(${pB + 1})`).classList.add('highlight');
}
function update_buffer() {
    const tr = document.querySelector("#buffer table tr");
    tr.innerHTML = "";
    for (let index = 0; index < buffer_size; index++) {
        let td = document.createElement('td');
        td.textContent = "";
        if(c_out <= index && index < p_in)
            td.classList.add("data");
        tr.appendChild(td);
    }
}
function update_semaphores() {
    document.getElementById("full").textContent = String(full);
    document.getElementById("empty").textContent = String(empty);
    document.getElementById("mutex").textContent = String(mutex);
}
function update() {
    update_buffer();
    update_semaphores();
    update_codes();
    update_instrucion();
}
update();