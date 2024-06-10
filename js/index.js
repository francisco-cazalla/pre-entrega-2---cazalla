function calcularIVA(precio){
    let IVA = 1.21;
    let montoIva= precio * IVA;
    return montoIva;
}

function numeroIngresado(){
    let precio = prompt("ingresar un valor numerico")
    if(precio <0 ||  isNaN(precio)){
        alert("ingrese un numero valido")
    }else{
        let montoIva = calcularIVA(precio);

        alert(`el monto ingresado mas el impuesto IVA es de  ${montoIva.toFixed(2)} pesos`)
    }
}


function calculadoraDePresupuesto() {
    console.log("Función calculadoraDePresupuesto activada"); 
    let presupuestoMensual = parseFloat(prompt("Ingresa tu presupuesto mensual:"));

    
    if (isNaN(presupuestoMensual) || presupuestoMensual <= 0) {
        alert("Por favor, ingresa un presupuesto válido.");
        return;
    }

    let numeroDeGastos = parseInt(prompt("¿Cuántas categorías de gastos tienes?"));

    
    if (isNaN(numeroDeGastos) || numeroDeGastos <= 0) {
        alert("Por favor, ingresa un número válido de categorías de gastos.");
        return;
    }

    
    let totalGastos = 0;

    for (let i = 0; i < numeroDeGastos; i++) {
        let nombreGasto = prompt(`Ingresa el nombre del gasto ${i + 1}:`);
        let montoGasto = parseFloat(prompt(`Ingresa el monto para ${nombreGasto}:`));

        
        if (isNaN(montoGasto) || montoGasto < 0) {
            alert("Por favor, ingresa un monto válido.");
            i--; 
            continue;
        }

        
        totalGastos += montoGasto;
    }

    
    alert(`Tu presupuesto mensual es: ${presupuestoMensual.toFixed(0)} pesos`);
    alert(`El total de tus gastos es: ${totalGastos.toFixed(0)} pesos`);

    if (totalGastos > presupuestoMensual) {
        alert("Has excedido tu presupuesto.");
    } else if (totalGastos === presupuestoMensual) {
        alert("Has utilizado exactamente tu presupuesto.");
    } else {
        let sobrante = presupuestoMensual - totalGastos;
        alert(`Estás dentro de tu presupuesto. Te sobra: ${sobrante.toFixed(0)} pesos`); 
    } 
}


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formulario-prestamo').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Capturar valores del formulario
        const monto = parseFloat(document.getElementById('monto').value);
        const interes = parseFloat(document.getElementById('interes').value);
        const años = parseFloat(document.getElementById('años').value);
        
        // Validar que los valores sean números válidos
        if (isNaN(monto) || isNaN(interes) || isNaN(años) || monto <= 0 || interes <= 0 || años <= 0) {
            alert('Por favor, ingresa valores válidos y mayores a cero');
            return;
        }
        
        // Calcular pago mensual
        const pagoMensual = calcularPagoMensual(monto, interes, años);
        
        // Mostrar resultados en una alerta
        alert(`
            Resultados:
            Monto del préstamo: $${monto.toFixed()} pesos
            Tasa de interés: ${interes.toFixed(2)}%
            Plazo: ${años} años
            Pago mensual: $${pagoMensual.toFixed(0)} pesos
        `);
    });
});

function calcularPagoMensual(monto, interes, años) {
    const interesMensual = interes / 100 / 12;
    const pagosTotales = años * 12;
    const x = Math.pow(1 + interesMensual, pagosTotales);
    const mensual = (monto * x * interesMensual) / (x - 1);
    return mensual;
}




 







