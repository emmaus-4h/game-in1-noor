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

var h = 50;
var t = 90;
var opp = 50;
var opp = 40;
var hVeranderd = 5;
var tVeranderd = 5;






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


var tekenSpeler = function (x, y) {

};


var tekenVijand = function draw(x, y) {
	background(130, 200, 150);


	/*var h = 70;
	var e = 1;
	var t = 90;
	var opp1 = 50;
	var opp2 = 40;*/


	fill("black");
	ellipse(h, t, opp, opp);





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
	rect(mouseX, 0, 250, 25);
	fill(242, 242, 242);
	rect(mouseX, 810, 250, 25);

};

/**
 * Updatet globale variabelen met positie van vijand of tegenspeler
 */

var beweegVijand = function () {
	var speedh = 10;
	var speedt = 15;

	h = speedh + h;
	t = speedt + t;

	if (h > 770 || h < 0) {
	speedh = speedh * -1;
	}
	if (t > 700 || t < 0) {
		speedt *= -1;
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
	var x = width / 2;
	var y = height;

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