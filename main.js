// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
var studente = {
    "nome": "Pinco",
    "cognome": "Pallo",
    "età": 300
}

for (const key in studente) {
    console.log(`${key} : ${studente[key]}`);
}

// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
var arrStudenti = [
    {
        "nome": "Laura",
        "cognome": "Rossi",
        "età": 50
    },
    {
        "nome": "Paolo",
        "cognome": "Brosio",
        "età": 65
    },
    {
        "nome": "Bruno",
        "cognome": "Vespa",
        "età": 80
    },
    {
        "nome": "Vasco",
        "cognome": "Rossi",
        "età": 70
    }
];

for (let i = 0; i < arrStudenti.length; i++) {

    for (const key in arrStudenti[i]) {
        if (key != "età") {
            console.log(`${key} : ${arrStudenti[i][key]}`);
        }
    }

}

// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var nuovoStudente = {
}

nuovoStudente.nome = prompt("Nome");
nuovoStudente.cognome = prompt("Cognome");
nuovoStudente.età = parseInt(prompt("Nome"), 10);

arrStudenti.push(nuovoStudente);
console.log(nuovoStudente);


/* --------------------------------- */
var source = document.getElementById("entry-template").innerHTML;
var template = Handlebars.compile(source);

for (let i = 0; i < arrStudenti.length; i++) {
    var html = template(arrStudenti[i]);
    $("#test").append(html);
}
