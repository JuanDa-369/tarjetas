function crearTarjetas() {
    let divTarjetas = document.getElementById("divTarjetas");
    
    let desde = parseInt(document.getElementById("txtDesde").value);
    let hasta = parseInt(document.getElementById("txtHasta").value);
    let salto = parseInt(document.getElementById("txtSalto").value);
    
    let contenidoHtml = "";
    
    for (let i = desde; i <= hasta; i += salto) {
        contenidoHtml += `<div class="item">${i}</div>`;
    }
    divTarjetas.innerHTML = contenidoHtml;
}