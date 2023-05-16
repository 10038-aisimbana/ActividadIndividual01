function validar() {
        // Obtener los valores de los campos
        var email = document.getElementById('email').value;
        var telefono = document.getElementById('telefono').value;

        // Expresión regular para validar el correo electrónico
        var expresionEmail = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;

        // Expresión regular para validar el teléfono
        var expresionTelefono = /^(?=\d{10}$)\d+$/;

        // Validar el correo electrónico
        if (!expresionEmail.test(email)) {
          alert('El correo electrónico no es válido.');
          return;
        }

        // Validar el teléfono
        if (!expresionTelefono.test(telefono)) {
          alert('El teléfono no es válido.');
          return;
        }

        // Deshabilitar el botón de envío y cambiar el mensaje
        var botonEnvio = document.getElementsByName('enviar')[0];
        botonEnvio.disabled = true;
        botonEnvio.value = 'Enviando datos ...';

        // Enviar el formulario
        this.form.submit();
      }