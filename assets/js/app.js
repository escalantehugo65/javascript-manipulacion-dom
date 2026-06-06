
const personajes = [
  {
    id: 1,
    nombre: "A-Bomb",
    imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/1-a-bomb.jpg",
  },
  {
    id: 2,
    nombre: "Abe Sapien",
    imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/2-abe-sapien.jpg",
  },
  {
    id: 3,
    nombre: "Abin Sur",
    imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/3-abin-sur.jpg",
  },
  {
    id: 4,
    nombre: "Abomination",
    imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/4-abomination.jpg",
  },
  {
    id: 5,
    nombre: "Abraxas",
    imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/5-abraxas.jpg",
  },
];

const contenedorCards = document.querySelector('#contenedor-cards');
const formulario = document.querySelector('#form-personaje'); // 👈 Cambiado de #formulario-personaje a #form-personaje
const inputNombre = document.querySelector('#nombre');         // 👈 Cambiado de #input-nombre a #nombre
const inputImagen = document.querySelector('#imagen');         // 👈 Cambiado de #input-imagen a #imagen


function renderizarCatalogo(listaPersonajes) {
    contenedorCards.innerHTML = '';
    
    listaPersonajes.forEach(personaje => {
        const { id, nombre, imagen } = personaje;
        
        const cardHtml = `
            <div class="col">
                <div class="card h-100 shadow-sm">
                    <img src="${imagen}" class="card-img-top" alt="${nombre}" style="height: 250px; object-fit: cover;">
                    <div class="card-body d-flex flex-column justify-content-between">
                        <h5 class="card-title text-center">${nombre}</h5>
                        <button class="btn btn-primary btn-sm w-100 mb-2 btn-detalles" data-id="${id}">
                            Ver Detalles
                        </button>                      
                        <button class="btn btn-danger btn-sm w-100 btn-eliminar" onclick="eliminarPersonaje(${id})">
                            Eliminar
                        </button>
                    </div>
                </div>
            </div>
        `;
        contenedorCards.insertAdjacentHTML('beforeend', cardHtml);
    });
}

function eliminarPersonaje(idSeleccionado) {
    const indice = personajes.findIndex(p => p.id === idSeleccionado);
    
    if (indice !== -1) {
        personajes.splice(indice, 1);
        renderizarCatalogo(personajes);
    }
}

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault(); 
    
    let urlImagen = inputImagen.value.trim();
    
    if (urlImagen === "") {
        urlImagen = "https://media.istockphoto.com/id/1147544807/es/vector/no-imagen-en-miniatura-gr%C3%A3%C2%A1fico-vectorial.jpg?s=1024x1024&w=is&k=20&c=jMNMETHeS4WCgUd9WCoR2gcKdDOUAOFoTROlutZRWNLE=";
    }
    
    const nuevoPersonaje = {
        id: Date.now(), 
        nombre: inputNombre.value.trim(),
        imagen: urlImagen
    };
    
    personajes.push(nuevoPersonaje);
    renderizarCatalogo(personajes);
    formulario.reset();
});


document.addEventListener('DOMContentLoaded', () => {
    renderizarCatalogo(personajes); 
});