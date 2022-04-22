// Business Logic

function translator(number) {
  return number;
}

// UI Logic

$(document).ready(function() {
  $("form#translator").submit(function(event) {
    event.preventDefault();
    const userNum = $("#user-Number").val();
    $("#translated-text").html(translator(userNum));
  });
});