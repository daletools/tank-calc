//tk = [L/inch, top slope volume, top slope height, bottom slope volume, bottom slope height, total volume]
var tkA = [38.78,51,1,2,4676];			//1-6,16,18
var tkB = [75.70,114,0,720,16,10514];		//7-9,13-15
var tkC = [75.84,-245,3,245,3,10046];		//10,12
var tkD = [76.77,-225,3,225,3,11044];		//11,31
var tkE = [32.38,49,2,62,0,4709];		//17
var tkF = [31.5,0,0,52,2,2320];			//19
var tkG = [76.12,-185,3,185,3,10874];		//20-22,24-26
var tkH = [31.5,0,0,52,2,2320];			//27
var tkI = [0];					//28
var tkJ = [171.91,-565,5,565,5,24166];		//29,30
var tkK = [85.02,-170,4,335,0,11387];		//32-35
var tkL = [385.93,-1350,7,830,5,85540];		//36,37
var tkM = [219.08,-657,6,570,5,48745];		//38,39
var tkN = [77.71,0,0,160,0,7620];		//40
var tkO = [83.66,0,0,690,13,11440];		//41-44
var tkP = [68.72,295,0,205,0,5860];		//45-50
var tkQ = [17.54,0,0,0,0,1000];			//51,52
var tkR = [83.54,540,0,370,7,12460];		//53-58
var tkS = [87.54,0,0,860,0,16267];		//59
var tkT = [56.3,199,0,0,0,6980];		//60-65
var tkU = [76.77,115,3,662,15,10450];		//O1,O2
var tkV = [219.08,0,0,570,5,39347];		//O3,O4
var tkW = [265.9,0,0,0,0,60853];		//O5,O6
var tkX = [68.91,0,0,252,8,5420];		//R1,R2
var tkY = [37.17,0,0,0,0,1300];			//Stella Pan
var tkZ = [56.60,0,0,162,2,3388];		//Mixer

function gettank() {
	var tk = document.getElementById("tank");
	var tankname = [0,0,0,0,0,0,0];
	switch(tk) {
		case '1':
		case '2':
		case '3':
		case '4':
		case '5':
		case '6':
		case '16':
		case '18':
		tankname = tkA;
		break;

		case '7':
		case '8':
		case '9':
		case '13':
		case '14':
		case '15':
		tankname = tkB;
		break;

		case '10':
		case '12':
		tankname = tkC;
		break;

		case '11':
		case '31':
		tankname = tkD;
		break;
	}
	console.log(tankname + 'test' + tkA + ' ' + tank);
}