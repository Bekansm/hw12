const figure = document.querySelector(".figure");
const figureTypes = document.querySelectorAll(".type");
const colorTypes = document.querySelectorAll(".color");
const inputButton = document.querySelector(".addText");
const inputText = document.querySelector("input");
const content = document.querySelector("p");
const resetButton = document.querySelector(".reset");
//Выбор фигуры
figureTypes.forEach(type => {
    type.addEventListener("click", (e) =>{ figureType(e.target.textContent);
     })
});
//Выбор цвета
colorTypes.forEach(type => {
    type.addEventListener("click", (e) =>{  
        figure.style.backgroundColor = figure.classList.contains("hidden") ? alert("Сперва выберите фигуру") : colors[e.target.textContent].hex;
     })
});
//Изменение текста
inputButton.addEventListener("click", (e) => {  
    const textValue = inputText.value.trim();
    content.textContent = textValue!== "" ? inputText.value : alert("Необходимо ввести текст");
})
//Сброс
resetButton.addEventListener("click", (e) => {
    figure.classList.add("hidden");
    content.textContent = "";
    inputText.value = "";
})
//Функция для изменения фигуры
function figureType(type){
    figure.classList.remove("hidden");
    figure.style.borderRadius = type === "Круг" ? "50%" : "0%";
}

const colors = {
    "Красный": { hex: "#E32636" },
    "Черный": { hex: "#000000" },
    "Зеленый": { hex: "#138808" },
    "Синий": { hex: "#1560BD" }
};