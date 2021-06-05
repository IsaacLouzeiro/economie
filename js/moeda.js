let moeda = document.querySelectorAll(".tipomoeda");

// real = "R$";
// dolar = "$";
// euro = "€";


// for (let valor = 0; valor < moeda.length; valor++) {
//     moeda[valor].textContent = dolar;
// }


// pegamos o valor no localStorage
const valorRealStorage = localStorage.getItem('vlReal');
const valorReal = document.querySelector('#valor-real');
const valorDolarStorage = localStorage.getItem('vlDolar');
const valorDolar = document.querySelector('#valor-dolar');
const valorEuroStorage = localStorage.getItem('vlEuro');
const valorEuro = document.querySelector('#valor-euro');


 // caso tenha o valor real no localStorage
 if (valorRealStorage) {
    // transforma em real
    for (let valor = 0; valor < moeda.length; valor++) {
      moeda[valor].textContent = "R$";
    }
  
    // já deixa o input marcado como ativo
    valorReal.checked = true
 }

  
// caso tenha o valor euro no localStorage
if (valorEuroStorage) {
    // transforma em euro
    for (let valor = 0; valor < moeda.length; valor++) {
      moeda[valor].textContent = "€";
    }
  
    // já deixa o input marcado como ativo
    valorEuro.checked = true
}


// caso tenha o valor dolar no localStorage
if (valorDolarStorage) {
  // transforma em dolar
  for (let valor = 0; valor < moeda.length; valor++) {
    moeda[valor].textContent = "$";
  }


  // já deixa o input marcado como ativo
  valorDolar.checked = true
}



// ao clicar mudaremos a moeda para dolar
valorDolar.addEventListener('click', () => {
  // transforma em dolar
  for (let valor = 0; valor < moeda.length; valor++) {
    moeda[valor].textContent = "$";
  }

    // remove os itens do local storage
    localStorage.removeItem('vlEuro')
    
    // remove os itens do local storage
    localStorage.removeItem('vlReal')

    // salva o tema no localStorage
    localStorage.setItem('vlDolar', true)
    return
})


  
  // ao clicar mudaremos a moeda para euro
  valorEuro.addEventListener('click', () => {
    // transforma em euro
    for (let valor = 0; valor < moeda.length; valor++) {
      moeda[valor].textContent = "€";
    }

      // remove os itens do local storage
      localStorage.removeItem('vlDolar')
    
      // remove os itens do local storage
      localStorage.removeItem('vlReal')
  
      // salva o tema no localStorage
      localStorage.setItem('vlEuro', true)
      return
      
  })


  // ao clicar mudaremos a moeda para real
  valorReal.addEventListener('click', () => {
    // transforma em real
    for (let valor = 0; valor < moeda.length; valor++) {
      moeda[valor].textContent = "R$";
    }

      // remove os itens do local storage
      localStorage.removeItem('vlDolar')
    
      // remove os itens do local storage
      localStorage.removeItem('vlEuro')
  
      // salva o tema no localStorage
      localStorage.setItem('vlReal', true)
      return
      
  })