var targetNumber = 0;
var win = 0;
var loss = 0;
var current = 0;
var gem1 = 0;
var gem2 = 0;
var gem3 = 0;
var gem4 = 0;

$(document).ready(function() {

$("[id^=gem]").on("click", function() {
// looks at all divs with an id of gem* and executes click(gem*)
    click(eval($(this).attr("id")));
  });

  function click(a){
    current += a;
    if (current > targetNumber){
      loss++;
      reset();
    }
    else if (current === targetNumber) {
      win++;
      reset();
    }
    update();
  }

function reset(){

  targetNumber = Math.floor(Math.random() * 50)+50;
  current = 0;
  gem1 = Math.floor(Math.random() * 10)+1;
  gem2 = Math.floor(Math.random() * 20)+1;
  gem3 = Math.floor(Math.random() * 30)+1;
  gem4 = Math.floor(Math.random() * 40)+1;
    if ((gem1 + gem2 + gem3 / targetNumber) % 1 === 0){
      gem4 = 1;
    }

    update();
  }

  reset();

  function update(){
  $("#target")
    .html("Your target number is:<br><br>" + targetNumber);
  $("#score")
    .html("Wins: " + win + "<br><br>Losses: " + loss);
  $("#total")
    .html(current);
  }



document.onkeydown = checkKey;

  function checkKey(e) {
   var event = window.event ? window.event : e;
    latest = event.key;
//  Makes sure that the key pressed is a number and then runs click(gem*)

    if (latest % 1 === 0) {
      click(eval("gem"+latest));
    }

}

});
