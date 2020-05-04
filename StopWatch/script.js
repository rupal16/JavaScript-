let hour = 0;
let min = 0;
let sec = 0;
let status = "stopped";

const stopwatch = () => {
	sec++;
	if( sec / 60 == 1){
		sec = 0;
		min++;

		if( min / 60 == 1){
		min = 0;
		hour++;
	}
	}
	document.getElementById("display").innerHTML = hour +" : " + min + " : " + sec;
	}

const startstop = () => {
	if(status === "stopped"){
		interval = window.setInterval(stopwatch, 1000);
		document.getElementById("startstop").innerHTML = "Stop";
		status = "started";
	}
	else{
		window.clearInterval(interval);
		document.getElementById("startstop").innerHTML = "Start";
		status = "stopped";
	}
	}

const reset = () => {
	window.clearInterval(interval);
	hour =0;
	min =0;
	sec =0;
	document.getElementById("display").innerHTML = "00 : 00 : 00";
	document.getElementById("startstop").innerHTML = "Start";
}
