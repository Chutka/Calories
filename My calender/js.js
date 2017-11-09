function calendar(address){
var tb = document.getElementById(address);
var a = new Date();
var now = new Date(a.getFullYear(), a.getMonth());
var to1 = ((now.getDay()+6)%7+1);
var d = new Date(now.getFullYear(), now.getMonth()+1);
d.setDate(0);
var end = d.getDate();
for(var i = 0; i < 5; i++){
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
}
function titleCalendar(address){
var a = new Date();
var now = new Date(a.getFullYear(), a.getMonth());
var month = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июнь','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
var cap = document.getElementById(address);
cap.innerHTML = month[now.getMonth()];
}
calendar('tbody');
titleCalendar('caption');
