"use strict";

//-----------ToDoList--------------

var inputTask = document.getElementById("input-task"),
	todoTask = document.querySelector(".todo-task"),
	todoStorage = "";

inputTask.addEventListener("keypress", addTask, false);

function addTask (ev) {
	if (ev.keyCode == "13") {

		let val = inputTask.value;
		if (val == "") {
			alert("Введите задачу");
		}
		else {
			var divTaskContainer = document.createElement("div"),
			pTask = document.createElement("p"),
			divDeleteWrap = document.createElement("div"),
			spanDelete = document.createElement("div"),
			iconDone = document.createElement("div"),
			imgIconDone = document.createElement("img");

			divTaskContainer.setAttribute("class", "task-container");
			pTask.setAttribute("class", "task");
			divDeleteWrap.setAttribute("class", "delete-wrap");

			spanDelete.setAttribute("class", "unselectable");   

			iconDone.setAttribute("class", "icon-done current-task");
			imgIconDone.className = "img-icon-done";
			imgIconDone.setAttribute("src", "img/icons-done-48.png");

			pTask.innerHTML = val;			
			inputTask.value = "";

			iconDone.appendChild(imgIconDone);
			divTaskContainer.appendChild(iconDone);
			divTaskContainer.appendChild(pTask);
			divDeleteWrap.appendChild(spanDelete);
			divTaskContainer.appendChild(divDeleteWrap);
			todoTask.appendChild(divTaskContainer);			
			toLocal();		
			
		}
	}
	
};

if (localStorage.getItem("todo")) {
	todoTask.innerHTML = localStorage.getItem("todo");
};

function toLocal () {
	todoStorage = todoTask.innerHTML;
	localStorage.setItem("todo", todoStorage);
};

let isDone = 2;

function clickToDoTask (ev) {

	if (ev.target.classList == "task" && !(ev.target.parentNode.classList == "task-container task-done") ) {

		ev.target.parentNode.setAttribute("class", "task-container task-done");
		ev.target.parentNode.childNodes[0].setAttribute("class", "icon-done task-done");
		toLocal();
	}
	else if (ev.target.classList == "task") {
		ev.target.parentNode.setAttribute("class", "task-container");
		ev.target.parentNode.childNodes[0].setAttribute("class", "icon-done current-task");
		toLocal();
	};

//---------------------------------------
	if (ev.target.classList == "delete-wrap") {
		ev.target.parentNode.parentNode.removeChild(ev.target.parentNode);
		toLocal();
	}

	if (ev.target.classList == "unselectable") {
		ev.target.parentNode.parentNode.parentNode.removeChild(ev.target.parentNode.parentNode);
		toLocal();

	}

}

todoTask.addEventListener("click", clickToDoTask, false);


//----------end-------------------

//-----------Tabbooks--------------

var itemAddUrl = document.getElementById("item-add-url"),
	modalWrapper = document.getElementsByClassName("modal-wrapper")[0],
	editModalWrapper = document.getElementsByClassName("edit-modal-wrapper")[0],
	closeEdit = document.getElementsByClassName("close")[1]
	close = document.getElementsByClassName("close")[0];

close.addEventListener("click", function () {
	modalWrapper.style.display = "none";
});

closeEdit.addEventListener("click", function () {
	editModalWrapper.style.display = "none";
});

window.addEventListener("click", function (ev) {
	if (ev.target == modalWrapper) {
		modalWrapper.style.display = "none";
	}
	if (ev.target == editModalWrapper) {
		editModalWrapper.style.display = "none";
	}
});

var tabContainer = document.getElementsByClassName("tab-container")[0],
	inputName = document.getElementsByClassName("input-site")[0],
	inputURL = document.getElementsByClassName("input-site")[1],
	addTabButton = document.getElementById("add-tab-button"),
	editName = document.getElementsByClassName("edit-site")[0],
	editURL = document.getElementsByClassName("edit-site")[1],
	editTabButton = document.getElementById("edit-tab-button"),
	tabStorage = "";


addTabButton.addEventListener("click", addTab, false);
editTabButton.addEventListener("click", editTab, false);
inputURL.addEventListener("keypress", function (ev) {
	if (ev.keyCode == "13") {
		addTab();
	}
}, false);

editURL.addEventListener("keypress", function (ev) {
	if (ev.keyCode == "13") {
		editTab();
	}
}, false);
var urlValue = "";

function addTab () {
	var tabItem = document.createElement("div"),
		itemName = document.createElement("span"),
		deleteTab = document.createElement("span"),
		tabItemAdd = document.getElementsByClassName("tab-item-add")[0],
		nameValue = "";
		
	nameValue = inputName.value;
	urlValue = inputURL.value;
	inputURL.value = "www.";

	tabItem.className = "tab-item";
	itemName.className = "item-name";
	deleteTab.className = "delete-tab unselectable";

	deleteTab.innerHTML = "&times;";
	itemName.innerHTML = nameValue;

	tabItem.style.background = "url(http://mini.s-shot.ru/?http://" + urlValue + ")";
	tabItem.style.backgroundPosition = "center center";
	tabItem.style.backgroundSize = "contain";
	tabItem.setAttribute("data-url", urlValue);
	tabItem.setAttribute("data-name", nameValue);

	nameValue = "";
	inputName.value = "";
	modalWrapper.style.display = "none";

	tabItem.appendChild(deleteTab);
	tabItem.appendChild(itemName);
	tabContainer.insertBefore( tabItem, tabItemAdd);
	toLocalTab ();

};

function editTab (ev) {

	var itemName = self.querySelector(".item-name");
	itemName.innerHTML = editName.value;

	self.dataset.name = editName.value;
	self.dataset.url = editURL.value;

	self.style.background = "url(http://mini.s-shot.ru/?http://" + editURL.value + ")";
	self.style.backgroundPosition = "center center";
	self.style.backgroundSize = "contain";

	editModalWrapper.style.display = "none";
	toLocalTab();
};



