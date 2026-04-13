let num;
num = Number(prompt("Digite um número qualquer: "));

if (isNaN(num)) {

    alert("Você não digitou um número!")

}
else {

    if (num % 2 == 0) {

        alert(num + " é um número par.")

    }
    else {

        alert(num + " é um número ímpar.")

    }
};