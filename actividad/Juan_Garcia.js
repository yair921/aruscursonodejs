//Filtrar libros por categorías.
// By Juan Camilo Garcia Hurtado
// función llamada categorias, que recibe como parámetro un texto.
function categorias(texto) {
    try {
        let libros = [
            { titulo: "La isla del tesoro", autor: "Robert Stevenson" },
            { titulo: "Las aventuras de Tom Sawyer", autor: "Mark Twain" },
            { titulo: "El faro del fin del mundo", autor: "Julio Verne" },
            { titulo: "Los tigres de Mompracem", autor: "Emilio Salgari" }

        ];

        let result = libros.filter(item => {
            return (item.titulo.includes(texto)
                || item.autor.includes(texto));
        });
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
categorias('Robert Stevenson');