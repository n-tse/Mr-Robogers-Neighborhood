// Business Logic

function translator(number) {
  if (number === "3") {
    return "Won't you be my neighbor?";
  } else if (number === "2") {
    return "Boop!";
  } else if (number === "1") {
    return "Beep!";
  }
}

// UI Logic

$(document).ready(function() {
  $("form#translator").submit(function(event) {
    event.preventDefault();
    const userNum = $("#user-Number").val();
    $("#translated-text").html(translator(userNum));
  });
});