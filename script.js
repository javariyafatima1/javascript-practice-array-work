let number   = [ (prompt("enter the value")),(prompt("enter the value")),(prompt("enter the value"))]
let user     = prompt("user multiple number","enter number")
let table    = document.getElementById('table')


number.map (function(number){

let tr = document.createElement ('tr');
let td = document.createElement ('td');
let text1 = document.createTextNode (number* user);
let td2 = document.createElement ('td')
let text2  = document.createTextNode ("The answer of Number" + user);


td
td.appendChild  (text2);
td2.appendChild  (text1);
tr. appendChild (td);
tr. appendChild (td2);
table.appendChild (tr);




}



)