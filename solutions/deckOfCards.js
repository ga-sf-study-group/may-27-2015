
function Card(face, suite) {
    this.face = face;
    this.suite = suite;
}

Card.prototype.toString = function() {
    return '(' + this.face.toString() + ', ' + this.suite + ')';
}

function genDeck() {
    var suite = ['Spade','Club','Diamond','Heart'];
    var face = ['Ace',2,3,4,5,6,7,8,9,10,'Jack','Queen','King'];
    var deck = [];
    for(var i = 0; i < suite.length; i++) {
        for(var j = 0; j < face.length; j++) {
            deck.push(new Card(face[j], suite[i]));
        }
    }
    return deck;
}

function fisherYatesShuffle(array) {
    for(var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * i);
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
var deck = genDeck();
console.log(deck);
console.log(fisherYatesShuffle(deck));
