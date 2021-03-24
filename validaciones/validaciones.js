function validar() {
var expresion, materialFormContactNameEx, materialFormContactChildrenEx, inputPlaceholderEx, materialFormContactColegio;

materialFormContactNameEx= document.getElementById("materialFormContactNameEx").value;
materialFormContactChildrenEx= document.getElementById("materialFormContactChildrenEx").value;
inputPlaceholderEx= document.getElementById("inputPlaceholderEx").value;
materialFormContactColegio= document.getElementById("materialFormContactColegio").value;

expresion = /\w+@\w+\.+[a-z]/;

if (materialFormContactNameEx == "" || materialFormContactChildrenEx == ""|| inputPlaceholderEx == ""|| materialFormContactColegio == "") {
	alert("Todos los campos son obligatorios");
	return false;
}
else if(materialFormContactNameEx.lemgth >30){
	alert("El nombre es muy largo");
	return false;
}
else if(materialFormContactChildrenEx.lemgth >10){
	alert("Datos incorrectos");
	return false;
}
else if(isNaN(materialFormContactChildrenEx)){
	alert("El cantidad de hijos deben ser numeros");
	return false;
}
else if(inputPlaceholderEx.lemgth >30){
	alert("El nombre es muy largo");
	return false;
}
else if(isNaN(inputPlaceholderEx)){
	alert("El telefono de contacto deben ser numeros");
	return false;
}
else if(materialFormContactColegio.lemgth >100){
	alert("El correo es muy largo");
	return false;
}
else if(!expresion.test(materialFormContactColegio)){
	alert("El correo no es valido");
	return false;
}

if(!document.getElementById('radioWithGap1').checked && !document.getElementById('radioWithGap2').checked && !document.getElementById('radioWithGap3').checked &&
!document.getElementById('radioWithGap4').checked && !document.getElementById('radioWithGap5').checked){

alert("No se selecciono ninguna cantidad de incentivo");
}

if(!document.getElementById('radioWithGap6').checked && !document.getElementById('radioWithGap7').checked && !document.getElementById('radioWithGap8').checked &&
!document.getElementById('radioWithGap9').checked && !document.getElementById('radioWithGap10').checked){

alert("Por favor seleccione una opcion de comunicacion");
}
}
