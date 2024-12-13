const windowElement = document.querySelector(".windowElement");
const figureTypes = document.querySelectorAll(".type");
const colorTypes = document.querySelectorAll(".color");
const inputButton = document.querySelector(".addText");
const inputText = document.querySelector("input");
let content = document.createElement("p");
const resetButton = document.querySelector(".reset");
let currentFigure = null;

//Выбор фигуры
figureTypes.forEach((type) => {
	type.addEventListener("click", (e) => {
		figureType(e.target.textContent);
	});
});
//Выбор цвета
colorTypes.forEach((type) => {
	type.addEventListener("click", (e) => {
		if (currentFigure === null) {
			alert("Сперва выберите фигуру");
		} else {
			currentFigure.style.backgroundColor = colors[e.target.textContent].hex;
		}
	});
});
//Изменение текста
inputButton.addEventListener("click", () => {
	const textValue = inputText.value.trim();
	if (currentFigure === null) {
		alert("Сперва выберите фигуру");
	} else if (textValue === "") {
		alert("Необходимо ввести текст");
	} else {
		content.textContent = textValue;
	}
});
//Сброс
resetButton.addEventListener("click", (e) => {
	if (currentFigure !== null) {
		currentFigure.remove();
		content.textContent = "";
		inputText.value = "";
		currentFigure = null;
	}
});
//Функция для изменения фигуры
function figureType(type) {
	const newRadius = type === "Круг" ? "50%" : "0%";
	if (
		currentFigure !== null &&
		currentFigure.style.borderRadius === newRadius
	) {
		return;
	}

	currentFigure !== null ? currentFigure.remove() : null;

	const figure = document.createElement("div");
	figure.classList.add("figure");
	figure.style.borderRadius = newRadius;
	windowElement.appendChild(figure);

	currentFigure = figure;
	currentFigure.appendChild(content);
}

const colors = {
	Красный: { hex: "#E32636" },
	Черный: { hex: "#000000" },
	Зеленый: { hex: "#138808" },
	Синий: { hex: "#1560BD" },
};
