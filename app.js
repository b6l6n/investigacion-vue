const { isTemplateExpression } = require("typescript");

const { crearApp, ref } = Vue;
const app = {
    setup() {
        const pelis= ref([]); //LISTA DE PELICULAS
        const peliNueva = ref({titulo:"", año:"", genero:""}); //AÑADIR PELIS NUEVAS

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

        return{
            pelis, peliNueva, añadirPeli, eliminarPeli
        };
    }
};
crearApp(app).mount("#app");
