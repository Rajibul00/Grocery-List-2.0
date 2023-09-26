let inputBox = document.querySelector('input');
let listdiv = document.getElementById('lists')
let i = 0;
let createchild = ()=>{
if(inputBox.value!=''){
    i++
    let h3 = document.createElement('h3');
    h3.innerText = `${i}. ${inputBox.value}`
    listdiv.appendChild(h3);
    inputBox.value='';
    h3.addEventListener('click',function(){
        h3.style.textDecoration = 'line-through'
    })
}
}
document.addEventListener('keypress',function(val){
    if(val.key=='Enter'){
        createchild();
        
    }
})
