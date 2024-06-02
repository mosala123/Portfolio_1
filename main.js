// navbar
let menu =document.getElementById("menu")
let right_head= document.querySelector(".right-head") 
let closee = document.querySelector(".closee")

menu.onclick= function(){
  right_head.classList.add("show")
}

closee.onclick= function(){
    right_head.classList.remove("show")   
}


// typing

var typed = new Typed('#element', {
    strings: ['Front End Developer'  ],
    typeSpeed: 70,
    backSpeed: 70,
    loop: true
});

// skills 
let aboutme = document.querySelector(".aboutme")
let spans = document.querySelectorAll(".progress span ")


window.onscroll = function(){
    if(window.scrollY >= aboutme.offsetTop-200){
        console.log("done")
        spans.forEach( (span)=>{
            span.style.width= span.dataset.width;
        }) 
    }else{
        
        spans.forEach( (span)=>{
            span.style.width=  "0";
        }) 
        
    }
}
 
// my works 
function filterCards(category) {
    var cards = document.querySelectorAll('.col-lg-4.col-md-6.col-sm-12.mb-4');
    cards.forEach(function(card) {
        if (category === 'all') {
            card.style.display = 'block';
        } else {
            if (card.getAttribute('data-category') === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });

    // 
    var buttons = document.querySelectorAll('.filter-buttons p');
    buttons.forEach(function(button) {
        if (button.id === category || (category === 'all' && button.id === 'All')) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}
 













