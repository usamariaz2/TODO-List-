console.log("welcome usama")
let input = document.getElementById('inputvalue');
let btn = document.getElementById('btn');
let parentlist = document.getElementById('parentlist');
let item = document.getElementById('item');

btn.addEventListener('click',()=>{
    let newli = document.createElement('li');
    newli.classList.add('order-item'); // for same class design
    let innertext= input.value;
    newli.innerHTML=`  <h1>${innertext}</h1>
    <button id="edit" onclick="edit(this)">edit</button>
     <button id="remove" onclick="remove(this)">Remove</button>`
    parentlist.appendChild(newli)
})
function remove (e){
    e.parentElement.remove();
}
function edit (e){
     if(e.innerText == "Done"){
        e.innerText="Edit"
    let curredit= e.previousElementSibling.value;
    let editheading = document.createElement('h1');
    editheading.innerText=curredit;
    e.parentElement.replaceChild(editheading, e.previousElementSibling)
     }

     else{
     e.innerText="Done"
    curredit= e.previousElementSibling.textContent;
    let editinput = document.createElement('input');
    editinput.type ="text";
    editinput.placeholder ="text";
    editinput.value = curredit;
    e.parentElement.replaceChild(editinput, e.previousElementSibling)
     }

}