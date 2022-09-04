"use strict";

//ESCUCHADOR DE EVENTOS

//Sin Jquery

//Con Jquery
$('.volver').click(function(){
    $('.homejs').html("Se cambio con Jquery");
});





console.log("hola");

alert("hola")
window.addEventListener('load', function(){
    var fecha = new Date();
    var seconds = fecha.getSeconds();
    var hour = fecha.getHours(); 
    var minute = fecha.getMinutes(); 
    var tiempo = this.setInterval(function(){
        console.log("Es esto" + hour +":"+ minute + ":"+ seconds ) ;
    }, 1000);

})


//Fechas for what? I don't know

var fecha = new Date();
var hora = fecha.getHours().toString();
console.log(hora);


if(typeof (Storage)){

    console.log("disponible");
}else{
    console.log("no esta");
}

localStorage.setItem('clave', 'valor');

//Como descargar jquery: 

$(document).ready(function(){
    $('#contacjs').html("Hola hehe");

    $('#contacjs').hover(function(){
             $('#contacjs').html("SACA ");
             $('#contacto').show(500);
    },function(){
        $('#contacjs').html("adios");
        $('#contacto').hide(500);
    })


    $('#aboutjs').click(function(){
        $('#texto').slideToggle(1000, 'swing',function(){
            console.log("Hola gabriel");
        });
    });

});




