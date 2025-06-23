// Funcionalidad del Modal de Inscripción
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal-inscripcion');
    const inscribirseBtns = document.querySelectorAll('.inscribirse-btn');
    const cerrarModal = document.querySelector('.cerrar-modal');
    const btnCancelar = document.querySelector('.btn-cancelar');
    const formInscripcion = document.getElementById('form-inscripcion');

    // Función para abrir el modal
    function abrirModal() {
        modal.classList.add('mostrar');
        document.body.style.overflow = 'hidden'; // Prevenir scroll del body
    }

    // Función para cerrar el modal
    function cerrarModalFunc() {
        modal.classList.remove('mostrar');
        document.body.style.overflow = 'auto'; // Restaurar scroll del body
        formInscripcion.reset(); // Limpiar el formulario
    }

    // Event listeners para abrir el modal
    inscribirseBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            abrirModal();
        });
    });

    // Event listeners para cerrar el modal
    cerrarModal.addEventListener('click', cerrarModalFunc);
    btnCancelar.addEventListener('click', cerrarModalFunc);

    // Cerrar modal al hacer clic fuera de él
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            cerrarModalFunc();
        }
    });

    // Cerrar modal con la tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('mostrar')) {
            cerrarModalFunc();
        }
    });

    // Manejar el envío del formulario
    formInscripcion.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        
        // Mostrar mensaje de confirmación
        alert(`¡Gracias por inscribirte!\n\nNombre: ${nombre}\nEmail: ${email}\n\nTe enviaremos más información pronto.`);
        
        cerrarModalFunc();
    });
}); 