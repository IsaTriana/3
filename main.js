nombres_array = [];

function submit()
{ var n1 = document.getElementById("nombre1").value;
var n2 = document.getElementById("nombre2").value;
var n3 = document.getElementById("nombre3").value;
var n4 = document.getElementById("nombre4").value;
}

nombres_array.push(n1);
nombres_array.push(n2);
nombres_array.push(n3);
nombres_array.push(n4);

document.getElementById("display-nombres").innerHTML = nombres_array;