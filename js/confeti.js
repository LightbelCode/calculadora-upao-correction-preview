  //CREAR CONFETI

  function crearConfeti(index) {
    const confeti = document.createElement("div");
    confeti.classList.add("confeti");
    confeti.style.left = Math.random() * 100 + "vw";
    confeti.style.top = Math.random() * 100 + "vh";
    confeti.style.background = getRandomColor();
    confeti.style.transform = `rotate(${Math.random() * 360}deg)`;
    confeti.style.animationDuration = Math.random() * 3 + 2 + "s"; // Ajustar la duración del confeti
    document.body.appendChild(confeti);
    confetis.push(confeti);
  }
  

  //GENERAR COLOR A LOS CONFETIS

  function getRandomColor() {
    const colors = ["#FFC107", "#F44336", "#E91E63", "#9C27B0", "#2196F3", "#4CAF50", "#FF5722"];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  
  let confetis = []; // Arreglo para almacenar los confetis activos

  //MOSTRAR LOS CONFETIS
  
  function mostrarConfeti() {
    for (let i = 0; i < 100; i++) {
      setTimeout(() => crearConfeti(i), i * 150); // Aumentar velocidad de caída a 150ms
    }
  }

  //OCULTAR LOS CONFETIS

  function ocultarConfeti() {
    confetis.forEach(confeti => {
      confeti.remove();
    });
  }

  
  function desactivarConfeti() {
    confetis = [];
  }
