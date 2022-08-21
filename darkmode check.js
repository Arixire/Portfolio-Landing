function lightmode(){
    var element = document.body;
    element.classList.toggle("light-mode");
    
   var ihtml = document.getElementById("bdark");
        {
       if( ihtml.innerHTML==="Light Mode"){
           ihtml.innerHTML="Dark Mode";
           document.getElementById("fdark").style.color = "blue";
            document.getElementById("bdark").style.color="blue";
            document.getElementById("bdark").style.backgroundColor="aliceBlue";
            document.getElementById("input").style.color="blue";
            document.getElementById("input").style.backgroundColor="aliceBlue";
            document.getElementById("taco").style.backgroundColor="aliceBlue";
        }
       else {
    ihtml.innerHTML=
            "Light Mode";
            document.getElementById("fdark").style.color = "red";
            document.getElementById("bdark").style.color="rgb(30, 222, 30)";
            document.getElementById("bdark").style.backgroundColor="rgb(65, 65, 101)";
            document.getElementById("input").style.color="rgb(30, 222, 30)";
            document.getElementById("input").style.backgroundColor="rgb(65, 65, 101)";
            document.getElementById("taco").style.backgroundColor="#323436";
        }}}
        function hamburger() {
            
          document.getElementById("myLinks").style.width = "250px";
          document.getElementById("main").style.marginLeft = "250px";
        }
        
        
    