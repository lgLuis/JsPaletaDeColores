const color = document.querySelector("#colores");
const salida = document.querySelector("#salidas");

//console.log(color.value);

color.addEventListener("input", () => {
    const value = color.value;
    //    console.log(value);
    salida.innerHTML = value;
    salida.style.background= value;
    salida.style.color="#fff";
});