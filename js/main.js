function mostrarFormulario() {
    var segundoFormulario = document.getElementById("segundoFormulario");
    var checkbox2 = document.getElementsByName("tip-entrega2")[0];
            
        if (checkbox2.checked) {
                segundoFormulario.style.display = "block";
            } else {
                segundoFormulario.style.display = "none";
            }
        }