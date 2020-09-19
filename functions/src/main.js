function initMap() {
    const ubicacion = new localizacion(() => {


        const MyLatLgn = { lat: ubicacion.latitude, lng: ubicacion.longitude }

        const site1 = { lat: 1.684733, lng: -75.318889 } // Cascada anayacito
        const site2 = { lat: 3.089968, lng: -74.854674 } // Parque Cordillera de Los Picachos 3.089968, -74.854674
        const site3 = { lat: 1.623153, lng: -75.618862 } // Petroglifos el encanto  1.623153, -75.618862
        const site4 = { lat: 1.489414, lng: -75.405253 } // Reserva Natural Y Ecoturistica Las Dalias 1.489414, -75.405253
        const site5 = { lat: 1.510482, lng: -75.736800 } // Reserva Natural Ecoturística El Danubio 1.510482, -75.736800
        const site6 = { lat: 1.364503, lng: -76.224905 } // Parque Nacional Cueva de los Guacharos 1.364503, -76.224905
        const site7 = { lat: 0.701656, lng: -75.254881 } // cañón de araracuara 0.701656, -75.254881
        const site8 = { lat: 1.552136, lng: -75.707780 } // Balneario Las Pailas 1.552136, -75.707780
        const site9 = { lat: 1.831246, lng: -75.667444 } // Santuario del Divino Niño 1.831246, -75.667444
        const site10 = { lat: 1.684733, lng: -75.318889 }

        var texto = '<h1> Usted se encuentra aquí </h1>' + '<p><p> '

        var texto1 = '<h1> Cascada anayacito </h1>' + '<p> Este hermoso paraiso es una cascada a las afueras del Doncello una increíble vista desde la parte superior desde el cual se aprecia lo verde del Caquetá los invitamos a visitar este sitio maravilloso y enamorarse del paisaje mientras aprecian las aves que habitan los alrededores del río.<p> ' +
            '<a class="boton_personalizado" href="prueba1.html">Click para mas info</a>'

        var texto2 = '<h1> Parque Cordillera de Los Picachos </h1>' + '<p> La Cordillera de los Picachos se declaró como Parque Nacional mediante el acuerdo 018 del 2 de mayo de 1977 del INDERENA, aprobado por resolución ejecutiva 157 del Ministerio de Agricultura 24 con el objeto de conservar la flora, la fauna, las bellezas escénicas naturales, los complejos geomorfológicos, manifestaciones históricas para fines científicos, educativos, recreativos y estéticos de la región del Pato – Guayabero.<p> ' +
            '<a class="boton_personalizado" href="prueba1.html">Click para mas info</a>'

        var texto3 = '<h1> Petroglifos el encanto </h1>' + '<p> Grabados en piedra en el sitio “El Encanto”, en la margen izquierda del río Hacha, a la altura del barrio Torasso, en Florencia. La piedra se localiza a 1.5 kilómetros del centro de Florencia, en el predio del Colegio Nacional La Salle, ubicado a 450 metros sobre el nivel del mar.<p> ' +
            '<a class="boton_personalizado" href="prueba1.html">Click para mas info</a>'

        var texto4 = '<h1> Reserva Natural Y Ecoturistica Las Dalias </h1>' + '<p> La reserva natural y ecoturística "Las Dalias" cuenta con aproximadamente 80 hectáreas con un área de conservación de alrededor del 80%. La reserva ofrece atractivos naturales como los arroyos "Agua Bonita" y "La Cajona" Es un lugar maravilloso para la aventura y el turismo, hay 5 cuevas naturales con una longitud media de 100 m, una cascada de aproximadamente 12 mts, un cañón natural formada por un arroyo llamado La Cajona de 4 km de longitud y la flora y fauna típicas de la Amazonía: guaras, boragas, armadillos, variedad de primates, ardillas, erizos, variedad de mariposas, insectos y aves, loros, tigrillos, animales domésticos Como el ganado, gallinas, frutas amazónicas como arazá, copoazu, cacao, maraco, sachainchi entre otros.<p> ' +
            '<a class="boton_personalizado" href="prueba1.html">Click para mas info</a>'

        var texto5 = '<h1> Reserva Natural Ecoturística El Danubio </h1>' + '<p> Está ubicada sobre la cordillera Oriental, en la Cuenca del Rio Bodoquero. Cuenta con tres senderos ecológicos que permite al turista disfrutar de un momento de placer con los abundantes y exóticos recursos de flora y fauna. La Lista de atractivos que se pueden experimentar en la reserva es bastante larga, Los turistas que quieran practicar Senderismo lo pueden hacer en las cascadas Los helechos o Murui Muinane o enamorarse de la imponente cascada Mo Buinaima, que tiene una altura aproximada de 20 metros..<p> ' +
            '<a class="boton_personalizado" href="prueba1.html">Click para mas info</a>'

        var texto6 = '<h1> Parque Nacional Cueva de los Guacharos </h1>' + '<p> Cueva de los Guácharos fue la primera área de Colombia declarada Parque Nacional en 1960. Pertenece a la Reserva de la Biósfera Cinturón Andino declarada por la UNESCO en 1979. El Parque toma su nombre de los guácharos, aves que habitan cuevas oscuras y profundas en el día y salen de noche a buscar alimento, orientadas mediante un sistema de ecolocación similar al de los murciélagos.<p> ' +
            '<a class="boton_personalizado" href="prueba1.html">Click para mas info</a>'

        var texto7 = '<h1> cañón de araracuara </h1>' + '<p> En las selvas circundantes del Cañón de Araracuara es posible encontrar desde grandes felinos y anacondas de 10 metros de largo hasta especies como el mico león, el mono más pequeño del planeta, tan grande como el puño de una mano. La flora es la propia de la selva amazónica colombiana: grandes árboles, bejucos, hongos, líquenes.<p> ' +
            '<a class="boton_personalizado" href="prueba1.html">Click para mas info</a>'

        var texto8 = '<h1> Balneario Las Pailas </h1>' + '<p> Este maravilloso lugar se encuentra ubicado a doce kilómetros de Florencia, en la vía que conduce hacia el municipio de Morelia, balneario las pailas, donde los viajeros pueden disfrutar y explorar la quebrada el mochilero. Un el lugar perfecto para aquel que goza del ecoturismo, encajonado por formaciones rocosas, el agua adopta diversos tonos verdes de la vegetación que forra las piedras y de los árboles.<p> ' +
            '<a class="boton_personalizado" href="prueba1.html">Click para mas info</a>'

        var texto9 = '<h1> Santuario del Divino Niño </h1>' + '<p> El Santuario del Divino Niño Jesús es un Santuario colombiano de culto católico, consagrada a Jesucristo en su advocación del Divino Niño Jesús.<p> ' +
            '<a class="boton_personalizado" href="prueba1.html">Click para mas info</a>'

        var texto10 = '<h1> Cascada anayacito </h1>' + '<p> Este hermoso paraiso es una cascada a las afueras del Doncello una increíble vista desde la parte superior desde el cual se aprecia lo verde del Caquetá los invitamos a visitar este sitio maravilloso y enamorarse del paisaje mientras aprecian las aves que habitan los alrededores del río.<p> ' +
            '<a class="boton_personalizado" href="prueba1.html">Click para mas info</a>'

        const options = {
            center: MyLatLgn,

            zoom: 9
        }

        var map = document.getElementById('map');

        const mapa = new google.maps.Map(map, options);

        // sitio 0


        const marcador = new google.maps.Marker({

            icon: {

            },


            position: MyLatLgn,
            map: mapa,
            title: "Mi sitio"
        });


        var informacion = new google.maps.InfoWindow({


            content: texto
        });

        marcador.addListener('click', function () {

            informacion.open(mapa, marcador);
        })

        // sitio1

        const marcador1 = new google.maps.Marker({

            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 10, //tamaño
                strokeColor: '#f00', //color del borde
                strokeWeight: 5, //grosor del borde
                fillColor: '#00f', //color de relleno
                fillOpacity: 1// opacidad del relleno
            },
            position: site1,
            map: mapa,
            title: "mi segundo marcador"
        });
        var informacion1 = new google.maps.InfoWindow({
            content: texto1
        });
        marcador1.addListener('click', function () {
            informacion1.open(mapa, marcador1);
        })

        // sitio2

        const marcador2 = new google.maps.Marker({

            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 10, //tamaño
                strokeColor: '#f00', //color del borde
                strokeWeight: 5, //grosor del borde
                fillColor: '#00f', //color de relleno
                fillOpacity: 1// opacidad del relleno
            },
            position: site2,
            map: mapa,
            title: "mi segundo marcador"
        });
        var informacion2 = new google.maps.InfoWindow({
            content: texto2
        });
        marcador2.addListener('click', function () {
            informacion2.open(mapa, marcador2);
        })

        // sitio3

        const marcador3 = new google.maps.Marker({

            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 10, //tamaño
                strokeColor: '#f00', //color del borde
                strokeWeight: 5, //grosor del borde
                fillColor: '#00f', //color de relleno
                fillOpacity: 1// opacidad del relleno
            },
            position: site3,
            map: mapa,
            title: "mi segundo marcador"
        });
        var informacion3 = new google.maps.InfoWindow({
            content: texto3
        });
        marcador3.addListener('click', function () {
            informacion3.open(mapa, marcador3);
        })

        // sitio4

        const marcador4 = new google.maps.Marker({

            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 10, //tamaño
                strokeColor: '#f00', //color del borde
                strokeWeight: 5, //grosor del borde
                fillColor: '#00f', //color de relleno
                fillOpacity: 1// opacidad del relleno
            },
            position: site4,
            map: mapa,
            title: "mi segundo marcador"
        });
        var informacion4 = new google.maps.InfoWindow({
            content: texto4
        });
        marcador4.addListener('click', function () {
            informacion4.open(mapa, marcador4);
        })

        // sitio5

        const marcador5 = new google.maps.Marker({

            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 10, //tamaño
                strokeColor: '#f00', //color del borde
                strokeWeight: 5, //grosor del borde
                fillColor: '#00f', //color de relleno
                fillOpacity: 1// opacidad del relleno
            },
            position: site5,
            map: mapa,
            title: "mi segundo marcador"
        });
        var informacion5 = new google.maps.InfoWindow({
            content: texto5
        });
        marcador5.addListener('click', function () {
            informacion5.open(mapa, marcador5);
        })

        // sitio6

        const marcador6 = new google.maps.Marker({

            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 10, //tamaño
                strokeColor: '#f00', //color del borde
                strokeWeight: 5, //grosor del borde
                fillColor: '#00f', //color de relleno
                fillOpacity: 1// opacidad del relleno
            },
            position: site6,
            map: mapa,
            title: "mi segundo marcador"
        });
        var informacion6 = new google.maps.InfoWindow({
            content: texto6
        });
        marcador6.addListener('click', function () {
            informacion6.open(mapa, marcador6);
        })

        // sitio7

        const marcador7 = new google.maps.Marker({

            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 10, //tamaño
                strokeColor: '#f00', //color del borde
                strokeWeight: 5, //grosor del borde
                fillColor: '#00f', //color de relleno
                fillOpacity: 1// opacidad del relleno
            },
            position: site7,
            map: mapa,
            title: "mi segundo marcador"
        });
        var informacion7 = new google.maps.InfoWindow({
            content: texto7
        });
        marcador7.addListener('click', function () {
            informacion7.open(mapa, marcador7);
        })

        // sitio8

        const marcador8 = new google.maps.Marker({

            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 10, //tamaño
                strokeColor: '#f00', //color del borde
                strokeWeight: 5, //grosor del borde
                fillColor: '#00f', //color de relleno
                fillOpacity: 1// opacidad del relleno
            },
            position: site8,
            map: mapa,
            title: "mi segundo marcador"
        });
        var informacion8 = new google.maps.InfoWindow({
            content: texto8
        });
        marcador8.addListener('click', function () {
            informacion8.open(mapa, marcador8);
        })

        // sitio9

        const marcador9 = new google.maps.Marker({

            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 10, //tamaño
                strokeColor: '#f00', //color del borde
                strokeWeight: 5, //grosor del borde
                fillColor: '#00f', //color de relleno
                fillOpacity: 1// opacidad del relleno
            },
            position: site9,
            map: mapa,
            title: "mi segundo marcador"
        });
        var informacion9 = new google.maps.InfoWindow({
            content: texto9
        });
        marcador9.addListener('click', function () {
            informacion9.open(mapa, marcador9);
        })

        




    });

}
