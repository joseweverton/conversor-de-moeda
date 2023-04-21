const button = document.getElementById("convert-button")
const select = document.getElementById("currency-select")
const dolar = 5.2
const euro = 5.9
const bitcoin = 140997.13

const convertValues = () => {
    const inputReais = document.getElementById("input-real").value //Pegando o valor do input

    //colocando o valor digitado no texto onde estava 10.000,00
    const realValueText = document.getElementById("real-value-text")
    //realValueText.innerHTML = inputReais ((< forma sem formatação da moeda))

    //Abaixo forma utilizando formatação do JS para moeda Real
    realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputReais)

    //colocando o valor convertido em dolar no lugar dos 2000,00
    const paragraphValueText = document.getElementById("paragraph-value-text")
    //paragraphValueText.innerHTML = inputReais / dolar (< forma sem formatação da moeda)

    if (select.value === "US$ Dólar Americano") {
        //Abaixo forma utilizando formatação do JS para moeda Dolar
        paragraphValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputReais / dolar)
    }

    if (select.value === "€ Euro") {
        paragraphValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputReais / euro)
    }

    if(select.value === "₿ Bitcoin"){
        paragraphValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
        }).format(inputReais / bitcoin)
    } 
}

//function responsavel em trocar de dolar para euro e vice-versa 
changeCurrency = () => {
    const paragraphName = document.getElementById("paragraph-name")
    const currencyImg = document.getElementById("currency-img")

    if (select.value === "US$ Dólar Americano") {
        paragraphName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assents/eua.png"
    }

    if (select.value === "€ Euro") {
        paragraphName.innerHTML = "Euro"
        currencyImg.src = "./assents/euro.png"
    }

    if (select.value === "₿ Bitcoin") {
        paragraphName.innerHTML = "Bitcoin"
        currencyImg.src = "./assents/bitcoin.png"
    }
    convertValues()
}

// o click e o change que vão dentro das aspas são parametros de ação
button.addEventListener("click", convertValues)
select.addEventListener("change", changeCurrency)