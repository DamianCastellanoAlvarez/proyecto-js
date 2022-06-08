const btn = document.querySelector('#leer')

btn.addEventListener('click', () => {

    Swal.fire({
        title: 'BIENVENIDO!',
        icon: 'info',
        html: '<P class="pswal">1) En esta pagina podras ver cuales son las peliculas mas populares en este momento <p class="paren">(esta lista se actualiza constantemente)</p> 2) Tenes la opcion de cambiar el color del fondo a gusto con el boton "cambiar fondo".</P>',
        confirmButtonText: '<p class="psalir">Salir</p>',
    })
})


