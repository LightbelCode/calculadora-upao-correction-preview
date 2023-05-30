$(document).ready(function() {
    $(".promedioIngenieria").val("0");
    $(".nota4Ingenieria").addClass("disabled");
    $(".btnFinalIngenieria").click(function() {
      var nota1 = document.forms["calPromedioIngenieria"]["nota1Ingenieria"].value;
      var nota2 = document.forms["calPromedioIngenieria"]["nota2Ingenieria"].value;
      var nota3 = document.forms["calPromedioIngenieria"]["nota3Ingenieria"].value;
      if (nota1 !== "" && nota2 !== "" && nota3 !== "") {
        $(".btnFinalIngenieria").addClass("disabled");
        $(".btnClearIngenieria").addClass("disabled");
        $(".nota4Ingenieria").removeClass("disabled");
        var nota = obtenerFinalIngenieria();
        if (nota > 20) {
          alert("La nota para poder aprobar el curso excede de 20.");
        } else {
          $(".nota4Ingenieria").val(nota);
          calcularIngenieria();
          if ($(".promedioIngenieria").val() >= 10.5) {
            mostrarConfeti();
            $(".mensaje").text("!FELICITACIONES APROBASTE!");
          }
        }
      } else {
        alert("Ingresar las 3 primeras notas.");
      }
    });
  
    $(document).on("keyup", "input", function() {
      if (this.value > 20) {
        this.value = "";
      }
      if (this.value.length > 5) {
        alert("Sólo puedes ingresar dos decimales.");
        this.value = "";
      }
    });
  
    $(document).on("mousedown", function() {
      ocultarConfeti();
    });
  
    $(document).on("mouseup", function() {
      ocultarConfeti();
    });
  
    $(document).on("click", function() {
      ocultarConfeti();
    });
  
    $(document).on("scroll", function() {
      ocultarConfeti();
    });
  });

  //CALCULANDO NOTA FINAL O NOTA 4

  function obtenerFinalIngenieria() {
    var nota1 = document.forms["calPromedioIngenieria"]["nota1Ingenieria"].value;
    var nota2 = document.forms["calPromedioIngenieria"]["nota2Ingenieria"].value;
    var nota3 = document.forms["calPromedioIngenieria"]["nota3Ingenieria"].value;
    var suma = nota1 * 0.25 + nota2 * 0.20 + nota3 * 0.30;
    var restante = 10.5 - suma;
    var resultado = restante / 0.25;
    if (resultado % 1 == 0) {
      return resultado;
    } else {
      return Math.trunc(resultado) + 1;
    }
  }

//CALCULANDO NOTA PROMEDIO

  function calcularIngenieria() {
    var nota1 = document.forms["calPromedioIngenieria"]["nota1Ingenieria"].value;
    var nota2 = document.forms["calPromedioIngenieria"]["nota2Ingenieria"].value;
    var nota3 = document.forms["calPromedioIngenieria"]["nota3Ingenieria"].value;
    var nota4 = document.forms["calPromedioIngenieria"]["nota4Ingenieria"].value;
    var promedio = document.forms["calPromedioIngenieria"]["promedioIngenieria"];
    var resultado = nota1 * 0.25 + nota2 * 0.20 + nota3 * 0.30 + nota4 * 0.25;
    if (!isNaN(resultado)) {
      if (nota1 <= 20 && nota2 <= 20 && nota3 <= 20 && nota4 <= 20) {
        if (resultado > 0) {
          promedio.value = parseFloat(resultado).toFixed(2);
        } else {
          promedio.value = "0";
        }
      } else {
        alert("Ingrese un valor igual o menor que 20");
        promedio.value = "0";
      }
    }
    if ($(".promedioIngenieria").val() >= 10.5) {
      $(".promedioIngenieria").addClass("aprobado");
      if ($(".promedioIngenieria.aprobado")) {
        $(".promedioIngenieria").css("color", "blue");
        $(".icon").html(
          "<img src='images/smiling-face-joypixels.gif' alt='Aprobado'>"
        );
      }
    } else {
      $(".promedioIngenieria").removeClass("aprobado");
      $(".promedioIngenieria").css("color", "red");
      $(".icon").html(
        "<img src='images/crying-face-joypixels.gif' alt='Desaprobado'>"
      );
    }
  }
  
  
  // Mostrar section de carga
  window.addEventListener("load", function() {
    document.querySelector(".intermediate-section").style.display = "block";
  });
  