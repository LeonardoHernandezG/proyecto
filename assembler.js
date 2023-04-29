function analizarCodigo() {
    // Obtener el código de ensamblador ingresado por el usuario
    const codigoEnsamblador = document.getElementById("codigo").value;
    
    // Crear un objeto Assembler y analizar el código
    const ensamblador = new Assembler();
    const resultado = ensamblador.parse(codigoEnsamblador);
    
    // Mostrar el resultado en la sección de resultados
    const seccionResultados = document.getElementById("resultado");
    seccionResultados.innerHTML = "";
    
    // Mostrar la descripción de cada instrucción
    const instrucciones = resultado.instructions;
    for (let i = 0; i < instrucciones.length; i++) {
      const instruccion = instrucciones[i];
      const descripcion = obtenerDescripcionInstruccion(instruccion.opcode);
      seccionResultados.innerHTML += `<p><strong>${instruccion.opcode}</strong>: ${descripcion}</p>`;
    }
    
    // Mostrar la tabla de registros
    const registros = resultado.registers;
    seccionResultados.innerHTML += "<h3>Registros:</h3>";
    seccionResultados.innerHTML += "<table>";
    seccionResultados.innerHTML += "<tr><th>Nombre</th><th>Tamaño</th><th>Valor</th><th>Descripción</th></tr>";
    for (let i = 0; i < registros.length; i++) {
      const registro = registros[i];
      seccionResultados.innerHTML += `<tr><td>${registro.name}</td><td>${registro.size}</td><td>${registro.value}</td><td>${registro.description}</td></tr>`;
    }
    seccionResultados.innerHTML += "</table>";
    
    // Mostrar las direcciones de memoria
    const direcciones = resultado.memory;
    seccionResultados.innerHTML += "<h3>Direcciones de memoria:</h3>";
    seccionResultados.innerHTML += "<ul>";
    for (const direccion in direcciones) {
      const valor = direcciones[direccion];
      seccionResultados.innerHTML += `<li>${direccion}: ${valor}</li>`;
    }
    seccionResultados
}

function insertarEjemplo() {
    var ejemplo = "section .data\n" +
                  "    mensaje db 'Hola, mundo!', 0\n" +
                  "\n" +
                  "section .text\n" +
                  "    global _start\n" +
                  "\n" +
                  "_start:\n" +
                  "    ; Escribe el mensaje en la consola\n" +
                  "    mov eax, 4\n" +
                  "    mov ebx, 1\n" +
                  "    mov ecx, mensaje\n" +
                  "    mov edx, 13\n" +
                  "    int 0x80\n" +
                  "\n" +
                  "    ; Salida del programa\n" +
                  "    mov eax, 1\n" +
                  "    xor ebx, ebx\n" +
                  "    int 0x80";
    document.getElementById("codigo").value = ejemplo;
  }