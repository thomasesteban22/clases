var inmobiliaria =
    {
        direccion: "calle103F-26",
        horario: "8:00am - 6:00pm",
        telefonos: ["727542", "563 6418", "321 377 0000", "310 856 6765"],
        redessociales: [
               {
                   red: "facebook",
                   link: "www.facebook.com",
                   imagen: "http://www.reinmobiliariasas.com/sites/all/modules/socialmedia/icons/levelten/glossy/16x16/facebook.png"
               },
                {
                    red: "twiter",
                    link: "www.twiter.com",
                    imagen: "http://www.reinmobiliariasas.com/sites/all/modules/socialmedia/icons/levelten/glossy/16x16/twitter.png"
                },
                {
                    red: "google+",
                    link: "www.google+.com",
                    imagen: "http://www.reinmobiliariasas.com/sites/all/modules/socialmedia/icons/levelten/glossy/16x16/googleplus.png"
                },
                {
                    red: "flickr",
                    link: "www.flickr.com",
                    imagen: "http://www.reinmobiliariasas.com/sites/all/modules/socialmedia/icons/levelten/glossy/16x16/flickr.png"

                }
        ],
        propiedades: [{
            tipoDePropiedad: "Casa",
            fotos: "http://www.reinmobiliariasas.com/sites/default/files/styles/cardealer-car-browser-thumbnail/public/property-photos/IMG_1516.JPG?itok=-4n6UMeA",
            metrosCuadrados: "50.00",
            baños: "2",
            habitaciones: "3",
            garajes: "0",
            tipoDeInmueble: "Nuevo",
            precio: 2000000,
            sector: "Fontibon",
            direccion: "calle103f 26",
            propietario: { nombre: "Juan", numero: "9878909876" }
        },
        {
            tipoDePropiedad: "Apartamento",
            fotos: "http://www.reinmobiliariasas.com/sites/default/files/styles/cardealer-car-browser-thumbnail/public/property-photos/20170107_150747.jpg?itok=mybyQAOY",
            metrosCuadrados: "210.00",
            baños: "4",
            habitaciones: "5",
            garajes: "1",
            tipoDeInmueble: "Usado",
            precio: 450000000,
            sector: "Primavera Occidental",
            direccion: "Calle98 766",
            propietario: { nombre: "pepe", numero: "4567890" }
        },
        {
            tipoDePropiedad: "local",
            fotos: "http://www.reinmobiliariasas.com/sites/default/files/styles/cardealer-car-browser-thumbnail/public/property-photos/20160713_123641.jpg?itok=7QPrqQHo",
            metrosCuadrados: "90.00",
            baños: "1",
            habitaciones: "1",
            garajes: "0",
            tipoDeInmueble: "nuevo",
            precio: 3000000,
            sector: "Kennedy",
            direccion: "calle345 no626262",
            propietario: { nombre: "lucas", numero: "345678" }
        },
        {
            tipoDePropiedad: "oficina",
            fotos: "http://www.reinmobiliariasas.com/sites/default/files/styles/cardealer-car-page-full/public/property-photos/Foto0041.jpg?itok=sDWwcRGp",
            metrosCuadrados: "30.00",
            baños: "1",
            habitaciones: "2",
            garajes: "1",
            tipoDeInmueble: "usado",
            precio: 500000,
            sector: "Suba",
            direccion: "calle435 89",
            propietario: { nombre: "juan2", numero: "7890987" }
        }
        ],
        trabajamoscon: [{
            nombre: "mapfre",
            link: "www.mapfre.com",
            imagen: "http://www.reinmobiliariasas.com/sites/default/files/aseguradoras/mapfre_0.jpg"
        },
        {
            nombre: "afiansa",
            link: "www.mapfre.com",
            imagen: "http://www.reinmobiliariasas.com/sites/default/files/aseguradoras/afiansa.jpg"
        },
        {
            nombre: "el libertador",
            link: "www.mapfre.com",
            imagen: "http://www.reinmobiliariasas.com/sites/default/files/aseguradoras/el%20libertador.jpg"
        },
        {
            nombre: "metro cuadrado",
            link: "www.mapfre.com",
            imagen: "http://www.reinmobiliariasas.com/sites/default/files/aseguradoras/metrocuadrado.jpg"
        },
        {
            nombre: "protecsa",
            link: "www.mapfre.com",
            imagen: "http://www.reinmobiliariasas.com/sites/default/files/aseguradoras/protecsa.jpg"
        },
        ]
    }

var redessocialesElement = document.getElementById("encabezado");
redessocialesElement.innerHTML += "<li class='redes'> <a> <img src='" + inmobiliaria.redessociales[3].imagen + "'></a></li>";
redessocialesElement.innerHTML += "<li class='redes'> <a> <img src='" + inmobiliaria.redessociales[2].imagen + "'></a></li>";
redessocialesElement.innerHTML += "<li class='redes'> <a> <img src='" + inmobiliaria.redessociales[1].imagen + "'></a></li>";
redessocialesElement.innerHTML += "<li class='redes'> <a> <img src='" + inmobiliaria.redessociales[0].imagen + "'></a></li>";

redessocialesElement.innerHTML += "<li class='telefonos'id='telefonos'>Llamanos:<span>" + inmobiliaria.telefonos[0] + " " + inmobiliaria.telefonos[1] + " " + inmobiliaria.telefonos[2] + " " + inmobiliaria.telefonos[3] + "</span></li> ";

var propiedadesElement = document.getElementById("propiedades");

for (var i = 0; i < inmobiliaria.propiedades.length; i++) {
    propiedadesElement.innerHTML += "<div id='propiedad'> <img class='foto' src='" + inmobiliaria.propiedades[i].fotos + "'>"
    + "<h2>" + inmobiliaria.propiedades[i].sector + " " + inmobiliaria.propiedades[i].precio + "</h2>"
    + "<p>  Baños:" + inmobiliaria.propiedades[i].baños + "</p>"
    + "<p>  Habitaciones:" + inmobiliaria.propiedades[i].habitaciones + "</p>"
 
    + agregarGarajes(inmobiliaria)
 
    + "<p>  Tipo De Propiedad:" + inmobiliaria.propiedades[i].tipoDePropiedad + "</p>"
    + "<p>  Tipo De Inmueble:" + inmobiliaria.propiedades[i].tipoDeInmueble + "</p>"
    + "<p>  Metros Cuadrados:" + inmobiliaria.propiedades[i].metrosCuadrados + "</p>"
    + "<p>  Direccion:" + inmobiliaria.propiedades[i].direccion + "</p>"
    + "</div>";
}

function agregarGarajes(inm) {
    if (inm.propiedades[i].garajes > 0) {
        return "<p>  Garajes:" + inm.propiedades[i].garajes + "</p>";
    }
    else {
        return "";
    }
}