console.log("inizio")

//l'utente clicca sul bottone play per generare una griglia di gioco
//  - recupero l'elemento dal DOM tramite querySelector e la classe .play_btn
//  - resto in ascolto del click su questo elemento ed al click stesso genero poi il campo di gioco


// recupero l'elemento del DOM in cui inserisco gli oggetti che creerò (ovvero quello con la classe .grid) che chiamo gridElement

//dichiaro una variabile size alla quale assegno il valore della grandezza di un lato della griglia di gioco (in questo caso 10)
//ovvero 10 celle per lato, essendo la griglia di 10*10)
//dichiaro una variabile numOfCells alla quale assegno il valore di size * size



//creo un ciclo for da iterare per creare le varie singole celle da inserire poi nel DOM

//dichiaro una variabile num alla quale assegno il valore di i + 1  (i sarebbe l'indice del ciclo for)

//creo l'oggetto che conterrà la mia cella, da inserire poi nel DOM
// - dichiaro una variabile che chiamo cellElement usando la funzione .createElement(`div`)
// - aggiungo alla variabile cellElement la classe `cell` usando la funzione .className = `cell`
// - aggiungo a cellElement la variabile num da inserire nel DOM, tramite .innerHTML = num

// inserisco nell'elemento recuperato dal DOM con classe grid, la variabile cellElement usando .append(cellElement)


//aggiungo l'event listener al click del cellElement
// - uso la funzione .classList.togle(bg_blue) su cellElement per aggiungere il background blue all cella che cliccerò