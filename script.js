function agregarALaPantalla(value) {
    document.getElementById('pantalla').value += value;
  }
  
  function calcular() {
    const valorPantalla = document.getElementById('pantalla').value;
    const result = eval(valorPantalla);
    document.getElementById('pantalla').value = result;
  }
  
  function limpiarPantalla() {
    document.getElementById('pantalla').value = '';
  }
  
  function deletelast() {
    const texto_pantalla = document.getElementById('pantalla').value;
    
    const indexpe = document.getElementById('pantalla').value + '';
    let swap_min_lenght = false;
    let numberindex = 0;
    
    if (indexpe.length < 3) {
      numberindex += indexpe.length - 1;
      swap_min_lenght = true;
    }else{
      numberindex += indexpe.length - 2;
      
    }
    
    
    

    const anteult_index = indexpe[0 + numberindex];

    let new_text = '';
    for (let index = 0; index < numberindex; index++) {
      if (index == 0) {
        new_text = indexpe[index];

      }
      if(swap_min_lenght){
        break;
      }
      new_text += indexpe[index];
      
    }
    
    
    
    document.getElementById('pantalla').value = new_text;
  }