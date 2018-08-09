

var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};



$(document).ready(function() {
  // edit this work later
  // $("#formOne").submit(function() {
  //   $(".person1").append("blah blah");
  //   $(".person2").append("blah blah");
  //   $(".animal").append("blah blah");
  //   $(".exclamation").append("blah blah");
  //   $(".verb").append("blah blah");
  //   $(".noun").append("blah blah");
  //
  //   $("#story").show();
  // });





  var numInput = $( "#numInput" );
  var firstInput = "";
  var secondInput = "";
  var operator = "";
  // var inputs = []

$("#one").click(function(){
numInput.val( numInput.val() + "1" );
})
$("#two").click(function(){
numInput.val( numInput.val() + "2" );
})
$("#three").click(function(){
numInput.val( numInput.val() + "3" );
})
$("#four").click(function(){
numInput.val( numInput.val() + "4" );
})
$("#five").click(function(){
numInput.val( numInput.val() + "5" );
})
$("#six").click(function(){
numInput.val( numInput.val() + "6" );
})
$("#seven").click(function(){
numInput.val( numInput.val() + "7" );
})
$("#eight").click(function(){
numInput.val( numInput.val() + "8" );
})
$("#nine").click(function(){
numInput.val( numInput.val() + "9" );
})
$("#zero").click(function(){
numInput.val( numInput.val() + "0" );
})
$("#decimal").click(function(){
numInput.val( numInput.val() + "." );
})
$("#plus").click(function(){
  operator = "plus";
  firstInput = (parseFloat(numInput.val()));
  numInput.val("");
  // inputs.push(parseFloat(numInput.val()));
})
$("#minus").click(function(){
  operator = "minus";
  firstInput = (parseFloat(numInput.val()));
  numInput.val("");
  // inputs.push(parseFloat(numInput.val()));
})
$("#divide").click(function(){
  operator = "divide";
  firstInput = (parseFloat(numInput.val()));
  numInput.val("");
  // inputs.push(parseFloat(numInput.val()));
})
$("#times").click(function(){
  operator = "times";
  firstInput = (parseFloat(numInput.val()));
  numInput.val("");
  // inputs.push(parseFloat(numInput.val()));
});
$("#equals").click(function(){
  secondInput = (parseFloat(numInput.val()));
  if(operator == "plus") {
  numInput.val(add(firstInput,secondInput));
} else if(operator == "minus") {
    numInput.val(subtract(firstInput,secondInput));
} else if(operator == "times") {
    numInput.val(multiply(firstInput,secondInput));
}else if(operator == "divide") {
    numInput.val(divide(firstInput,secondInput));
}


// console.log("1");
//   $(".btn-outline-primary").click(function(){
//     numInput.val("");
//     numInput.val( numInput.val() + "1" );
//     console.log("2");
//     return;
//   })
// console.log("3");
  // inputs = []
  // inputs.push(parseFloat(numInput.val()));
  // console.log(inputs);
});

$("#clear").click(function(){
  numInput.val("");
  inputs = []
});

});
