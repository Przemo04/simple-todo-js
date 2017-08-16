//alert("Simple");
function newElement() {

  var valueInput = document.getElementById('inputTask').value;
	var textNode = document.createTextNode(valueInput)
	var createLi = document.createElement('li');
	createLi.appendChild(textNode);

	document.getElementById('list-tasks-ul').appendChild(createLi);

	console.log(valueInput);

}
