let Codigo, RGB;
var Hex, Dec;
let Red, Green, Blue;

let salidaColor = document.getElementById('salidaColorCodigo');
let salidaColorRGB = document.getElementById('salidaColorRGB');

function selectorRGB(){

    Codigo = document.getElementById('input').value.toUpperCase();

    RGB = Codigo.split("");

    for (let i = 1; i <= 6; i++){

        if( (isNaN(RGB[i])) == false){
            RGB[i] = parseInt(RGB[i]);

            Hex = RGB[i];

            if(RGB[i] <10){
                Dec = "0" + RGB[i];
            }

            console.log(Hex + " Convertido a decimal es: " + Dec);
    
        }else { 
            Hex = RGB[i];

            switch (RGB[i]) {
    
                case 'A':
                    RGB[i] = 10;
                    break;
                case 'B':
                    RGB[i] = 11;
                    break;
                case 'C':
                    RGB[i] = 12;
                    break;
                case 'D':
                    RGB[i] = 13;
                    break;
                case 'E':
                    RGB[i] = 14;
                    break;
                case 'F':
                    RGB[i] = 15;
                    break;
            }

            console.log(Hex + " Convertido a decimal es: " + RGB[i]);

        }


    }

    Red = (RGB[1] * 16 + RGB[2]);
    Green = (RGB[3] * 16 + RGB[4]);
    Blue = (RGB[5] * 16 + RGB[6]);


    salidaColor.innerHTML = Codigo;
    salidaColorRGB.innerHTML = Red + ", " + Green + ", " + Blue;
}

let seleccionar = document.getElementById('aceptar');

seleccionar.addEventListener('click', selectorRGB);