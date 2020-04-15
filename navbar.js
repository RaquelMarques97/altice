
function navbar () {
    var option=['option1', 'option2', 'option3'];
    
    option.forEach(element => {
        var text= document.getElementById(element);
 
        text=text.innerText;
        text=text.toUpperCase();
        document.getElementById(element).innerHTML=text;
        
    });
    

    if (document.getElementById("vertical-menu").style.display==="none") {
        document.getElementById("vertical-menu").style.display="inline-flex";
        document.getElementById("burger").style.display="none";
        document.getElementById("close-menu").style.display="flex";

    } 
   
    
}

