//l'utente clicca sul bottone play per generare una griglia di gioco
//  - recupero l'elemento dal DOM tramite querySelector e la classe .play_btn
const playButton = document.querySelector(".play_btn")
//  - resto in ascolto del click su questo elemento ed al click stesso genero poi il campo di gioco
playButton.addEventListener("click", function(){
    
    
    // recupero l'elemento del DOM in cui inserisco gli oggetti che creerò (ovvero quello con la classe .grid) che chiamo gridElement
    const gridElement = document.querySelector(".grid")

    //dichiaro una variabile size alla quale assegno il valore della grandezza di un lato della griglia di gioco (in questo caso 10)
    //ovvero 10 celle per lato, essendo la griglia di 10*10)
    const size = 10
    //dichiaro una variabile numOfCells alla quale assegno il valore di size * size
    const numOfCells = size * size

    
    //creo un ciclo for da iterare per creare le varie singole celle da inserire poi nel DOM
    for(let i = 0; i < numOfCells; i++){

        
        //dichiaro una variabile num alla quale assegno il valore di i + 1  (i sarebbe l'indice del ciclo for)
        //che usero per inserire i numeri all'interno delle celle
        const num = i + 1
        
        
        //creo l'oggetto che conterrà la mia cella, da inserire poi nel DOM
        // - dichiaro una variabile che chiamo cellElement assegnandole document.createElement(`div`)
        const cellElement = document.createElement(`div`)

        // - aggiungo alla variabile cellElement la classe `cell` usando la funzione .className = `cell`
        cellElement.className = `cell`
        // - aggiungo a cellElement la variabile num da inserire nel DOM, tramite .innerHTML = num
        cellElement.innerHTML = num
        
        // inserisco nell'elemento recuperato dal DOM con classe grid, la variabile cellElement usando .append(cellElement)
        gridElement.append(cellElement)
        
        
        //aggiungo l'event listener al click del cellElement
        cellElement.addEventListener("click", function(){

            // - uso la funzione .classList.toggle("bg_blue") su cellElement per aggiungere il background blue all cella che cliccerò
            cellElement.classList.toggle("bg_blue")

        })
        
        
    }
})