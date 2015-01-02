var MorseNode = function(letter, morse){
	this.letter = letter;
	this.morse = morse;
};

var morseArray = [];

morseArray.push(new MorseNode("A", ".-"));
morseArray.push(new MorseNode("B", "-..."));
morseArray.push(new MorseNode("C", "-.-."));
morseArray.push(new MorseNode("D", "-.-"));
morseArray.push(new MorseNode("E", "."));
morseArray.push(new MorseNode("F", "..-."));
morseArray.push(new MorseNode("G", "--."));
morseArray.push(new MorseNode("H", "...."));
morseArray.push(new MorseNode("I", ".."));
morseArray.push(new MorseNode("J", ".---"));
morseArray.push(new MorseNode("K", "-.-"));
morseArray.push(new MorseNode("L", ".-.."));
morseArray.push(new MorseNode("M", "--"));
morseArray.push(new MorseNode("N", "-."));
morseArray.push(new MorseNode("O", "---"));
morseArray.push(new MorseNode("P", ".--."));
morseArray.push(new MorseNode("Q", "--.-"));
morseArray.push(new MorseNode("R", ".-."));
morseArray.push(new MorseNode("S", "..."));
morseArray.push(new MorseNode("T", "-"));
morseArray.push(new MorseNode("U", "..-"));
morseArray.push(new MorseNode("V", "...-"));
morseArray.push(new MorseNode("W", ".--"));
morseArray.push(new MorseNode("X", "-..-"));
morseArray.push(new MorseNode("Y", "-.--"));
morseArray.push(new MorseNode("Z", "--.."));
morseArray.push(new MorseNode("Ä", ".-.-"));
morseArray.push(new MorseNode("Á", ".--.-"));
morseArray.push(new MorseNode("Å", ".--.-"));
morseArray.push(new MorseNode("Ch", "----"));
morseArray.push(new MorseNode("É", "..-.."));
morseArray.push(new MorseNode("Ñ", "--.--"));
morseArray.push(new MorseNode("Ö", "---."));
morseArray.push(new MorseNode("Ü", "..--"));
morseArray.push(new MorseNode("0","-----"));
morseArray.push(new MorseNode("1",".-----"));
morseArray.push(new MorseNode("2","..---"));
morseArray.push(new MorseNode("3","...--"));
morseArray.push(new MorseNode("4","....-"));
morseArray.push(new MorseNode("5","....."));
morseArray.push(new MorseNode("6","-...."));
morseArray.push(new MorseNode("7","--..."));
morseArray.push(new MorseNode("8","---.."));
morseArray.push(new MorseNode("9","----."));

var Translate = function(text){
	var morseCode = '';
	for(var i = 0; i < text.length; i++){
		var letter = text[i];
		for(node in morseArray){
			morseLetter = morseArray[node].letter;
			if( morseLetter === letter.toUpperCase()){
				morseCode += morseArray[node].morse + " ";
				break;
			}
		}
	}
	return morseCode;
};

var main = function(){
	$('#Text_Area').keyup(function(){
		
		var content = $(this).val();
		var translated = Translate(content);
		$('#Morse_Area').val(translated);
	});
}

$(document).ready(main);
