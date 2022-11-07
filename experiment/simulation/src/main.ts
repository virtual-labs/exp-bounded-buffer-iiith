let buffer_size: number = 10;
let p_in:number = 0;
let c_out:number = 0;

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
    // buffer.innerHTML = "hello";
}
function update() {
    update_buffer();
}
update();