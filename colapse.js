function colapse () {
    if (document.getElementById("colapse").style.display==="none") {
        document.getElementById("colapse").style.display="block";
        document.getElementById("dot").style.transform="rotate(180deg)";
       
    } else {
        document.getElementById("colapse").style.display="none";
        document.getElementById("dot").style.transform="rotate(90deg)";

    } 

    
}