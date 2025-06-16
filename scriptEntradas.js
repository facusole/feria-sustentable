let descuentoActivo = false;

function sumarEntrada(btn) {
  const container = btn.closest('.entrada');
  const contador = container.querySelector('.contador');
  let cantidad = parseInt(contador.textContent);
  contador.textContent = cantidad + 1;
  actualizarSubtotal();
}

function restarEntrada(btn) {
  const container = btn.closest('.entrada');
  const contador = container.querySelector('.contador');
  let cantidad = parseInt(contador.textContent);
  if (cantidad > 0) {
    contador.textContent = cantidad - 1;
    actualizarSubtotal();
  }
}

function aplicarDescuento() {
  const codigo = document.getElementById("promoCodeInput").value.trim();
  if (codigo === "UADE2025") {
    descuentoActivo = true;
  } else {
    descuentoActivo = false;
    alert("Código inválido o expirado.");
  }
  actualizarSubtotal();
}

function actualizarSubtotal() {
  const entradas = document.querySelectorAll('.entrada');
  let subtotal = 0;

  entradas.forEach(entrada => {
    const cantidad = parseInt(entrada.querySelector('.contador').textContent);
    const precio = parseFloat(entrada.dataset.precio);
    subtotal += cantidad * precio;
  });

  document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;

  let descuento = descuentoActivo ? subtotal * 0.10 : 0;
  let total = subtotal - descuento;

  document.getElementById('descuento').textContent = `-$${descuento.toFixed(2)}`;
  document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}
const fechasPorCiudad = {
  Rosario: ["3/09/2025", "4/09/2025"],
  Mendoza: ["10/09/2025", "11/09/2025"],
  Córdoba: ["17/09/2025", "18/09/2025"]
};

function actualizarFechas() {
  const ciudad = document.getElementById("selectCiudad").value;
  const selectFecha = document.getElementById("selectFecha");
  selectFecha.innerHTML = "<option value=''>Fecha</option>";

  if (fechasPorCiudad[ciudad]) {
    fechasPorCiudad[ciudad].forEach(fecha => {
      const option = document.createElement("option");
      option.value = fecha;
      option.textContent = fecha;
      selectFecha.appendChild(option);
    });
  }
}

function confirmarSeleccion() {
  const ciudad = document.getElementById("selectCiudad").value;
  const fecha = document.getElementById("selectFecha").value;
  if (!ciudad || !fecha) {
    alert("Por favor seleccione una ciudad y una fecha.");
  } else {
    alert(`Seleccionaste ${ciudad} - ${fecha}`);
  }
}