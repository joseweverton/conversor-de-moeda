const button = document.getElementById("convert-button")
const select = document.getElementById("currency-select")
//const dolar = 5.2
//const euro = 5.9
//const bitcoin = 140997.13

function formatNumber(input) {
    const cleanInput = input.replace(/[^\d,]/g, '');
    const internationalFormat = cleanInput.replace(',', '.');
    const number = parseFloat(internationalFormat);
    return number;
  }

const convertValues = async () => {
    const inputReais = document.getElementById("input-real").value 
    const realValueText = document.getElementById("real-value-text")

    const formattedValue = formatNumber(inputReais);
    console.log(formattedValue
        )
    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high
    console.log(data)

    realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(formattedValue)

    const paragraphValueText = document.getElementById("paragraph-value-text")


    if (select.value === "US$ Dólar Americano") {

        paragraphValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(formattedValue / dolar)
    }

    if (select.value === "€ Euro") {
        paragraphValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(formattedValue / euro)
    }

    if(select.value === "₿ Bitcoin"){
        paragraphValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
        }).format(formattedValue / bitcoin)
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