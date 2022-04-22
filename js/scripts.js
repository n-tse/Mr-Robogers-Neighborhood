// Business Logic

function translator(number) {
  let numArray = [];
  for(let i = 0; i <= parseInt(number); i++) {
    if (i === 3) {
      numArray.push("Won't you be my neighbor?");
    } else if (i === 2) {
      numArray.push("Boop!");
    } else if (i === 1) {
      numArray.push("Beep!");
    } else {
      numArray.push(i);
    }
  }
  return numArray;
}

// UI Logic

$(document).ready(function() {
  $("form#translator").submit(function(event) {
    event.preventDefault();
    const userNum = $("#user-Number").val();
    $("#translated-text").html(translator(userNum));
  });
});