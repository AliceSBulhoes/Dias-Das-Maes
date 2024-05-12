
function abrirModal(pais){
    var modal = document.getElementById(pais);
    modal.style.display = "grid";

    var abrirModal = document.getElementById("abrirModal");
    abrirModal.style.display = "flex";

    var aventura = document.getElementById("aventura");
    aventura.style.display = "none";
}

function fecharModal(pais){

    var modal = document.getElementById(pais);
    modal.style.display = "none";

    var abrirModal = document.getElementById("abrirModal");
    abrirModal.style.display = "none";

    var aventura = document.getElementById("aventura");
    aventura.style.display = "grid";
}