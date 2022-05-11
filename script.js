console.log('estamos no ar...');

function validaCPF(cpf) {
    return false;
}

function validar() {
    console.log('validando o cpf');

    let cpf = document.querySelector('.js-cpf').value;
    console.log(cpf);
    let resultadoValidacao = validaCPF(cpf);

    if(resultadoValidacao) {
        document.querySelector('.js-sucess').style.display='block';
    }else {
        document.querySelector('.js-error').style.display='block';
    }
}