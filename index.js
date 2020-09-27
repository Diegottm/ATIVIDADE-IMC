var btnCalcular = document.getElementById('btnCalcular');
var inputPeso = document.getElementById('peso');
var inputAltura = document.getElementById('altura');
var pIMC = document.getElementById('imc');
    btnCalcular.addEventListener('click', calcula);

function calcula(){ 
    var peso = parseFloat(inputPeso.value);
    var altura = parseFloat(inputAltura.value);

    pIMC.classList.remove('IMCvermelho'); 
    pIMC.classList.remove('IMClaranja');
    pIMC.classList.remove('IMCazul');
    pIMC.classList.remove('IMCverde');

    if (isNaN(altura)){
        alert('Altura digitada inválida');
    } else if (isNaN(peso)){
        alert('Peso digitada inválido');
    } else {  
        
        if(altura > 100){
            altura = altura/100;
        }
        
        var imcCalculo =  peso/(altura *altura); 
            
        if(imcCalculo < 16){
            pIMC.classList.add('IMCvermelho');
            pIMC.innerText = '( IMC < 16 ) Magreza grave';
        }else if( imcCalculo >= 16 && imcCalculo < 17 ) {
            pIMC.classList.add('IMClaranja');
            pIMC.innerText = '( IMC 16 a < 17 ) Magreza moderada';
        }else if( imcCalculo >= 17 && imcCalculo < 18.5 ) {
            pIMC.classList.add('IMCazul');
            pIMC.innerText = '( IMC 17 a < 18,5 ) Magreza leve';
        }else if( imcCalculo >= 18.5 && imcCalculo < 25 ) {
            pIMC.classList.add('IMCverde');
            pIMC.innerText = '( IMC 18,5 a < 25 ) Saudável';
        }else if( imcCalculo >= 25 && imcCalculo < 30 ) {
            pIMC.classList.add('IMCazul');
            pIMC.innerText = '( IMC 25 a < 30 ) Sobrepeso';
        }else if( imcCalculo >=30 && imcCalculo < 35 ) {
            pIMC.classList.add('IMClaranja');
            pIMC.innerText = '( IMC 30 a < 35 ) Obesidade Grau I ';
        }else if( imcCalculo >=35 && imcCalculo < 40 ) {
            pIMC.classList.add('IMCvermelho');
            pIMC.innerText = '( IMC 35 a < 40 ) Obesidade Grau II (severa)';
        }else if( imcCalculo >= 40 ) {
            pIMC.classList.add('IMCvermelho');
            pIMC.innerText = '( IMC ≥ 40 ) Obesidade Grau III (mórbida)';
        }
    } 
} 