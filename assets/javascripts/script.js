import { propiedades_ventas, propiedades_alquiler } from './data/property.js'

const propiedades = (propiedades, containerId) => {
    const container = document.getElementById(containerId)
    container.className
    container.innerHTML = ''

    for (const propiedad of propiedades) {
    const card = document.createElement('div')
    card.className = 'col-md-4 mb-4'

    const smoking = propiedad.smoke
        ? `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`
        : `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`

    const pets = propiedad.pets
        ? `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>`
        : `<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>`

    const cardContent = `
    <div class="card">
        <img
            src="${propiedad.src}"
            class="card-img-top"
            alt="${propiedad.nombre}"
        />
    <div class="card-body">
        <h5 class="card-title">${propiedad.nombre}</h5>
        <p class="card-text">${propiedad.descripcion}</p>
        <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
        <p>
            <i class="fas fa-bed"></i> ${propiedad.habitaciones} Dormitorios |
            <i class="fas fa-bath"></i> ${propiedad.baños} Baños
        </p>
        <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
            ${smoking}
            ${pets}
        </div>
    </div>
    `

    card.innerHTML = cardContent
    container.className = "mb-5 d-flex gap-2"
    container.appendChild(card)
    }
};

propiedades(propiedades_ventas, 'venta')
propiedades(propiedades_alquiler, 'alquiler')
