function calculate(){

    var heigh=document.getElementById("alt1").value
    var weight=document.getElementById("peso1").value
    var len = heigh.length;
    var valorFormatado = heigh.substring(0, len - 2) + "." + heigh.substring(len - 2);


    var imc = weight / valorFormatado ** 2;
    var im2 = imc.toFixed(2)


    if(imc<18.5){
        window.alert("Você está magro \n" + "IMC = " + im2)
    }else if(imc<24.9){
        window.alert("Peso normal \n" + "IMC = " + im2)
    }else if(imc<29.9){
        window.alert("Sobrepeso \n" + "IMC = " + im2)
    }else if(imc<39.9){
        window.alert("Obesidade Tipo I \n" + "IMC = " + im2)
    }else if(imc>39.9){
        window.alert("Obesidade Tipo II \n" + "IMC = " + im2)
    }


}