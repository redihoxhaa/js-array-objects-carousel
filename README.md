# CAROSELLO

#### CONSEGNA DELL'ESERCIZIO 

```
Copiamo il carosello precedentemente creato in una nuova cartella (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).

Milestone 0:
Creare un array di oggetti composto da Url, titolo, descrizione (potete inventare titolo e descrizione).

Milestone 1:
Usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.

BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.

BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.

BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
```

---

#### SVOLGIMENTO

L'esercizio è stato svolto integralmente nella repo precedente, implementando volontariamente anche la funzione di reverse. Non ci resta altro che modificare l'array di stringhe in un array di oggetti, ed ineserire nel ciclo le istruzioni per pescare l'elemento desiderato. Di conseguenza dovremo creare anche degli elementi aggiuntivi per titolo e descrizione ai quali appendere i nostri valori.

