// Model
const app = document.getElementById('app');
const optionsPositive = ['It is certain','It is decidedly so','Without a doubt','Yes definitely','You may rely on it','As I see it, yes','Most likely','Outlook good', 'Yes',' Signs point to yes'];
const optionsNeutral = ['Reply hazy, try again','Ask again later','Better not tell you now','Cannot predict now','Concentrate and ask again'];
const optionsNegative = ['Do not count on it','My reply is no','My sources say no','Outlook not so good','Very doubtful'];
var optionsAll = [
    ['It is certain','It is decidedly so','Without a doubt','Yes definitely','You may rely on it','As I see it, yes','Most likely','Outlook good', 'Yes',' Signs point to yes'],
    ['Reply hazy, try again','Ask again later','Better not tell you now','Cannot predict now','Concentrate and ask again'],
    ['Do not count on it','My reply is no','My sources say no','Outlook not so good','Very doubtful']
];
let checkagain='';
let output = document.getElementById('magic8Ball');
let mood; //for determining positive, neutral or negative responses
// View
updateView();
function updateView(){
    html = /*html*/ `
    <div id="magic8Ball" ></div>
    
    <div class="arrow-down" onclick="shakeMe()"></div>
    <div class="text" id="answers" ></div>
    <div class="shadow"></div>
    
    `;
    app.innerHTML = html;
}

// Controler

function numGen(max) {
    return Math.floor(Math.random() * max)
}

function shakeMe(){
    console.log('shaken and shook');
    let answerIndex
    let row =numGen(3);
    if(row == 0) {
        column = numGen(10);
    }
    else {
         column = numGen(5);
    }
    console.log(row, column);
    console.log(optionsAll[row][column]);
    //check = optionsAll[row][column];
    //if (check !== checkagain){
        //output.innerHTML = check;
        //checkagain = check;

   // }
    //else {
      //  shakeMe();
    //}
    document.getElementById('answers').innerHTML=optionsAll[row][column];
}

var element = optionsAll[1][3];
console.log(element);

