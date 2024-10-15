let frase =
    document.getElementById("frase");
let nuevaFrase =
    document.getElementById("nueva_frase");

const obtenerFrase = async () => {
    try {
        const response = await fetch(`https://api.chucknorris.io/jokes/random`)
        const result = await response.json();
        document.getElementById("frase").textContent=result.value;
        return result;
    } catch (error) {
        alert("No se pudo obtener información");
    }
};
const obtenerNuevaFrase = async ()=>{
    let nuevaFrase = await obtenerFrase();}

obtenerFrase()
nuevaFrase.addEventListener(`click`, obtenerFrase);