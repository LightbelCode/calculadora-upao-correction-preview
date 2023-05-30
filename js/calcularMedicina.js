$(document).ready(function() {
  $(".promedioMedicina").val("0");
  $(".nota4Medicina").addClass("disabled");
  $(".btnFinalMedicina").click(function() {
    var nota1 = document.forms["calPromedioMedicina"]["nota1Medicina"].value;
    var nota2 = document.forms["calPromedioMedicina"]["nota2Medicina"].value;
    var nota3 = document.forms["calPromedioMedicina"]["nota3Medicina"].value;
    if (nota1 !== "" && nota2 !== "" && nota3 !== "") {
      $(".btnFinalMedicina").addClass("disabled");
      $(".btnClearMedicina").addClass("disabled");
      $(".nota4Medicina").removeClass("disabled");
      var nota = obtenerFinalMedicina();
      if (nota > 20) {
        alert("La nota para poder aprobar el curso excede de 20.");
      } else {
        $(".nota4Medicina").val(nota);
        calcularMedicina();
        if ($(".promedioMedicina").val() >= 10.5) {
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

function obtenerFinalMedicina() {
  var nota1 = document.forms["calPromedioMedicina"]["nota1Medicina"].value;
  var nota2 = document.forms["calPromedioMedicina"]["nota2Medicina"].value;
  var nota3 = document.forms["calPromedioMedicina"]["nota3Medicina"].value;
  var suma = nota1 * 0.20 + nota2 * 0.30 + nota3 * 0.20;
  var restante = 10.5 - suma;
  var resultado = restante / 0.30;
  if (resultado % 1 == 0) {
    return resultado;
  } else {
    return Math.trunc(resultado) + 1;
  }
}

function calcularMedicina() {
  var nota1 = document.forms["calPromedioMedicina"]["nota1Medicina"].value;
  var nota2 = document.forms["calPromedioMedicina"]["nota2Medicina"].value;
  var nota3 = document.forms["calPromedioMedicina"]["nota3Medicina"].value;
  var nota4 = document.forms["calPromedioMedicina"]["nota4Medicina"].value;
  var promedio = document.forms["calPromedioMedicina"]["promedioMedicina"];
  var resultado = nota1 * 0.20 + nota2 * 0.30 + nota3 * 0.20 + nota4 * 0.30;
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
  if ($(".promedioMedicina").val() >= 10.5) {
    $(".promedioMedicina").addClass("aprobado");
    if ($(".promedioMedicina.aprobado")) {
      $(".promedioMedicina").css("color", "blue");
      $(".icon").html(
        "<img src='images/smiling-face-joypixels.gif' alt='Aprobado'>"
      );
    }
  } else {
    $(".promedioMedicina").removeClass("aprobado");
    $(".promedioMedicina").css("color", "red");
    $(".icon").html(
      "<img src='images/crying-face-joypixels.gif' alt='Desaprobado'>"
    );
  }
}
