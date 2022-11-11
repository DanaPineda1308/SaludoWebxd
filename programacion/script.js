var btnGreet =  document. getElementById ("btnSaludo")
var txtName = document. getElementById ("txtNombre")
var txtGreet = document. getElementById ("txtSaludo")
var lista= [ 
    "Hello",
    "Bonjour",
    "Hallo",
    "Ciao",
    "Ola",
    "Namaste",
    "Aloha",
    "Konichiwa",
    "Merhaba",
    "Que mas"
]
function saludar (){
    if(txtName.value == "") {
        alert("Error, ingresa un nombre.") 
        txtGreet.innerHTML = ""
    }else{
        var nombre = txtName.value
        var numero = Math.floor (Math.random()*lista.length)
        var saludo = lista[numero]+","+ nombre 
        txtGreet.innerHTML = saludo
    }
    

    
}