
function mostrarAlertaArtAgregado() {
    const alerta = document.getElementById('alertAgregar');
    alerta.style.visibility = 'visible';
}


function ocultarAlertaArtAgregado() {
    const alerta = document.getElementById('alertAgregar');
    alerta.style.visibility = 'hidden';
}

function mostrarAlertaArtQuitado() {
    const alerta = document.getElementById('alertQuitar');
    alerta.style.visibility = 'visible';
}


function ocultarAlertaArtQuitado() {
    const alerta = document.getElementById('alertQuitar');
    alerta.style.visibility = 'hidden';
}


const CrearCarrito = (carrito) => {
    const cardsContainer = document.getElementById("CarritoComprasCards");
    cardsContainer.innerHTML = '';
    if (carrito) {
        carrito.forEach((item, index) => {
            const colDiv = document.createElement("div");
            colDiv.classList.add("col");
            console.log(item);
            //Se formatea el precio para que lo muestre con .
            const precioFormateado = item.total.toLocaleString('es-ES');

            colDiv.innerHTML = `
            <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                <img src="${item.producto.image}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${item.producto.title}</h5>
                    <p class="card-text"><strong>Cantidad:</strong><div class="d-grid gap-2 d-md-block">
                    <button class="btn btn-primary custom-btn" type="button" onclick="AumentarCantidad(${index})">+</button>
                        <span id="spanCantidadId${index}" class="custom-span">${item.cantidad}</span>
                    <button class="btn btn-primary custom-btn" type="button" onclick="DisminuirCantidad(${index})">-</button>
                  </div></p>
                    <p id="totalId${index}" class="card-text"><strong>Total:</strong> $${precioFormateado}</p>
                    
                </div>
                </div>
            </div>
            </div>
        `;

            cardsContainer.appendChild(colDiv);
        });
    }

}

const CrearCardInfo = (carrito) => {

    const existeCardInfo = document.getElementById("cardInfoId");
    if (existeCardInfo) {
        existeCardInfo.remove();
    }
    if (carrito) {
        const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);
        const totalAPagar = carrito.reduce((total, item) => total + item.total, 0);
        const precioFormateado = totalAPagar.toLocaleString('es-ES');
        const cardInfoContainer = document.createElement("div");

        cardInfoContainer.id = `cardInfoId`;
        cardInfoContainer.classList.add("col-md-6", "mt-2");

        const card = document.createElement("div");
        card.classList.add("card");
        const ul = document.createElement("ul");
        ul.classList.add("list-group", "list-group-flush");

        const li1 = document.createElement("li");
        li1.classList.add("list-group-item", "tituloInfo");
        li1.textContent = `RESUMEN DE COMPRA`;
        ul.appendChild(li1);

        const li2 = document.createElement("li");
        li2.classList.add("list-group-item", "cantidadInfo");
        if (totalItems === 0) {
            li2.classList.add("text-danger");
        }
        li2.innerHTML = `<b class="text-black">Total productos: </b>${totalItems === 0 ? 'El carrito esta vacio' : totalItems}`;
        ul.appendChild(li2);

        const cardFooter = document.createElement("div");
        cardFooter.classList.add("card-footer", "cantidadInfo");
        cardFooter.innerHTML = `<b>Total a pagar: $${precioFormateado}</b>`;

        card.appendChild(ul);
        card.appendChild(cardFooter);

        cardInfoContainer.appendChild(card);

        const cardsContainer = document.getElementById("containerId");
        cardsContainer.appendChild(cardInfoContainer);
    }

}



const AumentarCantidad = (itemIndex) => {
    const carritoDeCompras = JSON.parse(localStorage.getItem("carritoDeCompras"));
    carritoDeCompras[itemIndex].cantidad++
    carritoDeCompras[itemIndex].total = carritoDeCompras[itemIndex].cantidad * carritoDeCompras[itemIndex].producto.price
    console.log(carritoDeCompras);
    console.log(carritoDeCompras[itemIndex].total);


    localStorage.setItem('carritoDeCompras', JSON.stringify(carritoDeCompras))

    const spanCantidad = document.getElementById(`spanCantidadId${itemIndex}`);
    if (spanCantidad) {
        spanCantidad.textContent = carritoDeCompras[itemIndex].cantidad;
    }

    const parrafoTotal = document.getElementById(`totalId${itemIndex}`);
    console.log(parrafoTotal);
    if (parrafoTotal) {
        console.log(carritoDeCompras[itemIndex].total);
        const precioFormateado = carritoDeCompras[itemIndex].total.toLocaleString('es-ES');
        parrafoTotal.innerHTML = `<strong>Total:</strong> $${precioFormateado}`
    }

    if (spanCarrito) {
        const carritoDeCompras = JSON.parse(localStorage.getItem("carritoDeCompras"));
        const totalItems = carritoDeCompras.reduce((total, item) => total + item.cantidad, 0);
        spanCarrito.textContent = totalItems;
        CrearCardInfo(carritoDeCompras);
    }
    mostrarAlertaArtAgregado()

    setTimeout(() => {
        ocultarAlertaArtAgregado()
    }, 3000);

};

const DisminuirCantidad = (itemIndex) => {
    let carritoDeCompras = JSON.parse(localStorage.getItem("carritoDeCompras"));
    carritoDeCompras[itemIndex].cantidad--
    carritoDeCompras[itemIndex].total = carritoDeCompras[itemIndex].cantidad * carritoDeCompras[itemIndex].producto.price;
    console.log(carritoDeCompras);


    localStorage.setItem('carritoDeCompras', JSON.stringify(carritoDeCompras))

    const spanCantidad = document.getElementById(`spanCantidadId${itemIndex}`);
    if (spanCantidad) {
        spanCantidad.textContent = carritoDeCompras[itemIndex].cantidad;
    }

    const parrafoTotal = document.getElementById(`totalId${itemIndex}`);
    console.log(parrafoTotal);
    if (parrafoTotal) {
        console.log(carritoDeCompras[itemIndex].total);
        const precioFormateado = carritoDeCompras[itemIndex].total.toLocaleString('es-ES');
        parrafoTotal.innerHTML = `<strong>Total:</strong> $${precioFormateado}`
    }

    if (spanCarrito) {
        const carritoDeCompras = JSON.parse(localStorage.getItem("carritoDeCompras"));
        const totalItems = carritoDeCompras.reduce((total, item) => total + item.cantidad, 0);
        spanCarrito.textContent = totalItems;
        CrearCardInfo(carritoDeCompras);
    }

    if (carritoDeCompras[itemIndex].total === 0) {
        carritoDeCompras = carritoDeCompras.filter(x => x.producto.title !== carritoDeCompras[itemIndex].producto.title)
        localStorage.setItem('carritoDeCompras', JSON.stringify(carritoDeCompras))
        CrearCarrito(carritoDeCompras);
    }

    mostrarAlertaArtQuitado()

    setTimeout(() => {
        ocultarAlertaArtQuitado()
    }, 3000);
};



document.addEventListener('DOMContentLoaded', function () {
    const carritoDeCompras = JSON.parse(localStorage.getItem("carritoDeCompras"));
    console.log(carritoDeCompras);

    const spanCarrito = document.getElementById('spanCarrito');

    if (carritoDeCompras && spanCarrito) {
        const totalItems = carritoDeCompras.reduce((total, item) => total + item.cantidad, 0);
        spanCarrito.textContent = totalItems;
    }
    CrearCarrito(carritoDeCompras);

    CrearCardInfo(carritoDeCompras);
});