document.addEventListener('DOMContentLoaded', () => {
    const preguntas = document.querySelectorAll('.pregunta');
  
    preguntas.forEach(pregunta => {
      const respuesta = pregunta.querySelector('.respuesta');
  
      if (respuesta) {
        respuesta.style.maxHeight = '0px';
      }
  
      pregunta.addEventListener('click', () => {
        const respuesta = pregunta.querySelector('.respuesta');
        const activa = respuesta.classList.contains('respuesta_activa');
  
        document.querySelectorAll('.respuesta').forEach(r => {
          r.classList.remove('respuesta_activa');
          r.style.maxHeight = '0px';
        });
  
        if (!activa) {
          respuesta.classList.add('respuesta_activa');
          respuesta.style.maxHeight = respuesta.scrollHeight + 'px';
        }
      });
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.formulario');
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
  
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      submitBtn.textContent = 'Enviando...'; 
      submitBtn.disabled = true;
  
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
        }
      } catch (error) {
        console.error('Error de red:', error);
        submitBtn.textContent = 'Error de conexión';
      } finally {
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        }, 3000); 
      }
    });
  });
  