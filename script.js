/*b) Elaborar um programa para uma pizzaria, o qual leia o valor total de
uma conta e quantos clientes vão pagá-la. Calcule e informe o valor a ser
pago por cliente.
Exemplo:
Valor da Conta R$: 90.00
Número de Clientes: 3
Valor por cliente R$: 30.00*/

function Gerar(){
    let valor = document.getElementById('txtvalor')
    let clientes = document.getElementById('txtcliente')
    let res = document.getElementById('res')

    if(valor.value.length <= 0){
        window.alert('[ERRO] Valor inválido, favor tente novamente.')
    } else{
        let resultado = 0;
        resultado = Number(valor.value) / Number(clientes.value)
        
        res.innerHTML = `O valor fica R$: ${resultado.toFixed(2)} para cada`
    }
    
}