var counter = document.getElementById("counter");
var button = document.getElementById("count_but");
var count = 0;

button.onclick = function increase() {
	count++;
	counter.innerHTML= count;
	console.log(counter.innerHTML);
}

