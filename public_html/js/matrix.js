// Include microajax code. Source: https://code.google.com/archive/p/microajax/
function microAjax(B,A){this.bindFunction=function(E,D){return function(){return E.apply(D,[D])}};this.stateChange=function(D){if(this.request.readyState==4){this.callbackFunction(this.request.responseText)}};this.getRequest=function(){if(window.ActiveXObject){return new ActiveXObject("Microsoft.XMLHTTP")}else{if(window.XMLHttpRequest){return new XMLHttpRequest()}}return false};this.postBody=(arguments[2]||"");this.callbackFunction=A;this.url=B;this.request=this.getRequest();if(this.request){var C=this.request;C.onreadystatechange=this.bindFunction(this.stateChange,this);if(this.postBody!==""){C.open("POST",B,true);C.setRequestHeader("X-Requested-With","XMLHttpRequest");C.setRequestHeader("Content-type","application/x-www-form-urlencoded");C.setRequestHeader("Connection","close")}else{C.open("GET",B,true)}C.send(this.postBody)}};



/**
 * Definitions of how the pixels on a panel should be sequenced to display a character
 *
 * @type {array}
 */
pixelSequence = { '5x5': [] };

pixelSequence['5x5']["0"] = [0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0];
pixelSequence['5x5']["1"] = [0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1];
pixelSequence['5x5']["2"] = [0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1];
pixelSequence['5x5']["3"] = [0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0];
pixelSequence['5x5']["4"] = [0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0];
pixelSequence['5x5']["5"] = [1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0];
pixelSequence['5x5']["6"] = [0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0];
pixelSequence['5x5']["7"] = [1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0];
pixelSequence['5x5']["8"] = [0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0];
pixelSequence['5x5']["9"] = [0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1];

pixelSequence['5x5']["a"] = [0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1];
pixelSequence['5x5']["b"] = [1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0];
pixelSequence['5x5']["c"] = [0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0];
pixelSequence['5x5']["d"] = [1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0];
pixelSequence['5x5']["e"] = [1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1];
pixelSequence['5x5']["f"] = [1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0];
pixelSequence['5x5']["g"] = [0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1];
pixelSequence['5x5']["h"] = [1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1];
pixelSequence['5x5']["i"] = [1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0];
pixelSequence['5x5']["j"] = [0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1];
pixelSequence['5x5']["k"] = [1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1];
pixelSequence['5x5']["l"] = [1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1];
pixelSequence['5x5']["m"] = [1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1];
pixelSequence['5x5']["n"] = [1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1];
pixelSequence['5x5']["o"] = [0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0];
pixelSequence['5x5']["p"] = [1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0];
pixelSequence['5x5']["q"] = [0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1];
pixelSequence['5x5']["r"] = [1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1];
pixelSequence['5x5']["s"] = [0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1];
pixelSequence['5x5']["t"] = [1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0];
pixelSequence['5x5']["u"] = [1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0];
pixelSequence['5x5']["v"] = [1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0];
pixelSequence['5x5']["w"] = [1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1];
pixelSequence['5x5']["x"] = [1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1];
pixelSequence['5x5']["y"] = [1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0];
pixelSequence['5x5']["z"] = [1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1];

pixelSequence['5x5']["?"] = [0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0];
pixelSequence['5x5']["/"] = [0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0];
pixelSequence['5x5'][" "] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];




/**
 * Matrix class - A Matrix is a collections of panels that can spell a word
 *
 * @param {integer} panelCount Numebr of panels to create
 * @param {string} layoutKey Code to describe the size (Note: Only '5x5' is supported ATM)
 */
Matrix = function( panelCount, layoutKey ){

	this.panelCount = panelCount;
	this.layoutKey = layoutKey;

	this.word = '';
	this.panels = [];

	for( var i = 0; i < this.panelCount; i++){
		this.panels.push( new Panel(this.layoutKey) );
	}
}


/**
 * Method on Matrix 
 *
 * @param {string} newWord The word which should now be displayed
 */
Matrix.prototype.setWord = function( newWord ){

	this.word = newWord.toLowerCase();
	for( var i = 0, iLimit = this.panels.length; i < iLimit; i++ ){
		if( typeof this.word[i] !== 'undefined' ){
			this.panels[i].setLetter( this.word[i] );
		} else {
			this.panels[i].setLetter( ' ' );
		}
	}
}




/**
 * Panel class - A panel is a collection of pixels that can represent a single character
 *
 * @param {string} layoutKey Code to describe the size ie. '5x5'
 */
Panel = function( layoutKey ){

	this.layoutKey = layoutKey;
	this.letter = '';
	this.pixels = [];

	this.elemBox = document.createElement('div');
	this.elemBox.className = 'box';

	document.getElementById('matrixWrap').appendChild(this.elemBox);
	for( var i = 0; i < 25; i++){
		this.pixels.push( new Pixel(this.elemBox) );
	}

}


/**
 * Method on Panel class - Changed the letter that is displayed
 *
 * @param {char} newLetter Code to describe the size ie. '5x5'
 */
Panel.prototype.setLetter = function( newLetter ){
	this.letter = newLetter;

	// Iterate over 25 pixels ('5x5'), putting each one in the appropriate state according to the pixelSequence data
	for( var i = 0; i < 25; i++){
		this.pixels[i].setState( pixelSequence[this.layoutKey][this.letter][i] );
	}
}




/**
 * Pixel class - A pixel can be either black or white
 *
 * @param {element} parentBox The element that the i elements representing pixels should sit inside
 */
Pixel = function( parentBox ){

	this.elemPixel = document.createElement('i');
	this.elemPixel.className = 'white';

	parentBox.appendChild( this.elemPixel );

	this.elemPixel.addEventListener('click', function(){
			
		// Toggle the class between black and white
		if( this.className === 'black' ){
			this.className = 'white'; 
		} else {
			this.className = 'black'; 
		}
	});
}


/**
 * Method on Pixel class - Puts the pixel into the state it should be
 *
 * @param {boolean} newState 1 = Black, 0 = White
 */
Pixel.prototype.setState = function( newState ){

	if( newState ){
		this.elemPixel.className = 'black';
	} else {
		this.elemPixel.className = 'white';
	}

}




/**
 * A ticker that hits the server for a new recently Tweeted word and displays it
 * Sets a timeout with a 5 second delay before making another call
 *
 */
function wordTicker(){
	microAjax("/GET/word.json", function(data){ 

		data = JSON.parse(data);

		matrix.setWord( data.word );

		setTimeout( function(){ 
			wordTicker(); 
		}, 5000 )

	});

}

// Build the 7 letter matrix (Note: Only '5x5' is supported ATM)
matrix = new Matrix( 7, '5x5' );

// Go baby go!!!
wordTicker();
