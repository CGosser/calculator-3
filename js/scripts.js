

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
  var firstInput = 0
  var secondInput = 0
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
$("#plus").click(function(){
  var firstInput = parseInt(numInput.val());
  numInput.val("");
  var operator = "plus";
  console.log(firstInput);
  console.log(operator);
})
$("#equals").click(function(){
  console.log(firstInput);
  var secondInput = parseInt(numInput.val());
  numInput.val(add(firstInput,secondInput));
});
});
