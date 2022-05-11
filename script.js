console.log('estamos no ar...');

function validaCPF(cpf) {
    let soma = 0;
    let numeros = cpf.substring(0,9);
    let digitos = cpf.substring(9);

    for(var i = 10; i > 1; i--) {
        soma += numeros.charAt(10 - i) * i;
    }
    
    soma = (soma * 10) % 11 > 9 ? 0 : (soma * 10) % 11;
    
    console.log(soma);
    if(soma != digitos.charAt(0)) {
        return false;
    }
    

    soma = 0;
    numeros = cpf.substring(0,10);

    for( i = 11; i > 1; i--) {
        soma += numeros.charAt(11 - i) * i;
    }

    soma = (soma * 10) % 11 > 9 ?   0 : (soma * 10) % 11;

    if(soma != digitos.charAt(1)) {
        return false
    }else {
        return true;
    }
}

function validar() {
    let cpf = document.querySelector('.js-cpf').value;
    let resultadoValidacao = validaCPF(cpf);

    document.querySelector('.js-sucess').style.display='none';
    document.querySelector('.js-error').style.display='none';

    if(resultadoValidacao) {
        document.querySelector('.js-sucess').style.display='block';
    }else {
        document.querySelector('.js-error').style.display='block';
    }
}