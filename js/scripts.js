// Business Logic

function translator(number) {
  let numArray = [];
  for(let i = 0; i <= parseInt(number); i++) {
    numArray.push(checkForSpecial(i));
  }
  return numArray;
}

function formatter(array) {
  let result = "";
  for (let i = 0; i < array.length; i++) {
    let word = "\"" + array[i] + "\"";
    result += word;
    if (i < array.length -1) {
      result += ", ";
    }
  }
  return result;
}

function checkForSpecial(number) {
  let splitNums = number.toString().split('');
  if (splitNums.includes("3")) {
    return "Won't you be my neighbor?";
  } else if (splitNums.includes("2")) {
    return "Boop!";
  } else if (splitNums.includes("1")) {
    return "Beep!";
  } else {
    return number;
  }
}

function printResults(number) {
  return formatter(translator(number));
}

// UI Logic

$(document).ready(function() {
  $("form#translator").submit(function(event) {
    event.preventDefault();
    const userNum = $("#user-Number").val();
    $("#translated-text").html(printResults(userNum));
    $("#output").show();
  });
});