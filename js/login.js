function mostrarAlertaPersonalizada() {
  document.getElementById('alerta-personalizada').style.display = 'flex';
}

function cerrarAlerta() {
  document.getElementById('alerta-personalizada').style.display = 'none';
}

function validarCredenciales(event) {
  event.preventDefault(); // Evita que se recargue la página

  const email = document.getElementById('email').value.trim();

  // Validar el correo ingresado
  if (email === 'ecopetrol@atento.com1') {
    window.location.href = 'templates/grupo_poblacional/activo.html';
  } else if (email === 'ecopetrol@atento.com2') {
    window.location.href = 'templates/grupo_poblacional/pensionado.html';
  } else {
    mostrarAlertaPersonalizada();
  }
}