function clickTabContainer (ev) {
	if (ev.target.id == "item-add-url") {
		modalWrapper.style.display = "block";
	}
	
	if (ev.target.classList == "delete-tab unselectable") {
		ev.preventDefault();
		ev.target.parentNode.parentNode.removeChild(ev.target.parentNode);
		toLocalTab();
	}

	if (ev.target.classList == "tab-item ui-sortable-handle" || ev.target.classList == "tab-item" ) {
		console.log(ev.target.dataset.url);
		window.open('http://' + ev.target.dataset.url, '_blank');
		ev.target.style.background = "url(http://mini.s-shot.ru/?http://" + ev.target.dataset.url + ")";
		ev.target.style.backgroundPosition = "center center";
		ev.target.style.backgroundSize = "contain";
		toLocalTab();
	}

	if (ev.target.classList == "item-name") {
		editName.value = ev.target.parentNode.dataset.name;
		editURL.value = ev.target.parentNode.dataset.url;
		editModalWrapper.style.display = "block";
		self = ev.target.parentNode;
	}
	toLocalTab();
}
var self;
tabContainer.addEventListener ("click", clickTabContainer, false);

if (localStorage.getItem("tab")) {
	tabContainer.innerHTML = localStorage.getItem("tab");
}

function toLocalTab () {
	tabStorage = tabContainer.innerHTML;
	localStorage.setItem("tab", tabStorage);
}

$( function() {
	$( "#sortable" ).sortable();
	$( "#sortable" ).disableSelection();
	toLocalTab();
});

//----------end-------------------



//-----------Weather--------------


var valueID = "",
	weatherHTML = "",
	weatherStorage = "";

$(document).ready (function () {
	$(".current-city").click( function (ev) {
		$(".city").css("display", "flex");
	})

});

$(document).ready (function () {
	$(".city").click( function (ev) {
		if (ev.target.classList == "city-select") {
			valueID = ev.target.dataset.id;
			$(".current-city").text(ev.target.innerHTML);
			$(".current-city").attr("data-id", ev.target.dataset.id);
			$.get (
				"http://api.openweathermap.org/data/2.5/weather",
				{
					"id": valueID,
					"appid": "28880f2acf6e60a4c643a8a339b53954",
				},
				load
			);	
			$(".city").css("display", "none");
			toLocalWeather ();
		}
	})
});

function str (val,len) {
	var strVal=val.toString();
	while ( strVal.length < len )
		strVal='0'+strVal;
	return strVal;
}

function load (data) {
	let lastUpdate = new Date (data.dt*1000),
		sunrise = new Date (data.sys.sunrise*1000),
		sunset = new Date (data.sys.sunset*1000);

	let sunriseMinute = str(sunrise.getMinutes(),2),
		sunriseHour = str(sunrise.getHours(),2),
		sunsetMinute = str(sunset.getMinutes(),2),
		sunsetHour = str(sunset.getHours(),2);

	let imgWeather = "",
		tempCurrent = "",
		speed = "",
		humidity = "",
		pressure = "",
		sunriseHTML = "",
		sunsetHTML = "";

	imgWeather += '<img src="http://openweathermap.org/img/w/' + data.weather[0].icon + '.png">';

	tempCurrent += '<span class="temp-current">' + Math.round(data.main.temp-273) + ' &#176;C</span>' + '\n';
	sunriseHTML += '<span class="temp-info-text">расcвет: ' + sunriseHour + ":" + sunriseMinute + '</span>' + '\n';
	sunsetHTML += '<span class="temp-info-text">закат: ' + sunsetHour + ":" + sunsetMinute + '</span>';

	humidity += '<span class="temp-info-text">влажность: ' + data.main.humidity + ' &#37;</span>' + '\n';
	pressure += '<span class="temp-info-text">давление: ' + Math.round(data.main.pressure * 0.00750063755 * 100) + ' мм.рт.ст</span>' + '\n';
	speed += '<span class="temp-info-text">ветер: ' + data.wind.speed + ' м/с</span>';

	$('.img-weather').html(imgWeather);
	$("#temp-current").html(tempCurrent);
	$('#sunrise').html(sunriseHTML);
	$('#sunset').html(sunsetHTML);
	$('#humidity').html(humidity);
	$('#pressure').html(pressure);
	$('#speed').html(speed);

}

function tick () {
	$.get (
		"http://api.openweathermap.org/data/2.5/weather",
		{
			"id": $(".current-city")[0].dataset.id,
			"appid": "28880f2acf6e60a4c643a8a339b53954",
		},
		load
	);	
}

if (localStorage.getItem("weather")) {
	weatherHTML = localStorage.getItem("weather");
	$(".select").html(weatherHTML);
}

$(document).ready (function () {
	toLocalWeather ();
	setInterval(tick,600000);
});

function toLocalWeather () {
	weatherHTML = $(".select").html();
	localStorage.setItem("weather", weatherHTML);
}

$(document).ready (function () {
	if (!($(".current-city")[0].dataset.id == 0)) {
		$.get (
				"http://api.openweathermap.org/data/2.5/weather",
				{
					"id": $(".current-city")[0].dataset.id ,
					"appid": "28880f2acf6e60a4c643a8a339b53954",
				},
				load
		);	
	}
});


//----------end-------------------



  //---------------------------------------поиск гугл

  $("#search").keypress(function (ev) {
	  if (ev.keyCode == "13") {
		window.open("https://www.google.ru/search?newwindow=1&q=" + $("#search").val());
		$("#search").val("");
		$("#search").attr("placeholder", "Google search");
	  }
  });
