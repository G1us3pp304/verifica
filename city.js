// filename city.js

// Cerca nell'archivio fornito il nome indicato.
// Parametro archivio: lista di stringhe.
// Parametro nome: stringa da cercare.
// Restituisce true se il nome è presente, false altrimenti.
// Se anche solo uno dei parametri è null la funzione restituisce false.
function cerca(archivio, nome)
{
    let archivio=['Roma','Milano','Napoli','Palermo'];
    let cities='';
    if(archivio.includes(cities)==true)
    {
        return true;
    }

    else
    {
        return false;
    }
}

module.exports = {
    cerca
};
