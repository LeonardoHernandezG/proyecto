function insertarEjemplo() {
    const ejemplo = `
    section .data
        msg db 'Hola, mundo!',0
    
    section .text
        global _start
    
    _start:
        ; Escribir mensaje en pantalla
        mov eax, 4 ; Número de la llamada del sistema para escribir
        mov ebx, 1 ; Descriptor de archivo para stdout
        mov ecx, msg ; Dirección del mensaje
        mov edx, 13 ; Longitud del mensaje
        int 0x80 ; Llamada al sistema para escribir en la pantalla
    
        ; Salida del programa
        mov eax, 1 ; Número de la llamada del sistema para salir
        xor ebx, ebx ; Código de retorno (0)
        int 0x80 ; Llamada al sistema para salir
    `;
  
    document.getElementById('codigo').value = ejemplo;
  }
  