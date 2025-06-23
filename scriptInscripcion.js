// Funcionalidad del Modal de Inscripción
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal-inscripcion');
    const inscribirseBtns = document.querySelectorAll('.inscribirse-btn');
    const cerrarModal = document.querySelector('.cerrar-modal');
    const btnCancelar = document.querySelector('.btn-cancelar');
    const formInscripcion = document.getElementById('form-inscripcion');

    // Función para abrir el modal
    function abrirModal() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevenir scroll del body
    }

    // Función para cerrar el modal
    function cerrarModalFunc() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restaurar scroll del body
        formInscripcion.reset(); // Limpiar el formulario
    }

    // Event listeners para abrir el modal
    inscribirseBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            abrirModal();
        });
    });

    // Event listeners para cerrar el modal
    cerrarModal.addEventListener('click', cerrarModalFunc);
    btnCancelar.addEventListener('click', cerrarModalFunc);

    // Cerrar modal al hacer clic fuera de él
    window.addEventListener('click',(e) => {
        if (e.target === modal) {
            cerrarModalFunc();
        }
    });

    // Cerrar modal con la tecla Escape
    document.addEventListener('keydown',(e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            cerrarModalFunc();
        }
    });

    // Manejar el envío del formulario
    formInscripcion.addEventListener('submit', async (e) => {
        e.preventDefault();
                
        try {
            const response = await fetch(form.action, {
              method: form.method,
              body: new FormData(form), 
              headers: {
                'Accept': 'application/json' 
              }
            });
      
            if (response.ok) { 
              submitBtn.textContent = '¡Enviado!';
              
              form.reset(); 
            } else {
              const data = await response.json();
              console.error('Error de Formspree:', data.errors);
              submitBtn.textContent = 'Error al enviar';
              submitBtn.style.backgroundColor = 'red';
            }
          } catch (error) {
            console.error('Error de red:', error);
            submitBtn.textContent = 'Error de conexión';
          } finally {
            setTimeout(() => {
              submitBtn.textContent = originalText;
              submitBtn.style.backgroundColor = '#39833C';
              submitBtn.disabled = false;
            }, 6000); 
          }

        // Aquí puedes agregar la lógica para enviar los datos
        // Por ahora solo mostraremos un mensaje de confirmación
        alert(`¡Gracias por inscribirte!\n\nNombre: ${nombre}\nEmail: ${email}\n\nTe enviaremos más información pronto.`);
        
        cerrarModalFunc();
    });
}); 