'use strict';

{
	window.addEventListener('DOMContentLoaded', function(){
		let params = decodeURI(location.search);
		params = params.substring(1);
		let paramArray = [];
		paramArray = params.split("&");
		let tableContent = "";
		paramArray.forEach(function(item, index){
			let keyValue = [];
			keyValue = item.split("=");
			let tr = document.createElement("tr");
			let tdName = document.createElement("td");
			tdName.textContent = keyValue[0];
			let tdValue = document.createElement("td");
			tdValue.textContent = keyValue[1];
			tr.appendChild(tdName);
			tr.appendChild(tdValue);
			let e = document.getElementById("test");
			e.appendChild(tr);
		});
	});
}