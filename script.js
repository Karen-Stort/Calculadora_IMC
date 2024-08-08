const calcular = document.getElementById('calcular');
function calculoIMC () {
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (altura !== '' && peso !== '' ) {
        const imc = (peso / (altura * altura)).toFixed(2);
        //Classificando o IMC em categorias //
        let classificacao = '';
        
        if (imc < 18) {
            alert('chegou aqui') 
            classificacao = 'Baixo Peso';
            
        }else if (imc < 25) {
            classificacao = 'Peso Normal';
        }else if (imc < 30) {
            classificacao = 'Sobrepeso';
        }else if (imc < 35) {   
            classificacao = 'Obesidade Grau I';
        }else if (imc < 40) {
            classificacao = 'Obesidade Grau II (severa)';
        }else {
            classificacao = 'Obesidade Grau III (mórbida)';
        }        
        
        resultado.textContent = `Seu IMC é: ${imc} - (${classificacao})`;
    
    }else {
        resultado.textContent = 'Por favor, preencha todos os campos!';
    }    

        
}
//ao clicar no calcular, tem que fazer a conta, e o método do botao escura quando alguem clique, e estamos dizndo qdo alguem clicar no botao vai executar essa função calculo IMC
calcular.addEventListener('click', calculoIMC); 
