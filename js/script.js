var name = "Jacob A. Jordan";
var i = 0;
var letter = name.charAt(i);

onload = function(){

	document.getElementById('name').innerHTML = "";
	
	main();

}

function write(letter){

	var wait = Math.floor((Math.random() * 200) + 50);

	setTimeout(function(){
		document.getElementById('name').innerHTML += letter;
		console.log(document.getElementById('name').innerHTML);
	}, wait);

	setTimeout(function(){
		main();
	}, wait);
}

function main(){
	letter = name.charAt(i);
	i++;
	if( i > name.length)
		return;

	write(letter);
}