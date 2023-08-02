const input = document.getElementById("words");
const container = document.querySelector(".container");

const generateWord = (n) => {
    let text = "";
    const letters = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < n; i++) {
        const random = (Math.random() * 25).toFixed(0);
        text += letters[random];
    }
    return text;
}


let noOfWords;
const generatePara = () => {
    noOfWords = Number(input.value);

    const paras = document.createElement("p");

    let data = "";
    for (let i = 0; i < noOfWords; i++) {
        randomNumber = ((Math.random() * 15).toFixed(0));
        data += generateWord(randomNumber);
        data += " ";

    }

    paras.innerText = data;

    paras.setAttribute("class", "para");

    container.append(paras);
}