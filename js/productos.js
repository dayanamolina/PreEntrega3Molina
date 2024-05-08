let carritoDeCompras = [];
const spanCarrito = document.getElementById('spanCarrito');

function mostrarAlerta() {
    const alerta = document.querySelector('.custom-alert');
    alerta.style.visibility = 'visible';
}

// Función para ocultar el alert
function ocultarAlerta() {
    const alerta = document.querySelector('.custom-alert');
    alerta.style.visibility = 'hidden';
}

const AgregarAlCarrito = (productoIndex) => {
    const arrayProductosStorage = JSON.parse(localStorage.getItem("arrayProductos"));
    const producto = arrayProductosStorage[productoIndex]
    console.log(producto);
    const carritoDeComprasJSON = JSON.parse(localStorage.getItem("carritoDeCompras"));
    if (carritoDeComprasJSON) {
        const carritoItem = carritoDeComprasJSON.find(item => item?.producto.title === producto.title);

        if (carritoItem) {
            carritoItem.cantidad++;
            carritoItem.total = carritoItem.cantidad * producto.price
        } else {
            carritoDeComprasJSON.push({
                producto: producto,
                cantidad: 1,
                total: producto.price
            });
        }
        console.log(carritoDeComprasJSON);
        localStorage.setItem('carritoDeCompras', JSON.stringify(carritoDeComprasJSON));
        mostrarAlerta()

        setTimeout(() => {
            ocultarAlerta()
        }, 3000);
    } else {
        const carritoItem = carritoDeCompras.find(item => item?.producto.title === producto.title);

        if (carritoItem) {
            console.log(producto.price);
            carritoItem.cantidad++;
            carritoItem.total = carritoItem.cantidad * producto.price
        } else {
            carritoDeCompras.push({
                producto: producto,
                cantidad: 1,
                total: producto.price
            });
        }
        console.log(carritoDeCompras);
        localStorage.setItem('carritoDeCompras', JSON.stringify(carritoDeCompras))
        mostrarAlerta()

        setTimeout(() => {
            ocultarAlerta()
        }, 3000);
    }




    if (spanCarrito) {
        const carritoDeCompras = JSON.parse(localStorage.getItem("carritoDeCompras"));
        const totalItems = carritoDeCompras.reduce((total, item) => total + item.cantidad, 0);
        spanCarrito.textContent = totalItems;
    }
};



document.addEventListener('DOMContentLoaded', async function () {
    let arrayProductos = [];

    try {
        const response = await fetch("https://fakestoreapi.com/products/category/women's clothing?limit=8");
        arrayProductos = await response.json();
        localStorage.setItem('arrayProductos', JSON.stringify(arrayProductos));
        console.log(arrayProductos);
    } catch (error) {
        console.error('Error fetching products:', error);
        return;
    }

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
        console.log(producto.image);

        //Se formatea el precio para que lo muestre con .
        const precioFormateado = producto.price.toLocaleString('es-ES');

        colDiv.innerHTML = `
        <div class="card">
            <img src="${producto.image}" height="300" class="card-img-top" alt="...">
            <div class="precio-overlay">
                $ ${precioFormateado}
            </div>
            <div class="card-body">
                <h5 class="card-title">${producto.title}</h5>
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
                                ${producto.description}
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

