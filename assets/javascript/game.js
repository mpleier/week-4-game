//     console.log("working");
var words = ["Awkward", "Bagpipes", "Banjo", "Bungler", "Croquet", "Crypt", "Dwarves", "Fervid", "Fishhook", "Fjord", "Gazebo", "Gypsy", "Haiku", "Haphazard", "Hyphen", "Ivory", "Jazzy", "Jiffy", "Jinx", "Jukebox", "Kayak", "Kiosk", "Klutz", "Memento", "Mystify", "Numbskull", "Ostracize", "Oxygen", "Pajama", "Phlegm", "Pixel", "Polka", "Quad", "Quip", "Rhythmic", "Rogue", "Sphinx", "Squawk", "Swivel", "Toady", "Twelfth", "Unzip", "Waxy", "Wildebeest", "Yacht", "Zealous", "Zigzag", "Zippy", "Zombie"];

var chars = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y", "z"
];

var answer = randomWord();
var tall = 10;
var high = 1;

function box(a){

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.clearRect(0, 0, 80, 300);
ctx.fillRect(0,0,80,a);
}

var last = "";

var latest = "";

function restart() {
    last = answer;
    answer = randomWord();
    key.length = 0;
    key = answer.split("")
    show.length = 0;
    show = answer.split("");
    show.fill("_");
    high = 1;
    tall=10;
    print();
    box(tall);

}

function print() {
  document.getElementById("body").innerHTML = ("<h1>Hangman</h1><br><br> Guess what word I\'m thinking of<br><br>Press a letter key on your keyboard to guess a letter.<br><br>The last answer was: " + last + "<br><br>Wins: " + wins + "<br><br>Losses: " + losses + "<br><br>Guesses Left: " + guesses + "<br><br>Your Guesses so far: " + a + "<br>" + show);
  box(tall);
}


function randomWord() {
    var char1 = words[Math.floor(Math.random() * 49)];
    return "" + char1.toLowerCase();
}

function randomLetter() {
    var char1 = chars[Math.floor(Math.random() * 26)];
    return "" + char1;
}

var key = answer.split("")

var show = answer.split("");
show.fill("_");

var letter = randomLetter();
var wins = 0;
var losses = 0;
var guesses = 9;
var a = [];
var page;
//
// letter = randomLetter();

// key.forEach(function(item, i) { if (item == guess) show[i] = guess; });



// document.write("<h1>The Psychic Game</h1><br><br> Guess what letter I\'m thinking of<br><br>Wins: "+wins+"<br><br>Losses: "+losses+"<br><br>Guesses Left: "+guesses+"<br><br>Your Guesses so far: "+a)

document.onkeydown = checkKey;

function checkKey(e) {
    var event = window.event ? window.event : e;
    latest = event.key.toLowerCase();
    key.forEach(function(item, i) {
        if (item == latest) show[i] = latest;
    });
    if (a.indexOf(latest) < 0 && chars.indexOf(latest) > -1) {

        a.push(latest);
        guesses = guesses--;


        if (key.toString(key) == show.toString(show)) {
            wins++;
            guesses = 9;
            letter = randomLetter();
            a = [];
            z = restart();
            z = print();

        } else if (guesses <= 1) {
            losses++;
            guesses = 9;
            letter = randomLetter();
            a = [];
            z = restart();
            z = print();
        } else {
            if (key.indexOf(latest) > -1) {
                z = print();
            } else {
                guesses--;
		              high++;
                  tall = high*10;
                z = print();
            }

        }
    }
}
