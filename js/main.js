//funzione che inserisce i dati dell oggetto
function insertByIndex(){
    document.getElementById('img').src = images[index].image
    document.getElementById('title').innerHTML = images[index].title
    document.getElementById('text').innerHTML = images[index].text
}
//SEZIONE VARIABILI ARREY E OGGETTI

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

//INIZIALIZZO LE DUE VARIABILI CHE PERMETTERANNO L'AZIONE DELLO SCROLL


const btn_next = document.getElementById('btnNext')
const btn_prev = document.getElementById('btnPrev')
let index = 0

btn_next.addEventListener('click', function(){
    if(index < images.length-1){
        index++;
        insertByIndex()
    }
    else{
        index = 0
        insertByIndex()
    }
})

btn_prev.addEventListener('click', function(){
    if(index > 0){
        index--;
        insertByIndex()
    }
    else{
        index = images.length-1
        insertByIndex()
    }
 
})



