let chosenCard=[];
let chosenCardsIds=[]
const cardsWon=[]
//getting html elements

let score=document.getElementById('score');
const container=document.getElementById('container');

//storing card image and name data
const cardArray=[

    {
        name:'cheeseburger',
        img:'images/cheeseburger.png'
    },
    {
        name:'fries',
        img:'images/fries.png'
    },
    {
        name:'hotdog',
        img:'images/hotdog.png'
    },
    {
        name:'ice-cream',
        img:'images/ice-cream.png'
    },
    {
        name:'milkshake',
        img:'images/milkshake.png'
    },
    {
        name:'pizza',
        img:'images/pizza.png'
    },
    {
        name:'cheeseburger',
        img:'images/cheeseburger.png'
    },
    {
        name:'fries',
        img:'images/fries.png'
    },
    {
        name:'hotdog',
        img:'images/hotdog.png'
    },
    {
        name:'ice-cream',
        img:'images/ice-cream.png'
    },
    {
        name:'milkshake',
        img:'images/milkshake.png'
    },
    {
        name:'pizza',
        img:'images/pizza.png'
    }

]

cardArray.sort(()=>0.5-Math.random());

function setCArds(){
    for(let i=0;i<12;i++){
        const card=document.createElement('img');
        card.setAttribute('src','images/blank.png');
        card.setAttribute('data-id',i);
        card.style.border='1px black inset';
        container.appendChild(card);
        card.addEventListener('click',flipCards);
        card.addEventListener('mouseover',function(){
            card.style.opacity=.7;
        })
        card.addEventListener('mouseleave',function(){
            card.style.opacity=1;
        })
        
    }
}
setCArds();
function flipCards(){
    let cardId=this.getAttribute('data-id');
    chosenCard.push(cardArray[cardId].name);
    this.setAttribute('src',cardArray[cardId].img);
    chosenCardsIds.push(cardId);
    if(chosenCard.length===2){
        setTimeout(checkMatch,500);
    }else if(chosenCard.length>2){
        this.setAttribute('src','images/blank.png')
    }
}
function checkMatch(){
    let card=document.querySelectorAll('#container img');
    let firstchosen=chosenCardsIds[0];
    let secondchosen=chosenCardsIds[1];
    if(firstchosen===secondchosen){
        alert('you clicked the same card');
        card[firstchosen].setAttribute('src','images/blank.png');
        card[secondchosen].setAttribute('src','images/blank.png');
    }else if(chosenCard[0]===chosenCard[1]){
        alert('match found!');
        card[firstchosen].setAttribute('src','images/white.png');
        card[secondchosen].setAttribute('src','images/white.png');
        card[firstchosen].removeEventListener('click',flipCards);
        card[secondchosen].removeEventListener('click',flipCards);
        cardsWon.push(chosenCard)
        score.innerHTML=cardsWon.length
    }else{
        card[firstchosen].setAttribute('src','images/blank.png');
        card[secondchosen].setAttribute('src','images/blank.png');
    }
    if(cardsWon.length===6){
        if(confirm('you won!!\n press ok to play again')){
            location.reload();
        }
    }
    chosenCard=[];
    chosenCardsIds=[];
}

