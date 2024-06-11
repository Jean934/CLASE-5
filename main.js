// let h1 = document.getElementsByTagName('h1')[0]
// let nombre = prompt('ingresa su nombre')
// h1.innertext = 'hola'+ nombre
// let parrafo1 = document.getElementById('primero')
// let parrafo2 = document.getElementById('segundo')
// let parrafo3 = document.getElementById('tercero')

// parrafo1.style.color = "blue"
// parrafo2.style.color = "purple"
// parrafo3.style.color =  "pink"

const productos = [
    {
        id: 1,
        nombre: 'Camiseta',
        descripcion: 'Camiseta 100% algodón',
        precio: 19.99,
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_929353-MLA70134716150_062023-O.webp',
        categoria: 'Ropa'
    },
    {
        id: 2,
        nombre: 'Pantalones',
        descripcion: 'Pantalones de mezclilla',
        precio: 39.99,
        imagen: 'https://yazbek.com.mx/cdn/shop/products/D0651-pantalon-mezclilla-dama-100algodon-indigo-oscuro_1_bec4c11e-936a-4c74-93a1-dd5f75b470d0.jpg?v=1693283874',
        categoria: 'Ropa'
    },
    {
        id: 3,
        nombre: 'Zapatos',
        descripcion: 'Zapatos de cuero',
        precio: 59.99,
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmUAjpYKqM6snccV0B0o0-J--xHhaJKXi6Hg&s',
        categoria: 'Calzado'
    },
    {
        id: 4,
        nombre: 'Reloj',
        descripcion: 'Reloj de pulsera',
        precio: 99.99,
        imagen: 'https://i.blogs.es/c4a783/huawei-watch-4-pro/1366_2000.jpg',
        categoria: 'Accesorios'
    },
    {
        id: 5,
        nombre: 'Gafas de sol',
        descripcion: 'Gafas de sol polarizadas',
        precio: 49.99,
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ocXg9ReFwyQklGmMjoPF3vefHVFCYGQM-A&s',
        categoria: 'Accesorios'
    },
    {
        id: 6,
        nombre: 'Bolso',
        descripcion: 'Bolso de cuero',
        precio: 79.99,
        imagen: 'https://acdn.mitiendanube.com/stores/340/054/products/bolso-11-7aa285423f7fc5bffc16826849250519-640-0.jpg',
        categoria: 'Accesorios'
    },
    {
        id: 7,
        nombre: 'Auriculares',
        descripcion: 'Auriculares inalámbricos',
        precio: 29.99,
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0apYWJZ0OkyJfBSCMyLk9Qv45P-59E8DTqg&s',
        categoria: 'Electrónica'
    },
    {
        id: 8,
        nombre: 'Smartphone',
        descripcion: 'Teléfono inteligente de última generación',
        precio: 699.99,
        imagen: 'https://img.global.news.samsung.com/cl/wp-content/uploads/2023/05/dl5_Galaxy-A54-5G_Awesome-Graphite_Front-e1683749755408.jpg',
        categoria: 'Electrónica'
    }
];

let contenedordeproductos = document.querySelector('.productos')
let carrito = document.getElementById('carrito')
for (const product of productos) {
    let div = document.createElement("div")
    div.className = "product"
    div.innerHTML = `<img src="${product.imagen}"
        alt="producto 1">
        <h3> ${product.nombre}</h3>
        <p>${product.descripcion}</p>
        <div class="price">$${product.precio}</div>
        <button id="${product.id}"> "Agregar al carrito</button>`

    contenedordeproductos.appendChild(div)

    let btn = document.getElementById(`${product.id}`)

    btn.addEventListener('click', () => {
        agregarcarrito(btn.id)
    })
}



function agregarcarrito(id) {


    for (const product of productos) {
        if (product.id == id) {

            let div = document.createElement("div")
            div.className = "product"
            div.innerHTML = `
                <h3> ${product.nombre}</h3>
                <div class="price">$${product.precio}</div>
                <button onclick="eliminar()" id="${product.id}">X</button>`
            carrito.appendChild(div)

        }

    }
}
function eliminar(){  
    event.target.parentElement.remove()
}