var countrySelect = document.getElementById("country-select");
var countryInfo = document.getElementById("country-info");
var countryName = document.getElementById("country-name");
var countryCapital = document.getElementById("country-capital");
var countryPopulation = document.getElementById("country-population");
var countryImage = document.getElementById("country-image");

countrySelect.addEventListener("change", function() {
    var selectedCountry = countrySelect.value;

    if (selectedCountry) {
        // Simulação de busca das informações do país
        var countryData = getCountryData(selectedCountry);

        if (countryData) {
            countryName.textContent = "Nome: " + countryData.name;
            countryCapital.textContent = "Capital: " + countryData.capital;
            countryPopulation.textContent = "População: " + countryData.population;

            // Atualiza o iframe com o link do Google Fotos (ou outro link de imagem relevante)
            countryImage.src = "https://www.google.com/search?q=" + countryData.name + "&tbm=isch";
            countryImage.style.display = "block";
            countryInfo.style.display = "block";
        }
    } else {
        countryInfo.style.display = "none";
        countryImage.style.display = "none";
    }
});

function getCountryData(countryCode) {
    // Exemplo de dados fictícios para alguns países
    var countryData = {
        brasil: {
            name: "Brasil",
            capital: "Brasília",
            population: "211 million"
        },
        "estados-unidos": {
            name: "Estados Unidos",
            capital: "Washington, D.C.",
            population: "331 million"
        },
        japao: {
            name: "Japão",
            capital: "Tóquio",
            population: "126 million"
        }
        // Adicione mais dados de países conforme necessário
    };

    return countryData[countryCode];
}