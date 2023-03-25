document.getElementById('card').style.setProperty('display', 'none', 'important')

function Procurar() {
    document.getElementById('card').style.setProperty('display', 'block', 'important')
    let pais = document.getElementById('pais').value
    let finalUrl = `https://restcountries.com/v3.1/name/${pais}?fullText=true`
    fetch(finalUrl)
        .then(function(res) {
            return res.json()
        })
        .then(function(data) {
            console.log(data[0])
            let bandeira = document.getElementById('bandeira')
            let nome = document.getElementById('nome')
            let capital = document.getElementById('capital')
            let populacao = document.getElementById('pop')
            let continente = document.getElementById('cont')
    
            nome.innerHTML = pais
            capital.innerHTML = data[0].capital[0]
            continente.innerHTML = data[0].continents[0]
            populacao.innerHTML = data[0]. population
            bandeira.src = data[0].flags.svg
        })


}

