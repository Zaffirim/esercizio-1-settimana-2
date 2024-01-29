/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* I datatype in javascript sono stringa = sia il singolo carattere che la sequenza di caratteri.
I dato numerico in javascript è un numero. Il dato Booleano ammette due soli valori: true or false. Poi ci sono il datatype Null, null
segnala l'assenza intenzionale di un oggetto che è diverso da 0 perchè lo 0 in informatico è il primo numero positivo, e c'è UNDEFINED che è una proprietà
che indica che una variabile non ha un valore assegnato oppure non è affatto definita.



/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* let myName = 'Milo'
console.log(myName) */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
/* let num = 12;
let num2 = 20;

let somma = num + num2; 
console.log(somma); */

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
/* let x = 12; 
console.log(x); */
/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
/* let myName = 'Ciao'; */


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/


/* SCRIVI QUI LA TUA RISPOSTA */
/* let quattro = 4; 
let sottrazione = x - quattro; 
console.log(sottrazione); */


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* /* SCRIVI QUI LA TUA RISPOSTA */
/* let name1 = 'john';
let name2 = 'John';

let risposta = name1 === name2 ? 'si' :'No'

console.log(risposta);

let risposta2 = name1.toLocaleLowerCase() === name2.toLocaleLowerCase() ? 'si' : 'no'
/* let risposta = name1 === name2 ? 'si' :'No' */
/* console.log(risposta2);  */