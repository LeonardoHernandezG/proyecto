
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