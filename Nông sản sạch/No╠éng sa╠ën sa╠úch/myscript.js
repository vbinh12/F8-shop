function sub(x)
{
	a = parseInt (document.getElementById(x).value);
	if (a > 1)
		a -= 1;
	document.getElementById(x).value = a;
}
function plus(x)
{
	a = parseInt (document.getElementById(x).value);
	a += 1;
	document.getElementById(x).value = a;
}

var i = 1;
var N = 3;
function next(){
	if(i<N)
		i += 1;
	else
		i = 1;
	document.getElementById("slide").setAttribute("src",i+".jpg");
}
function back(){
	if(i>1)
		i -= 1;
	else
		i = N;
	document.getElementById("slide").setAttribute("src",i+".jpg");
}
function autoPlay(){
	setInterval(next, 5000);
}
