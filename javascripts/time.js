var timestamps = document.querySelectorAll(".ts");
var titleSet = false;
for( var i=0; i< timestamps.length; i++){
	var ts = timestamps[i];
	var unixtime = ts.dataset.time;
	if(!titleSet){
		var title = document.getElementById("titleDate");
		var tunixtime = title.dataset.time;
		var tval = moment.unix(tunixtime).format("dddd MMMM Do YYYY");
		title.innerHTML = tval;
		titleSet = true;
	}
	var val = moment.unix(unixtime).format("HH:mm");
	ts.innerHTML = val;
}
var info = document.getElementById("timeinfo");
info.innerHTML = "*Times are relative to local timezone";
