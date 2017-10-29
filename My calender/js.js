var tb = document.getElementById('tbody');
var a = new Date();
var now = new Date(a.getFullYear(), a.getMonth()+1);
var to1 = ((now.getDay()+6)%7+1);
console.log((now.getDay()+6)%7+1);
var d = new Date(now.getFullYear(), now.getMonth()+1);
d.setDate(0);
var end = d.getDate();
console.log(end);


for(var i = 0; i < 6; i++){
	var tr = document.createElement('tr');
	for(var j = 0; j < 7; j++){
		var td = document.createElement('td');
		if(i < 1){
		if(j >= to1-1){		
		td.innerHTML = (j+1-(to1-1))+i*7;
		}
		}
		if(i > 0){
			var sum = (j+1-(to1-1))+i*7
			if(sum <= end){
			td.innerHTML = sum ;
			}
		}
		tr.appendChild(td);
	}
	tb.appendChild(tr);
}


console.log(tb)