
const reproductor = {
    reproducir : function(id) {
        console.log(`Reproduciendo Cancion con el ID: ${id}`)
    },
    pausar: function() {
        console.log('Pausando.....')
         
    },
    crearPlaylist: function(nombre) {
        console.log(`creando la playlist: ${nombre}`)
    },
    reproducirPlaylist: function(nombre) {
        console.log(`reproduciendo la Playlist: ${nombre}`)
    }

}

reproductor.borrarCancion = function(id) {
    console.log(`Eliminando Cancion: ${id}`)
}


reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist('Sinfonia de Piano');
reproductor.reproducirPlaylist('Morat');
