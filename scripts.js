const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelect2 = document.getElementsByClassName("select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")


    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 6.8
    const BitcoinToday = 14.0


    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday
        )

    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }
    if (currencySelect.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }
    if (currencySelect.value == "bitcoin"){
        currencyValueConverted.innerHTML = new Intl("BTC",{
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / BitcoinToday)

    }
    
}
    


function changeCurrency(){
    const currencyName = document.getElementById('currency-name')
    const currencyImage = document.querySelector('.currency-img')
    if (currencySelect.value == "dolar"){
        currencyName.innerHTML = 'Dólar americano'
        currencyImage.src = './assets/usa.png'
    }
    
    if (currencySelect.value == "euro"){
        currencyName.innerHTML = 'Euro'
        currencyImage.src = './assets/euro.png'
    }

    if (currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra 1.png"
    }
    if (currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }
    convertValues()
}


currencySelect.addEventListener('change', changeCurrency )

convertButton.addEventListener("click", convertValues)