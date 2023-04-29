function obtenerVariables(codigo) {
    const regex = /[a-z][a-z0-9]*(?:\s+db|\s+dd|\s+dw|\s+resb|\s+resd|\s+resw)/gm;
    let match;
    let variables = [];
  
    while ((match = regex.exec(codigo)) !== null) {
      let variable = match[0].trim().split(' ')[0];
      let tipo = match[0].trim().split(' ')[1];
      variables.push({ variable, tipo });
    }
    
    return variables;
  }
  