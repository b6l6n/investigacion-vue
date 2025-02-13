const { isTemplateExpression } = require("typescript");

const { crearApp, ref } = Vue;
const app = {
    setup() {
        const pelis = ref([
            { titulo: "Pesadilla antes de navidad", año: 1993, genero: "musical, animacion" },
            { titulo: "El Mago de Oz", año: 1939, genero: "fantasia, musical" },
            { titulo: "Halloween", año: 1978, genero: "Slasher, Terror" },
            { titulo: "La Novia Cadaver", año: 2005, genero: "musical, animacion" },
            { titulo: "Mi Vecino Totoro", año: 1988, genero: "Animacion, Fantasia" },
            { titulo: "El Viaje de Chihiro", año: 2001, genero: "Animacion, Aventura" }
        ]);      

        const peliNueva = ref({ titulo: "", año: "", genero: "" });

        //FUNCION PARA AÑADIR PELI A LA LISTA
        const añadirPeli = () =>{
            //campos completos
            if(peliNueva.value.titulo.trim() && peliNueva.value.año && peliNueva.value.genero.trim()){
                pelis.value.push({...peliNueva.value});
                peliNueva.value= {titulo:"", año:"", genero:""}; 
            }
        };
        //ELIMINAR PELI
        const eliminarPeli= (index) => {
            pelis.value.splice(index,1);
        };

        //IMAGEN
        const peliImg=(titulo) => {
            const imgs= {
                
            }
        }

