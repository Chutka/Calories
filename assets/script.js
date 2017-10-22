var blockAdd = document.getElementById('block__add');
block__add.classList.add('d-none');
document.getElementById('add_block').addEventListener('click', function() {
	blockAdd.classList.remove('d-none');
	blockAdd.classList.add('d-flex');
	console.log('+');
	this.remove();
});

function Product(name, count, colories) {
	this.name = name;
	this.count = count;
	this.colories = colories;
}

var tBody = document.getElementById('t_body');
var countNodes = parseInt(tBody.childNodes[tBody.childNodes.length - 2].childNodes[1].innerHTML) + 1 || 1;

function appendInTable(table, product) {
	table.innerHTML += '<tr>'+
		'<td>' + countNodes + '</td>' + 
			'<td>' + product.name + '</td>' + 
			'<td>' + product.count + '</td>' + 
			'<td>' + product.colories + '</td>' + 
		'</tr>';
	countNodes++;
}


function validationIData(product) {
	console.log(typeof product.name);
	// var data = typeof product.name 
	return true;
}
document.getElementById('button__add').addEventListener('click', function() {
	var prod = new Product(
		document.getElementById('name').value,
		document.getElementById('count').value,
		document.getElementById('colories').value,
		);
	if(validationIData(prod)) {
		appendInTable(tBody, prod);
	}
});