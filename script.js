
const figure = document.querySelector(".figure");
const figureTypes = document.querySelectorAll(".type");
const colorTypes = document.querySelectorAll(".color");
const content = document.querySelector("p");
const inputText = document.querySelector("input");
const inputButton = document.querySelector(".addText");
const resetButton = document.querySelector(".reset");
//Выбор фигуры
figureTypes.forEach(type => {
    type.addEventListener("click", (e) =>{  
        figureType(e.target.textContent);
     })
});
//Выбор цвета
colorTypes.forEach(type => {
    type.addEventListener("click", (e) =>{  
        if (figure.classList.contains("hidden")){
            alert("Сперва выберите фигуру");
        } else {
        figure.style.backgroundColor = getColorByTitle(e.target.textContent);
        }
     })
});
//Изменение текста
inputButton.addEventListener("click", (e) => {
    const textValue = inputText.value;
    if (textValue.trim()===""){
        alert("Необходимо ввести текст");
    }else{
content.textContent = inputText.value;
    }
})
//Сброс
resetButton.addEventListener("click", (e) => {
    figure.classList.add("hidden");
    content.textContent = "";
})
//Функция для изменения фигуры
function figureType(type){
    figure.classList.remove("hidden");
    if (type==="Круг"){
        figure.style.borderRadius = "100%";
    } else {
        figure.style.borderRadius = "0%";
    }
}
//Поиск цвета по названию из colors
function getColorByTitle(title) {
    return colors.find(color => color.title === title).hex;
}

const colors = [
    {
      title: "Красный",
      hex: "#E32636"
    },
    {
      title: "Черный",
      hex: "#000000"
    },
    {
      title: "Зеленый",
      hex: "#138808"
    },
    {
      title: "Синий",
      hex: "#1560BD"
    }
  ];