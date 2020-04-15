

function jump () {
    let X = +document.getElementById('x').value;
    let Y = +document.getElementById('y').value;
    let D = +document.getElementById('d').value;  
    
    solution(X, Y, D);  
}

function solution (X, Y, D) {
    if (X==0 || Y==0 || D==0) {
        document.getElementById('response').innerHTML="Por favor preencha todos os campos com um número maior que 0";     
    } else {
        if (document.getElementById('central').style.backgroundColor === document.getElementById('green').style.backgroundColor && X!=3) {
            document.getElementById('x').value=3;
            document.getElementById('green-response').style.display="flex";  
            document.getElementById('blue-response').style.display="none";     
            document.getElementById('response').style.display="none";   
        } 
        else {
            if (document.getElementById('central').style.backgroundColor === document.getElementById('blue').style.backgroundColor && X>7) {
                document.getElementById('blue-response').style.display="flex";
                document.getElementById('green-response').style.display="none";  
                document.getElementById('response').style.display="none";     
            } 
            else {
                if (X>Y) {
                    document.getElementById('response').innerHTML="Para o sapo dar o salto o X tem de ser menor ou igual que Y!"
                } 
                else {
                    let solution = X+Y;   
                    solution=parseInt(solution/D);
                    
                    document.getElementById("solution").innerHTML = solution;
                    document.getElementById("gray2").style.display ="none";
                    document.getElementById("colored2").style.display ="flex";   
                    document.getElementById('green-response').style.display="none";
                    document.getElementById('blue-response').style.display="none";    
                    document.getElementById('response').style.display="none";           
                }     

            }
        
        }
 
    }
    
}
