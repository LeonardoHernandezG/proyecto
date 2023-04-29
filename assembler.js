function analizarCodigo() {
  // Obtiene el código de ensamblador ingresado por el usuario
  var codigoEnsamblador = document.getElementById("codigo-ensamblador").value;

  // Analiza el código de ensamblador utilizando la biblioteca de análisis de ensamblador
  var analisis = Ensamblador.analizar(codigoEnsamblador);

  // Muestra la información relevante sobre cada componente en la sección de resultados
  var tablaInstrucciones = document.getElementById("tabla-instrucciones");
  var tablaRegistros = document.getElementById("tabla-registros");
  var tablaMemoria = document.getElementById("tabla-memoria");
  var areaVariables = document.getElementById("area-variables");
  var areaErrores = document.getElementById("area-errores");

  // Limpia las tablas y las áreas de texto
  tablaInstrucciones.innerHTML = "";
  tablaRegistros.innerHTML = "";
  tablaMemoria.innerHTML = "";
  areaVariables.value = "";
  areaErrores.value = "";

  // Agrega la información de las instrucciones a la tabla de instrucciones
  var instrucciones = analisis.instrucciones;
  for (var i = 0; i < instrucciones.length; i++) {
    var instruccion = instrucciones[i];
    var fila = tablaInstrucciones.insertRow();
    var columna1 = fila.insertCell(0);
    var columna2 = fila.insertCell(1);
    var columna3 = fila.insertCell(2);
    columna1.innerHTML = instruccion.direccion;
    columna2.innerHTML = instruccion.instruccion;
    columna3.innerHTML = instruccion.operando;
  }

  // Agrega la información de los registros a la tabla de registros
  var registros = analisis.registros;
  for (var registro in registros) {
    var fila = tablaRegistros.insertRow();
    var columna1 = fila.insertCell(0);
    var columna2 = fila.insertCell(1);
    columna1.innerHTML = registro;
    columna2.innerHTML = registros[registro];
  }

  // Agrega la información de la memoria a la tabla de memoria
  var memoria = analisis.memoria;
  for (var direccion in memoria) {
    var fila = tablaMemoria.insertRow();
    var columna1 = fila.insertCell(0);
    var columna2 = fila.insertCell(1);
    columna1.innerHTML = direccion;
    columna2.innerHTML = memoria[direccion];
  }

  // Agrega la información de las variables y los errores a las áreas de texto correspondientes
  areaVariables.value = analisis.variables;
  areaErrores.value = analisis.errores;
}

