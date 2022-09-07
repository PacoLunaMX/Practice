
// Function to make smaller the navbar when scrolling
window.onscroll = function (){scrollFunction()};

function scrollFunction(){


    if( navigator.userAgent.includes("Mobile")){
        let x;
    } else{

        if (document.body.scrollTo> 80 || document.documentElement.scrollTop >80){
            document.getElementById("navbar").style.height ="8vh";
        }
        else if(document.body.scrollTo> 1000 || document.documentElement.scrollTop >1000){
            document.getElementById("nav-portfolio").style.backgroundColor ="red";
        }
        
        else{
            document.getElementById("navbar").style.height ="12vh";
        }
    }

}

// Function to know which element is being scrolled
window.addEventListener('hashchange',(e)=>hashColors(e))  

function hashColors(e){
    if(e.target.location.hash.includes('portfolio')){
        document.getElementById("nav-portfolio").classList.add("active");
        document.getElementById("nav-about").classList.remove("active");
        document.getElementById("nav-contact").classList.remove("active");
    } else  if(e.target.location.hash.includes('about')){
        document.getElementById("nav-contact").classList.remove("active");
        document.getElementById("nav-portfolio").classList.remove("active");
        document.getElementById("nav-about").classList.add("active");
    } else if(e.target.location.hash.includes('contact')){
        document.getElementById("nav-portfolio").classList.remove("active");
        document.getElementById("nav-about").classList.remove("active");
        document.getElementById("nav-contact").classList.add("active");
        
    } else{
        document.getElementById("nav-portfolio").classList.remove("active");
        document.getElementById("nav-about").classList.remove("active");
        document.getElementById("nav-contact").classList.remove("active");
    }

     
}


function urlhash (link) {
    window.location.hash  = link;
}


// function to open menu on mobile
let menu = document.getElementById("menu-hamburger");
menu.addEventListener("click",()=>{
    document.getElementById("menu-mobile").classList.toggle("collapse")

})

document.addEventListener('click', event => {
    if(event.target.classList.contains('nav-item-mobile') ){
        document.getElementById("menu-mobile").classList.toggle("collapse")
    }
  })


// function to open cards

document.addEventListener('click', event => {
    if(event.target.classList.contains('close-mark') ){
        event.target.parentNode.classList.add("collapse")
    }else if(event.target.classList.contains('portfolio-component')){
        let value = event.target.getAttribute("value")
        
        document.getElementById(`portfolio-${value}`).classList.remove("collapse")
    }
  })
