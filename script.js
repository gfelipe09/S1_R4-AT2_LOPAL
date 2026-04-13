let valor;
valor = Number(prompt("Insira o valor da sua compra: "));

if (isNaN(valor)) {

    alert("Você não digitou um número!")

}
else {

    if (valor >= 150) {

        let desc;
        desc = Number(valor * 0.02);
        let vCdesc;
        vCdesc = Number(valor * 0.98);

        alert("Parabéns! Você recebeu um desconto de " + desc.toFixed(2) + " reais");
        alert("O valor do produto com o desconto é igual a " + vCdesc.toFixed(2) + " reais");

    }
    else {

        let cashback;
        cashback = Number(valor * 0.02);

        if (valor == 1) {

            alert("O valor do produto é igual a " + valor + " real, com isso você recebeu um cashbak de " + cashback.toFixed(2) + " reais");

        }

        else {

            if (cashback == 1) {

                alert("O valor do produto é igual a " + valor + " reais, com isso você recebeu um cashbak de " + cashback.toFixed(2) + " real");

            }
            else {

                alert("O valor do produto é igual a " + valor + " reais, com isso você recebeu um cashbak de " + cashback.toFixed(2) + " reais");

            }

        }



    }
}