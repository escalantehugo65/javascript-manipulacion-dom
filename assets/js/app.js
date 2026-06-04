const contenedorCards=document.querySelector('#contenedor-cards')


const personajes = [
{ id: 1, nombre: "A-Bomb", imagen:
"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/1-a-bomb.jpg" },
{ id: 2, nombre: "Abe Sapien", imagen:
"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/2-abe-sapien.jpg" },
{ id: 3, nombre: "Abin Sur", imagen:
"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/3-abin-sur.jpg" },
{ id: 4, nombre: "Abomination", imagen:
"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/4-abomination.jpg" },
{ id: 5, nombre: "Abraxas", imagen:
"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/5-abraxas.jpg" },
];

function renderizarCatalogo(listaPersonajes){
    contenedorCards.innerHTML='';
    listaPersonajes.forEach(personaje => {
        const{id, nombre, imagen}=personaje;
        const cardHtml=`<div class="col">
                <div class="card h-100 shadow-sm">
                    <img src="${imagen}" class="card-img-top" alt="${nombre}" style="height: 250px; object-fit: cover;">
                    <div class="card-body d-flex flex-column justify-content-between">
                        <h5 class="card-title text-center">${nombre}</h5>
                        <button class="btn btn-primary btn-sm w-100 mb-2 btn-detalles" data-id="${id}">
                            Ver Detalles
                        </button>                      
                        <button class="btn btn-danger btn-sm w-100 btn-eliminar" data-id="${id}">
                            Eliminar
                        </button>
                    </div>
                </div>
            </div>
        `;
        contenedorCards.insertAdjacentHTML('beforeend', cardHtml)
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderizarCatalogo(personajes); 
});
