
function operar()
{
    var pesot = document.getElementById("peso1")
    var num1 = parseFloat(document.getElementById("EJE1").value)
    var num2 = parseFloat(document.getElementById("EJE2").value)
    var num3 = parseFloat(document.getElementById("EJE3").value)
    var result = num1 + num2 + num3;
    peso1.value = result;

    var pesott = document.getElementById("peso2")
    var num4 = parseFloat(document.getElementById("EJE4").value)
    var num5 = parseFloat(document.getElementById("EJE5").value)
    var num6 = parseFloat(document.getElementById("EJE6").value)
    var resultado = num4 + num5 + num6;
    peso2.value = resultado;

    var PESONETO = document.getElementById("pesoneto")
    var resultadototal = (num1 + num2 + num3) - (num4 + num5 + num6);
    pesoneto.value = resultadototal;
}
function bimprimir()
{
    var im = document.getElementById(boton)

    var tiempo = document.getElementById("hora")
    var d = new Date();
    var dd = d.getHours();
    var ddd = d.getMinutes();

    if (ddd < 10)
    {
        ddd = "0" + d.getMinutes();
    }

    hora.value = dd + ":" + ddd;

    var Fechaa = document.getElementById("fechaa")
    var aaaaa = new Date();
    var aaaaaa = aaaaa.getDate();
    var aaaaaaa = aaaaa.getMonth() + 1;
    var aaaaaaaa = aaaaa.getFullYear();
    fechaa.value = aaaaaa + "/" + aaaaaaa + "/" + aaaaaaaa; 

    document.getElementById("boton").style.display="none";
}
function reiniciar()
{
    var numeroderecibo = parseInt(document.getElementById("num").value)
    var recibo = numeroderecibo + 1;
    num.value = recibo;

    var tiempoo = document.getElementById("horaa")
    var dddd = new Date();
    var ddddd = dddd.getHours();
    var dddddd = dddd.getMinutes();

    if (dddddd < 10)
    {
        dddddd = "0" + dddd.getMinutes();
    }

    horaa.value = ddddd + ":" + dddddd; 
    
    var Fecha = document.getElementById("fecha")
    var a = new Date();
    var aa = a.getDate();
    var aaa = a.getMonth() + 1;
    var aaaa = a.getFullYear();
    fecha.value = aa + "/" + aaa + "/" + aaaa; 

    var R = document.getElementById("placa")
    placa.value = "";

    var R = document.getElementById("peso1")
    peso1.value = "";
    var R = document.getElementById("EJE1")
    EJE1.value = "0";
    var R = document.getElementById("EJE2")
    EJE2.value = "0";
    var R = document.getElementById("EJE3")
    EJE3.value = "0";

    var R = document.getElementById("peso2")
    peso2.value = "";
    var R = document.getElementById("EJE4")
    EJE4.value = "0";
    var R = document.getElementById("EJE5")
    EJE5.value = "0";
    var R = document.getElementById("EJE6")
    EJE6.value = "0";

    var R = document.getElementById("pesoneto")
    pesoneto.value = "";

    var R = document.getElementById("ob")
    ob.value = "";

    var R = document.getElementById("fechaa")
    fechaa.value = "";

    var R = document.getElementById("hora")
    hora.value = "";

    document.getElementById("boton").style.display="block";
}
