function validar(){
	var u, c;
	u=document.getElementById("usuario").value;
	c=document.getElementById("pass").value;
	if(u== "Hannia Marlene" && c=="0024"){
		alert("Usuario y contraseña validos, Bienvenida:)");

	}
	else{
		alert("Datos Incorrectos :(");
	}
}