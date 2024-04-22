//Evento que se ejecuta cuando se carga el DOM
let carritoDeCompras = [];
const spanCarrito = document.getElementById('spanCarrito');

const AgregarAlCarrito = (productoIndex) => {
    const producto = arrayProductos[productoIndex]
    console.log(producto);
    const carritoDeComprasJSON = JSON.parse(localStorage.getItem("carritoDeCompras"));
    if (carritoDeComprasJSON) {
        const carritoItem = carritoDeComprasJSON.find(item => item?.producto.nombre === producto.nombre);

        if (carritoItem) {
            carritoItem.cantidad++;
            carritoItem.total = carritoItem.cantidad * producto.precio
        } else {
            carritoDeComprasJSON.push({
                producto: producto,
                cantidad: 1,
                total: producto.precio
            });
        }

        // carritoDeCompras.push(producto)
        console.log(carritoDeComprasJSON);
        localStorage.setItem('carritoDeCompras', JSON.stringify(carritoDeComprasJSON))
    } else {
        const carritoItem = carritoDeCompras.find(item => item?.producto.nombre === producto.nombre);

        if (carritoItem) {
            carritoItem.cantidad++;
            carritoItem.total = carritoItem.cantidad * producto.precio
        } else {
            carritoDeCompras.push({
                producto: producto,
                cantidad: 1,
                total: producto.precio
            });
        }

        // carritoDeCompras.push(producto)
        console.log(carritoDeCompras);
        localStorage.setItem('carritoDeCompras', JSON.stringify(carritoDeCompras))
    }




    if (spanCarrito) {
        const carritoDeCompras = JSON.parse(localStorage.getItem("carritoDeCompras"));
        const totalItems = carritoDeCompras.reduce((total, item) => total + item.cantidad, 0);
        spanCarrito.textContent = totalItems;
    }
};

document.addEventListener('DOMContentLoaded', function () {
    const carrito = JSON.parse(localStorage.getItem("carritoDeCompras"));

    if (carrito && spanCarrito) {
        const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);
        spanCarrito.textContent = totalItems;
    }



    const cardsContainer = document.getElementById("cardsZapatillas");
    console.log(arrayProductos);

    arrayProductos.forEach((producto, index) => {
        const colDiv = document.createElement("div");
        colDiv.classList.add("col");

        //Se formatea el precio para que lo muestre con .
        const precioFormateado = producto.precio.toLocaleString('es-ES');

        colDiv.innerHTML = `
        <div class="card">
            <img src="${producto.urlImagen}" height="300" class="card-img-top" alt="...">
            <div class="precio-overlay">
                $ ${precioFormateado}
            </div>
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <div class="accordion mt-3 mb-4" id="accordionExample1">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}"
                                style="background-color: transparent; color: #000;">
                                Descripción
                            </button>
                        </h2>
                        <div id="collapse${index}" class="accordion-collapse collapse"
                            data-bs-parent="#accordionExample1" style="background-color: #fff;">
                            <div class="accordion-body">
                                ${producto.descripcion}
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" class="btn btn-primary" onclick="AgregarAlCarrito(${index})">Agregar al carrito</button>
            </div>
        </div>
    `;

        cardsContainer.appendChild(colDiv);
    });



});

