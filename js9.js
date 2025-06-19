 var i = false;
function tog() {
    i = !i;   // позволяет переплючять переменые с тру фолс
    
    var d4 = document.getElementById("d4");

    if(i == false){
    d4.style.backgroundColor = "red"; 
    d4.innerHTML = "Сопротивление Выкл";  
    }
    else if (i == true){
    d4.style.backgroundColor = "green";
    d4.innerHTML = "Сопротивление Вкл"  
    }
 }
    function dndlist() {

    var d1 = document.getElementById("d1").value; 
    var d2 = document.getElementById("d2").value;

    var num1 = Number(d1);  
    var num2 = Number(d2);

    if(i == false) {
    var res = Math.ceil(num1 - num2);    // Math.ceil позволяет округлить да целого значения в большую сторону
    }
    else if (i == true) {
    var res = Math.ceil(num1 - num2 / 2);    
    }
    document.getElementById("d1").value = res;
    console.log(res);
}
function hp(){
    var d5 = document.getElementById("d5").value;
    var d1 = document.getElementById("d1").value; 

    var num1 = Number(d1);  
    var num2 = Number(d5);
    
    var res = num1 + num2;

    document.getElementById("d1").value = res;
}