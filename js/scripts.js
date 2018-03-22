$(document).ready(function() {
  $("#formOne").submit(function(event){
    var ninjaInput = $("input#ninja").val();
    var pirateInput = $("input#pirate").val();
    var alienInput = $("input#alien").val();
    var yourJob = "";

      if (ninjaInput==="true" && pirateInput==="false" && alienInput==="false") {
        alert("You are a ninja!!");
        yourJob="Ninja";
      } else if (pirateInput==="true" && ninjaInput==="false" && alienInput==="false") {
        alert("You are a pirate!!");
        yourJob="Pirate";
      } else if (alienInput==="true" && ninjaInput==="false" && pirateInput==="false") {
        alert("You are an alien!!");
        yourJob="Alien";
      } else {
        alert("Only one of these can be true.");
      }

      $("#what-are-you").text(yourJob);



      event.preventDefault();
    });
  });
