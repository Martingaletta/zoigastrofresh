

// consultas usuarios y array //

class Consulta {
    constructor(nombre, apellido, telefono, email, comentarios) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.email = email;
        this.comentarios = comentarios;
    }
}

const consultas = []

// mostrar datos consulta //

function mostrarDatos() {

    const nombre = $('#nombre').val()
    const apellido = $('#apellido').val()
    const telefono = $('#telefono').val()
    const email = $('#email').val()
    const comentarios = $('#comentarios').val()

    let consulta = new Consulta(nombre, apellido, telefono, email, comentarios)

    localStorage.setItem("consulta", JSON.stringify(consulta))

    imprimir()

}

//refrescar localstorage en click al mensaje
document.getElementById("borrarMensaje").addEventListener("click", emptyLocalStorage);

if (localStorage.getItem("consulta") != null) {
    imprimir()


} else {
    console.log("Prueba")
}

function imprimir() {
    let dato = JSON.parse(localStorage.getItem("consulta"))

    let parrafo = $('<p id="mostrarTexto"></p>').text(`Hola, tu nombre es: ${dato.nombre} ${dato.apellido}, tu telefono es ${dato.telefono} y tu correo es: ${dato.email}, además agregaste estos comentarios: ${dato.comentarios}.`)
    $('p').attr('id', 'mostrarTexto')
    $('body').append(parrafo)
}

function vaciarLocalStorage () {
    localStorage.removeItem('consulta');
    location.reload();

}

let botonEnviar = $('#btnEnviar').on('click', mostrarDatos)

//buscador //

function mostrar() {
    alert("Ups!")
}
let buscar = $('#buscador').on('click', mostrar)