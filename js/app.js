 // carrito
 const misProductos = [
    { id: 1, nombre: "Bocata de vegetales", precio: 260, imagen: "imagenes/Bocatas.png" },
    { id: 2, nombre: "Calabaza rellena", precio: 260, imagen: "imagenes/calabazaRellena.png" },
    { id: 3, nombre: "Ensalada couscous", precio: 160, imagen: "imagenes/couscous.png" },
    { id: 4, nombre: "Croquetas de quinoa con ensalada", precio: 260, imagen: "imagenes/croquetasQuinoa" },
    { id: 5, nombre: "Pollo grillado", precio: 260, imagen: "imagenes/pollogrillado.jpg" },
    { id: 6, nombre: "Tarta espinaca", precio: 160, imagen: "imagenes/tartaEspinaca.png"},
    { id: 7, nombre: "Tarta zanahoria y puerro", precio: 160, imagen: "imagenes/tartaZana.png" },
    { id: 8, nombre: "Tarta capresse", precio: 160, imagen: "imagenes/tartacapresse.png" },
    { id: 9, nombre: "Tarta de pollo", precio: 160, imagen: "imagenes/tartapollo.png" },
    { id: 10, nombre: "Ensalada tibia de brócoli", precio: 160, imagen: "imagenes/tibiabrocoli.jpg" },
    { id: 11, nombre: "Alfajor de chocolate", precio: 120, imagen: "imagenes/alfajorChoco.jpg" },
    { id: 12, nombre: "Budin de naranja", precio: 120, imagen: "imagenes/budinNaranja.jpg" },
]

// indicador de cantidad

function crearProductos(misProductos) {
    let cantProductos = $('.titulo > h3')
    cantProductos.html(`(Tenés ${misProductos.length} productos disponibles)`)
}

crearProductos(misProductos)

// agregar productos

const agregarProductos = document.querySelectorAll('#boton')
agregarProductos.forEach((agregarProducto) => {
    agregarProducto.addEventListener('click', agregarAlClickear)
})

const confirmarCompra = document.querySelector('.confirmarCompra')
confirmarCompra.addEventListener('click', comprar)

const miCarrito = document.querySelector('#carrito')

function agregarAlClickear(event) {
    const button = event.target
    const item = button.closest('.item')

    const itemTitulo = item.querySelector('#titulo').textContent
    const itemPrecio = item.querySelector('#precio').textContent
    const itemImagen = item.querySelector('#imagen').src

    agregarAlCarrito(itemTitulo, itemPrecio, itemImagen)
}

function agregarAlCarrito(itemTitulo, itemPrecio, itemImagen) {

    const elementoCarrito = document.querySelectorAll('.tituloItem')

    for (let i = 0; i < elementoCarrito.length; i++) {
        if (elementoCarrito[i].innerText === itemTitulo) {
            let cantidadElemento = elementoCarrito[i].parentElement.parentElement.parentElement.querySelector('#cantidad')
            cantidadElemento.value++
                actualizarTotalCarrito()
            return
        }

    }

    const filaCarrito = document.createElement('div')

    const contenidoCarrito = `
    <div class="borrar">
    <ul class="carrito" class="list-group mb-3">
        <div class="articulo">
        <li class="list-group-item d-flex justify-content-between lh-condensed">
            <div class="col-sm-4">
                <h6 class="my-0 tituloItem">${itemTitulo}</h6>
                <div class="d-flex align-items-center h-100">
                    <figure>
                        <img src="${itemImagen}" alt="${itemTitulo}" width="50px" height="50px">
                    </figure>
                </div>
            </div>
            <div>
            <input class="col-sm-4" type="number" value="1" id="cantidad">
            <button class="btn btn-danger botonBorrar" type="button">X</button>
        </div>
        <span class="text-muted" id="precio">${itemPrecio}</span>
        </li>
        </div>
    </ul>
    </div>`

    filaCarrito.innerHTML = contenidoCarrito
    miCarrito.append(filaCarrito)

    filaCarrito.querySelector('.botonBorrar').addEventListener('click', borrarItem)

    filaCarrito.querySelector('#cantidad').addEventListener('change', cambiarItem)
    actualizarTotalCarrito()
}

// actualizar carrito

function actualizarTotalCarrito() {
    let total = 0

    const totalCarrito = document.querySelector('#total')

    const itemsCarrito = document.querySelectorAll('.articulo')

    itemsCarrito.forEach(articulo => {
        const precioItemCarrito = articulo.querySelector('#precio')
        const precioItem = Number(precioItemCarrito.textContent.replace('$', ''))
        const cantidadItem = articulo.querySelector('#cantidad')
        const cantidadItemCarrito = Number(cantidadItem.value)

        total = total + precioItem * cantidadItemCarrito
    })

    totalCarrito.innerHTML = `Total (UY): $${total}`
}

// borrar item carrito
function borrarItem(event) {
    const clickBoton = event.target
    clickBoton.closest('.borrar').remove()
    actualizarTotalCarrito()
}

// cambiar cantidad del producto 
function cambiarItem(event) {
    const tomar = event.target
    if (tomar.value <= 0) {
        tomar.value = 1
    }
    actualizarTotalCarrito()
}

// finalizar compra
function comprar() {
    $('.carrito').html('')
    actualizarTotalCarrito()
    console.log("Tarea Finalizada");
    swal({
        title: "Comida pronta!",
        text: "En breves se le avisará cuanto demorará el cadete",
        icon: "success",
        button: "OK!",
      });
}


// buscador

function mostrar() {
    alert("Ups! Pronto tendremos esta información disponible")
}
let buscar = $('#buscador').on('click', mostrar)