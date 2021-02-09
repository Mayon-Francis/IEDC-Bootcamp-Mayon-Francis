const option = document.querySelector('#operation');
const amount = document.querySelector('#myamount');
const listout = document.querySelector('#listout');
const showcase = document.querySelector('#showcase');


const form = document.querySelector('#myform');
const btn  = document.querySelector('#submit');

let totalAmount=0;



form.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    console.log(amount.value);

    const li = document.createElement('li');
    if(option.value=='savings')
    {
        totalAmount += parseInt(amount.value);
        li.classList.add('savings');
    }
    else
    {
        totalAmount -= parseInt(amount.value);
        li.classList.add('expense');
    }
    
    li.appendChild(document.createTextNode(`${option.value} : ${amount.value} `));
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.style.textAlign='right';
    deleteButton.addEventListener('click', event => listout.removeChild(li));
    li.appendChild(deleteButton);
    listout.appendChild(li);

    console.log(totalAmount);
    showcase.innerHTML= `Net Balance : ${totalAmount}`;
}


deleteButton.addEventListener('click', deletecalled());

