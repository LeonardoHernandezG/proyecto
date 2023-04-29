function analizarCodigo() {
  // Obtener el código ingresado por el usuario
  const codigo = document.getElementById("codigo").value;
  
  // Definir las expresiones regulares para analizar el código
  const instruccionRegExp = /^\s*([a-z]+)\s/i;
  const argumentoRegExp = /^\s*[a-z]+\s+([\w\[\]]+)\s*$/i;
  const direccionRegExp = /^\s*[\w\[\]]+\s*$/i;
  
  // Dividir el código en líneas y analizar cada línea
  const lineas = codigo.split("\n");
  const variables = {};
  const errores = [];
  let resultado = "El código no tiene errores";
  for (let i = 0; i < lineas.length; i++) {
    const linea = lineas[i].trim();
    if (linea === "") {
      continue;
    }
    
    // Analizar la instrucción y el argumento (si existe)
    const instruccionMatch = instruccionRegExp.exec(linea);
    const argumentoMatch = argumentoRegExp.exec(linea);
    if (!instruccionMatch) {
      errores.push(`Error de sintaxis en la línea ${i + 1}: instrucción inválida`);
    } else {
      const instruccion = instruccionMatch[1].toLowerCase();
      if (argumentoMatch) {
        const argumento = argumentoMatch[1];
        if (instruccion === "mov" && !direccionRegExp.test(argumento)) {
          errores.push(`Error de sintaxis en la línea ${i + 1}: argumento inválido para la instrucción ${instruccion}`);
        } else {
          // Analizar el argumento y actualizar la lista de variables
          if (!variables[argumento]) {
            variables[argumento] = [];
          }
          variables[argumento].push(i + 1);
        }
      }
    }
  }
  
  // Actualizar el resultado y mostrar los errores y variables
  if (errores.length > 0) {
    resultado = errores.join("\n");
  }
  
  document.getElementById("errores").value = resultado;
}
