'use strict';
  window.addEventListener("resize", function() {
  var w = window.innerWidth;
  console.log(w)
  var responsiveDiv = document.querySelectorAll('.responsive');

responsiveDiv.forEach((element) => {
console.log(element)
 if(w < 700) {
        element.classList.remove("desktop");
        element.classList.add("mobile");
        console.log("desktop Remove");
      } else {
      element.classList.remove("mobile");
       element.classList.add("desktop");
       
        console.log("mobile removed");
      } 

})

     
      
    });