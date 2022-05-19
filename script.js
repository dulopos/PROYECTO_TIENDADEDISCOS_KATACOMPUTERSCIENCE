class Disco {
    constructor(id, precio, nombre, año) { 
        this.id = id
        this.precio = precio
        this.nombre = nombre
        this.año = año
    }
}

arraydiscos = []

function buscar_disco(e) {
    e.preventDefault()
    const busqueda = document.getElementById("busqueda")
    var lupita = busqueda.value
    if (arraydiscos.length == 0) {
        document.getElementById("resultado_busqueda").innerHTML = "NO HAY DISCOS" 
        return 
    } else {
        var temporal = "" 
        for (let i = 0; i < arraydiscos.length; i++) {
            const element = arraydiscos[i];
            if (element.nombre == lupita) {
                temporal = element.precio
                break

            }
            
        }
        if (temporal) {
            document.getElementById("resultado_busqueda").innerHTML = "EL PRECIO DE ESTE DISCO ES DE: " + temporal
        } else {
            document.getElementById("resultado_busqueda").innerHTML = "NO SE ENCONTRO EL DISCO QUE INGRESASTE, INTENTA CON OTRO NOMBRE."
        }
         
    }
}

//* AGREGUE OTRA FUNCION PARA REALIZAR LA ACCION DE RESGIRTAR UN DISCO
function registrar_disco(e) {
    e.preventDefault()
 
    const nombre = document.getElementById("nombre") 
    const precio = document.getElementById("precio")
    const año = document.getElementById("año")
    var disco = nombre.value
    var year = año.value
    var dinerito = precio.value
    var id_disco = arraydiscos.length
    const disco_nuevo = new Disco(id_disco, dinerito, disco, year)
    arraydiscos.push(disco_nuevo)

    var tablota = document.getElementById("tablota")
    var tabla = document.getElementById("tablita")
    var renglon = document.createElement("tr")
    var columnaid = document.createElement("td")
    var columnanombre = document.createElement("td")
    var columnaprecio = document.createElement("td")
    var columnaaño = document.createElement("td")
    columnaid.id = arraydiscos[arraydiscos.length -1].id.toString()
    var textoid = document.createTextNode(arraydiscos[arraydiscos.length - 1].id)
    columnaid.appendChild(textoid)
    var textonombre = document.createTextNode(arraydiscos[arraydiscos.length - 1].nombre)
    columnanombre.appendChild(textonombre)
    var textoprecio = document.createTextNode(arraydiscos[arraydiscos.length - 1].precio)
    columnaprecio.appendChild(textoprecio)
    var textoaño = document.createTextNode(arraydiscos[arraydiscos.length - 1].año)
    columnaaño.appendChild(textoaño)

    var boton_borrar = document.createElement("input") 
    boton_borrar.type = "submit"
    boton_borrar.value = "borrar"
    boton_borrar.onclick = function (e) {
        const r = document.getElementById(arraydiscos[arraydiscos.length -1].id.toString())
        var indice = parseInt(r.innerText) -1
        arraydiscos.splice(indice, 1, "vacio" )
        e.target.parentNode.remove()

    }

    renglon.appendChild(columnaid)
    renglon.appendChild(columnanombre)
    renglon.appendChild(columnaprecio)
    renglon.appendChild(columnaaño)
    renglon.appendChild(boton_borrar)
    
    tabla.appendChild(renglon)
    tablota.appendChild(tabla)
}