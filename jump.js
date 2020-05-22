

// function jump () {
//     let X = +document.getElementById('x').value;
//     let Y = +document.getElementById('y').value;
//     let D = +document.getElementById('d').value;  
  
    
//     solution(X, Y, D);  
// }

// function solution (X, Y, D) {
//     if (X==0 || Y==0 || D==0) {
//         document.getElementById('response').innerHTML="Por favor preencha todos os campos com um número maior que 0";     
//     } else {
//         if (document.getElementById('central').style.backgroundColor === document.getElementById('green').style.backgroundColor && X!=3) {
//             document.getElementById('x').value=3;
//             document.getElementById('green-response').style.display="flex";  
//             document.getElementById('blue-response').style.display="none";     
//             document.getElementById('response').style.display="none";   
//         } 
//         else {
//             if (document.getElementById('central').style.backgroundColor === document.getElementById('blue').style.backgroundColor && X>7) {
//                 document.getElementById('blue-response').style.display="flex";
//                 document.getElementById('green-response').style.display="none";  
//                 document.getElementById('response').style.display="none";     
//             } 
//             else {
//                 if (X>Y) {
//                     document.getElementById('response').innerHTML="Para o sapo dar o salto o X tem de ser menor ou igual que Y!"
//                 } 
//                 else {
//                     let solution = X+Y;   
//                     solution=parseInt(solution/D);
                    
//                     document.getElementById("solution").innerHTML = solution;
//                     document.getElementById("gray2").style.display ="none";
//                     document.getElementById("colored2").style.display ="flex";   
//                     document.getElementById('green-response').style.display="none";
//                     document.getElementById('blue-response').style.display="none";    
//                     document.getElementById('response').style.display="none";           
//                 }     

//             }
        
//         }
 
//     }
    
// }




// function jump () {
   
//     let X = +document.getElementById('x').value;
//     let Y = +document.getElementById('y').value;
//     let D = +document.getElementById('d').value;  
  
//     if (X==0 || Y==0 || D==0) {
//         document.getElementById('response').innerHTML="Por favor preencha todos os campos com um número maior que 0";     
//     } else {
//         if (document.getElementById('central').dataset.currentColor === 'green' && X!=3) {
//             document.getElementById('x').value=3;
//             document.getElementById('response').innerHTML="Escolheu verde X tem de ser igual a 3.";
           
//         } 
//         else {
//             if (document.getElementById('central').dataset.currentColor === 'blue' && X>7) {
//                 document.getElementById('response').innerHTML="Escolheu azul X tem de ser igual ou inferior a 7.";
                  
//             } 
//             else {
//                 if (X>Y) {
//                     document.getElementById('response').innerHTML="Para o sapo dar o salto o X tem de ser menor ou igual que Y!"
//                 } 
//                 else {
//                     let solution = X+Y;   
//                     solution=parseInt(solution/D);
                    
//                     document.getElementById("solution").innerHTML = solution;
//                     document.getElementById("gray2").style.display ="none";
//                     document.getElementById("colored2").style.display ="flex"; 
                  
//                    response.style.display="none";           
//                 }     

//             }
        
//         }
 
//     }
    
// }

function jump() {
    var color = document.getElementById('central').dataset.currentColor.toLowerCase();
    var inputX = document.getElementById('x');
    var inputY = document.getElementById('y');
    var inputD = document.getElementById('d');
    var responseElem = document.getElementById('response');

    if(validateGame()) {         
        document.getElementById("solution").innerHTML = Math.round((+inputX.value + +inputY.value) / +inputD.value);       
        document.getElementById("gray2").style.display ="none";
      
        document.getElementById("colored2").style.display ="flex"; 
     
                    
        response.style.display="none";
    }
}

function validateGame() {
    var color = document.getElementById('central').dataset.currentColor.toLowerCase();
    var inputX = document.getElementById('x');
    var inputY = document.getElementById('y');
    var inputD = document.getElementById('d');
    var responseElem = document.getElementById('response');

    
    if(!+inputX.value || !+inputY.value || !+inputD.value) {
        responseElem.innerHTML="Por favor preencha todos os campos com um número maior que 0";
        return false;
    }

    if (color === 'green' && +inputX.value != 3) {
        inputX.value = 3;
        responseElem.innerHTML="Escolheu verde X tem de ser igual a 3.";
        return false;   
    }

    if (color === 'blue' && +inputX.value > 7) {
        responseElem.innerHTML="Escolheu azul: X tem de ser igual ou inferior a 7.";
        inputX.focus();
        return false;
    }

    if (+inputX.value > +inputY.value) {
        responseElem.innerHTML="Para o sapo dar o salto o X tem de ser menor ou igual que Y!"
        return false;
    } 

    return true;
}