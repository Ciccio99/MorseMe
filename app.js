var MorseNode = function(letter, morse){
	this.letter = letter;
	this.morse = morse;
};

var morseDict = {
	"A" : ".-",
	"B" : "-...",
	"C" : "-.-.",
	"D" : "-.-",
	"E" : ".",
	"F" :  "..-.",
	"G" : "--.",
	"H" : "....",
	"I" : "..",
	"J" : ".---",
	"K" : "-.-",
	"L" : ".-..",
	"M" :  "--",
	"N" : "-.",
	"O" : "---",
	"P" : ".--.",
	"Q" : "--.-",
	"R" : ".-.",
	"S" : "...",
	"T" : "-",
	"U" : "..-",
	"V" : "...-",
	"W" : ".--",
	"X" : "-..-",
	"Y" : "-.--",
	"Z" : "--..",
	"Ä" : ".-.-",
	"Á" : ".--.-",
	"Å" : ".--.-",
	"É" : "..-..",
	"Ñ" : "--.--",
	"Ö" : "---.",
	"Ü" : "..--",
	"0" : "-----",
	"1" : ".-----",
	"2" : "..---",
	"3" : "...--",
	"4" : "....-",
	"5" : ".....",
	"6" : "-....",
	"7" : "--...",
	"8" : "---..",
	"9" : "----.",
	" " : "  ",
	"." : ".-.-.-",
	"," : "--..--",
	":" : "---...",
	"?" : "..--..",
	"'" : ".----.",
	"-" : "-....-",
	"/" : "-..-.",
	"(" : "-.--.-",
	")" : "-.--.-",
	'"' : ".-..-.",
	"@" : ".--.-.",
	"=" : "-...-"
};

var TranslateText = function(text){
	var morseCode = '';
	for(var i = 0; i < text.length; i++){
		var letter = text[i];
		var morse = morseDict[letter.toUpperCase()];
		if(morse != null)
			morseCode +=  morse + " ";
	}
	return morseCode;
};

var TranslateMorse = function(text){
	var morseArray = text.split(" ");
	var textCode = '';
	for(i in morseArray){
		dictTraverse:
		for(key in morseDict){
			if(morseArray[i] === morseDict[key]){
				textCode += key;
				break dictTraverse;
			}
		}
	}
	return textCode;
};

var main = function(){
	$('#Text_Area').keyup(function(){
		var content = $(this).val();
		var translated = TranslateText(content);
		$('#Morse_Area').val(translated);
	});

	$('#Morse_Area').keyup(function(){
		var content = $(this).val();
		var translated = TranslateMorse(content);
		$('#Text_Area').val(translated);
	});
}

$(document).ready(main);
