/// @ts-check
/// <reference path=".gitpod/p5.global-mode.d.ts" />"use strict";


/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */




/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const UITLEG = 0;
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var spelerX = 200; // x-positie van speler
var spelerY = 100; // y-positie van speler

var kogelX = 0;    // x-positie van kogel
var kogelY = 0;    // y-positie van kogel

var vijandX = 0;   // x-positie van vijand
var vijandY = 0;   // y-positie van vijand

var score = 0; // aantal behaalde punten

var balX = 50;
var balY = 90;
var balXspeed = 15;
var balYspeed = 15;

var rectWidth = 250;
var rectHeight = 25;
var opp = 35;

var started = false;






/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */
/* 
 * Tekent het speelveld
 */




var tekenVeld = function () {
	fill(242, 242, 242);
	rect(12, 20, 1200, 790);
};


/**
 * Tekent de vijand
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
;


var tekenVijand = function draw(x, y) {
	background(130, 200, 150);
	fill("black");
	ellipse(balX, balY, opp, opp);

};


/**
 * Tekent de kogel of de bal
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */

var tekenKogel = function (x, y) {

};


/**
 * Tekent de speler
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */

var tekenSpeler = function (x, y) {
	

	fill(242, 242, 242);
	rect(mouseX, 0, rectWidth, rectHeight);
	fill(242, 242, 242);
	rect(mouseX, 810, rectWidth, rectHeight);

};

/**
 * Updatet globale variabelen met positie van vijand of tegenspeler
 */

var beweegVijand = function () {


	balX += balXspeed;
	balY += balYspeed;
	
	/* if (/*balX < rectWidth + rectHeight && balX > rectWidth  && balY  >  0 && balY < 810 + rectHeight) {
		balXspeed = -balXspeed;
		balYspeed = -balYspeed;
	} */


  

   if (balX > width - opp || balX < opp) {
     balXspeed = -balXspeed;
   }
  

	if ((balX > mouseX &&
      balX < mouseX + rectWidth) &&
    (balY + rectHeight >= 810)) {
    balXspeed *= -1;
    balYspeed *= -1;
		}

	


};





/**
 * Updatet globale variabelen met positie van kogel of bal
 */

var beweegKogel = function () {

};


/**
 * Kijkt wat de toetsen/muis etc zijn.
 * Updatet globale variabele spelerX en spelerY
 */

var beweegSpeler = function () {


};
/**
 * Zoekt uit of de vijand is geraakt
 * @returns {boolean} true als vijand is geraakt
 */

var checkVijandGeraakt = function () {

	return false;
};


/**
 * Zoekt uit of de speler is geraakt
 * bijvoorbeeld door botsing met vijand
 * @returns {boolean} true als speler is geraakt
 */

var checkSpelerGeraakt = function () {

	return false;
};


/**
 * Zoekt uit of het spel is afgelopen
 * @returns {boolean} true als het spel is afgelopen
 */

var checkGameOver = function () {

	return false;
};


/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */

function setup() {
	// Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
	createCanvas(1220, 835);


	// Kleur de achtergrond blauw, zodat je het kunt zien
	background("purple");
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
	switch (spelStatus) {
		case SPELEN:
			beweegVijand();
			beweegKogel();
			beweegSpeler();

			if (checkVijandGeraakt()) {
				// punten erbij
				// nieuwe vijand maken
			}

			if (checkSpelerGeraakt()) {
				// leven eraf of gezondheid verlagen
				// eventueel: nieuwe speler maken
			}

			tekenVeld();
			tekenVijand(vijandX, vijandY);
			tekenSpeler(spelerX, spelerY);

			if (checkGameOver()) {
				spelStatus = GAMEOVER;
			}
			break;
	}
};