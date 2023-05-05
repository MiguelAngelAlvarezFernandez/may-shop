function aDataURL(fichero, manejador) {
    const reader = new FileReader();
    reader.addEventListener("load", ()=>manejador(reader.result), false);
    reader.readAsDataURL(fichero);
}

export {
    aDataURL
}