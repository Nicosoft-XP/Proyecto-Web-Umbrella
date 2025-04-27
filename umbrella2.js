// Mostrar previsualización con los datos ingresados
function mostrarPrevisualizacion() {
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const direccion = document.getElementById('direccion').value;
    const pareja = document.getElementById('inputPareja').value;
    const hijos = document.getElementById('inputHijos').value;
    const cantidadHijos = document.getElementById('cantidad-hijos').value;
    const email = document.getElementById('email').value;
    const celular = document.getElementById('celular').value;
    const consulta = document.getElementById('consulta').value;

    // Validación básica (podés agregar más validaciones si querés)
    if (!nombre || !edad || !direccion || !pareja || !hijos || !email || !celular) {
        alert("Por favor completá todos los campos obligatorios.");
        return;
    }

    // Crear el contenido HTML de la previsualización
    const html = `
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Edad:</strong> ${edad}</p>
        <p><strong>Dirección:</strong> ${direccion}</p>
        <p><strong>Incluye pareja:</strong> ${pareja}</p>
        <p><strong>Incluye hijos:</strong> ${hijos}</p>
        <p><strong>Cantidad de hijos:</strong> ${cantidadHijos || 'N/A'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Celular:</strong> ${celular}</p>
        <p><strong>Consulta:</strong> ${consulta || 'Ninguna'}</p>
    `;

    // Mostrar la previsualización
    document.getElementById('detalleDatos').innerHTML = html;
    document.getElementById('previsualizacion').style.display = 'block';
}

// Cerrar la ventana de previsualización
function cerrarPrevisualizacion() {
    document.getElementById('previsualizacion').style.display = 'none';
}

// Confirmar el envío, mostrar cartel de éxito y reiniciar el formulario
function enviarFormulario() {
    document.getElementById('previsualizacion').style.display = 'none';
    document.querySelector('form').reset(); // Limpiar el formulario

    // Mostrar cartel de éxito
    const mensaje = document.getElementById('mensajeExito');
    mensaje.style.display = 'block';

    // Ocultar el mensaje a los 5 segundos
    setTimeout(() => {
        mensaje.style.display = 'none';
    }, 5000);
}