            
                                    let welcome = document.querySelector("#welcome");
                                    let about = document.querySelector("#about");
                                    let skills = document.querySelector("#skills");
                                    let education = document.querySelector("#education");
                                    let gallery = document.querySelector("#gallery");
                                    
                                    let footer = document.querySelector("#footer");
                                    // let menu_button= document.getElementsByClassName('menu-button');
                                    

                                    window.addEventListener("scroll",()=>{
                                      var windo=window.pageYOffset;
                                      if(about.offsetTop<=windo&&skills.offsetTop>windo){
                                        console.log("about");
                                        
                                        document.querySelector(".about").setAttribute("id","active");
                                        document.querySelector(".skills").removeAttribute("id","active");
                                        document.querySelector(".education").removeAttribute("id","active");
                                        document.querySelector(".gallery").removeAttribute("id","active");
                                        document.querySelector(".welcome").removeAttribute("id","active");
                                        
                                      }
                                      
                                      else if(skills.offsetTop<=windo&&education.offsetTop>windo){
                                        console.log("skills");
                                        document.querySelector(".skills").setAttribute("id","active");
                                        document.querySelector(".about").removeAttribute("id","active");
                                        document.querySelector(".education").removeAttribute("id","active");
                                        document.querySelector(".gallery").removeAttribute("id","active");
                                        document.querySelector(".welcome").removeAttribute("id","active");
                                        
                                      }
                                      
                                      else if(education.offsetTop<=windo&&gallery.offsetTop>windo){
                                        console.log("education");
                                        document.querySelector(".education").setAttribute("id","active");
                                        document.querySelector(".about").removeAttribute("id","active");
                                        document.querySelector(".skills").removeAttribute("id","active");
                                        document.querySelector(".gallery").removeAttribute("id","active");
                                        document.querySelector(".welcome").removeAttribute("id","active");
                                        
                                      }
                                      
                                      else if(gallery.offsetTop<=windo&&footer.offsetTop>windo){
                                        console.log("gallery");
                                        document.querySelector(".gallery").setAttribute("id","active");
                                        document.querySelector(".about").removeAttribute("id","active");
                                        document.querySelector(".education").removeAttribute("id","active");
                                        document.querySelector(".skills").removeAttribute("id","active");
                                        document.querySelector(".welcome").removeAttribute("id","active");
                                        
                                      }
                                      else if(footer.offsetTop<=windo){
                                        console.log("footer");
                                        document.querySelector(".gallery").removeAttribute("id","active");
                                        document.querySelector(".about").removeAttribute("id","active");
                                        document.querySelector(".education").removeAttribute("id","active");
                                        document.querySelector(".skills").removeAttribute("id","active");
                                        document.querySelector(".welcome").removeAttribute("id","active");
                                        
                                      }
                                      
                                      else {
                                        console.log("welcome");
                                        document.querySelector(".welcome").setAttribute("id","active");
                                        document.querySelector(".about").removeAttribute("id","active");
                                        document.querySelector(".education").removeAttribute("id","active");
                                        document.querySelector(".skills").removeAttribute("id","active");
                                        document.querySelector(".gallery").removeAttribute("id","active");
                                        
                                      }
                                    }
                                    )
                                    


const penTitle = document.querySelector('.pen-title');
const menu = document.querySelector('.js-menu');
const menuTrigger = document.querySelectorAll('.js-menu-trigger');

menuTrigger.forEach(btn => {
  btn.addEventListener('click', function() {
    
    menuTrigger.forEach(b => {
      b.classList.toggle('menu-trigger--menu-open');
    });
    menu.classList.toggle('menu--open');
  });
});


// window.addEventListener("scroll",()=>{
//     var windo=window.pageYOffset;
//     if(about.offsetTop<=windo&&skills.offsetTop>windo){
//         document.getElementById("yellow_button").style.display="none";
//     }})   



window.addEventListener("scroll",()=>{
    var windo=window.pageYOffset;
    if(gallery.offsetTop<=windo){
        document.getElementById("yellow_button").style.display="block";}
    else{
        document.getElementById("yellow_button").style.display="none";
    }})

    function codeAddress() {
      document.getElementById("yellow_button").style.display="none";
      
  }
window.onload = codeAddress;


jQuery(function($){
  $("[contenteditable]").focusout(function(){
      var element = $(this);        
      if (!element.text().trim().length) {
          element.empty();
      }
  });
});