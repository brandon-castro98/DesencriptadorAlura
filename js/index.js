const text = document.querySelector('#text-input');
const divHidden = document.querySelector('#div-hidden');
const encrypted = document.querySelector('#text-encrypted');



const btnCopy = document.querySelector('.btn_copy');
btnCopy.addEventListener('click',copyText);

const encrypter = document.querySelector('.btn-encrypter').addEventListener('click',encrypterText);

const decrypter = document.querySelector('.btn-decrypter').addEventListener('click',decrypterText);



function encrypterText(){
    let input =  text.value.toLowerCase();
    let encrypterRules = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    for(let i = 0; i< encrypterRules.length;i++){
        if(input.includes(encrypterRules[i][0])){
         input =  input.replaceAll(encrypterRules[i][0],encrypterRules[i][1]);
        }

    }
    mostrar(input);
};

function decrypterText() {
    let input = text.value;
    let encrypterRules = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    for(let i = 0; i< encrypterRules.length;i++){
        if(input.includes(encrypterRules[i][1])){
            input = input.replaceAll(encrypterRules[i][1],encrypterRules[i][0]);
        }
    }
    mostrar(input);
}


function mostrar(textEncrypted){
    divHidden.style.display = 'none'
    encrypted.style.display = 'block'
    btnCopy.style.display = 'block';
    encrypted.value = textEncrypted;
}

function copyText(){
    encrypted.select();
    document.execCommand("copy");
  }



