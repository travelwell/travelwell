

class localizacion {

    constructor(callback) {
        if (navigator.geolocation) {

            // Obtenemos ubicacion

            navigator.geolocation.getCurrentPosition((position) => {
                this.latitude = position.coords.latitude;
                this.longitude = position.coords.longitude;

                callback();
            });

        } else {
            alert("tu navegador no soporta geolocalizcion")
        }

    }

}