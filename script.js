const showpassword = document.querySelector("#showpassword")
const range = document.querySelector("#range")
const output = document.querySelector("#output")
const btn = document.querySelector("#btn")
let password = []

const inpLettersMaiusc = document.querySelector("#lettersmaiusc")
const inpLettersMinusc = document.querySelector("#lettersminusc")
const inpNumbers = document.querySelector("#numbers")
const inpSimbols = document.querySelector("#simbols")

let aux = ''

let box = document.getElementById("showpassword")

const lettersminusc = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','ç','z','x','c','v','b','n','m']
const lettersmaiusc = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Ç','Z','X','C','V','B','N','M']
const simbols = ['!','@','#','$','%','&','*','_','-','+','=','/','?']
const lettersminuscnumbers = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','ç','z','x','c','v','b','n','m',0,1,2,3,4,5,6,7,8,9]
const lettersmaiuscnumbers = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Ç','Z','X','C','V','B','N','M',0,1,2,3,4,5,6,7,8,9] 
const lettersminuscmaiusc = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Ç','Z','X','C','V','B','N','M','q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','ç','z','x','c','v','b','n','m']
const lettersmaiuscsimbols = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Ç','Z','X','C','V','B','N','M','!','@','#','$','%','&','*','_','-','+','=','/','?']
const lettersminuscmaiuscnumbers = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Ç','Z','X','C','V','B','N','M','q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','ç','z','x','c','v','b','n','m',0,1,2,3,4,5,6,7,8,9]
const lettersminuscmaiuscsimbols = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Ç','Z','X','C','V','B','N','M','q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','ç','z','x','c','v','b','n','m','!','@','#','$','%','&','*','_','-','+','=','/','?']
const lettersminuscsimbols = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','ç','z','x','c','v','b','n','m','!','@','#','$','%','&','*','_','-','+','=','/','?']
const lettersmaiuscnumberssimbols = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Ç','Z','X','C','V','B','N','M',0,1,2,3,4,5,6,7,8,9,'!','@','#','$','%','&','*','_','-','+','=','/','?']
const lettersminuscnuberssimbols = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','ç','z','x','c','v','b','n','m','!','@','#','$','%','&','*','_','-','+','=','/','?',0,1,2,3,4,5,6,7,8,9]
const numbers = [0,1,2,3,4,5,6,7,8,9]
const numberssimbols = ['!','@','#','$','%','&','*','_','-','+','=','/','?',0,1,2,3,4,5,6,7,8,9]
const all = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','ç','z','x','c','v','b','n','m','!','@','#','$','%','&','*','_','-','+','=','/','?',0,1,2,3,4,5,6,7,8,9,'Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Ç','Z','X','C','V','B','N','M']

function verifychoiceuser (inpLM,inpLm,inpS,inpN){
    if(inpLM.checked == false && inpLm.checked == true && inpS.checked == false && inpN.checked == false){
        aux = 'lettersminusc'
    }else if(inpLM.checked == true && inpLm.checked == true && inpS.checked == false && inpN.checked == false){
        aux = 'lettersminuscmaiusc'
    }else if(inpLM.checked == false && inpLm.checked == true && inpS.checked == true && inpN.checked == false){
        aux = 'lettersminuscsimbols'
    }else if(inpLM.checked == false && inpLm.checked == true && inpS.checked == false && inpN.checked == true){
        aux = 'lettersminuscnumbers'
    }else if(inpLM.checked == true && inpLm.checked == false && inpS.checked == false && inpN.checked == false){
        aux = 'lettersmaiusc'
    }else if(inpLM.checked == true && inpLm.checked == false && inpS.checked == true && inpN.checked == false){
        aux = 'lettersmaiuscsimbols'
    }else if(inpLM.checked == true && inpLm.checked == false && inpS.checked == false && inpN.checked == true){
        aux = 'lettersmaiuscnumbers'
    }else if(inpLM.checked == false && inpLm.checked == false && inpS.checked == true && inpN.checked == false){
        aux = 'simbols'
    }else if(inpLM.checked == false && inpLm.checked == false && inpS.checked == false && inpN.checked == true){
        aux = 'numbers'
    }else if(inpLM.checked == false && inpLm.checked == false && inpS.checked == true && inpN.checked == true){
        aux = 'numberssimbols'
    }else if(inpLM.checked == true && inpLm.checked == true && inpS.checked == true && inpN.checked == false){
        aux = 'lettersminuscmaiuscsimbols'
    }else if(inpLM.checked == true && inpLm.checked == true && inpS.checked == false && inpN.checked == true){
        aux = 'lettersminuscmaiuscnumbers'
    }else if(inpLM.checked == false && inpLm.checked == true && inpS.checked == true && inpN.checked == true){
        aux = 'lettersminuscnuberssimbols'
    }else if(inpLM.checked == true && inpLm.checked == false && inpS.checked == true && inpN.checked == true){
        aux = 'lettersmaiuscnumberssimbols'
    }else if(inpLM.checked == true && inpLm.checked == true && inpS.checked == true && inpN.checked == true){
        aux = 'all'
    }else{
        aux = ''
        console.log("Ola mundo")
    }
}

function createpassword (p,t,cl){
    for(let i = 0; i<cl; i++){
        let index = Math.floor(Math.random()*t.length)
        p.push(t[index])
    }
}

range.addEventListener("input", ()=>{
    output.value = Number(range.value)
})

btn.addEventListener('click',()=>{
    showpassword.value = ''
    password = []
    let choicelength = range.value
    verifychoiceuser(inpLettersMaiusc,inpLettersMinusc,inpSimbols,inpNumbers)
    if(aux == ''){
        alert('[ERRO] Selecione um tipo')
        box.style.border = "1px solid red"
    }else{
        box.style.border = "1px solid gray"
        if(aux == 'lettersminusc'){
            createpassword(password,lettersminusc, choicelength)
        }else if(aux == 'lettersminuscmaiusc'){
            createpassword(password, lettersminuscmaiusc, choicelength)
        }else if(aux == 'lettersminuscsimbols'){
            createpassword(password, lettersminuscsimbols, choicelength)
        }else if(aux == 'lettersminuscnumbers'){
            createpassword(password, lettersminuscnumbers, choicelength)
        }else if(aux == 'lettersmaiusc'){
            createpassword(password, lettersmaiusc, choicelength)
        }else if(aux == 'lettersmaiuscsimbols'){
            createpassword(password, lettersmaiuscsimbols, choicelength)
        }else if(aux == 'lettersmaiuscnumbers'){
            createpassword(password, lettersmaiuscnumbers, choicelength)
        }else if(aux == 'simbols'){
            createpassword(password, simbols, choicelength)
        }else if(aux == 'numbers'){
            createpassword(password, numbers, choicelength)
        }else if(aux == 'numberssimbols'){
            createpassword(password, numberssimbols, choicelength)
        }else if(aux == 'lettersminuscmaiuscsimbols'){
            createpassword(password, lettersminuscmaiuscsimbols, choicelength)
        }else if(aux == 'lettersminuscmaiuscnumbers'){
            createpassword(password, lettersminuscmaiuscnumbers, choicelength)
        }else if(aux == 'lettersminuscnuberssimbols'){
            createpassword(password, lettersminuscnuberssimbols, choicelength)
        }else if(aux == 'lettersmaiuscnumberssimbols'){
            createpassword(password, lettersmaiuscnumberssimbols, choicelength)
        }else{
            createpassword(password, all, choicelength)
        }
        for(let i = 0; i<choicelength; i++){
            showpassword.value += password[i]
        }
        console.log(password,aux)
    }    
})
