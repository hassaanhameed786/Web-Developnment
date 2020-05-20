
const msg= document.getElementById('msg');


const randomNumber = getRandomNum();
console.log('Number : ',  randomNumber );

    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    var Recognition = new window.SpeechRecognition();

    // start Recognition 

    Recognition.start();

function getRandomNum ()
{
    return Math.floor(Math.random() * 100 )  +1 ;
}

function writeMessage(messge) {

    msg.innerHTML =`
        <div>You said :</div>
        <span class="box">${messge}</span>
    `;

}

function checkNumber(message){
    let numb = +message;

    if (Number.isNaN(numb)) {
        msg.innerHTML +=`<div>That is not a Valid number </div>`;
        return;
    }

    // check is in the range 

    if (numb > 100 || numb < 1 ) {
        msg.innerHTML= `<div>That is not a Valid number </div>`;
        return;
    }

    //check number 

    if ( numb === randomNumber) {
        document.body.innerHTML=`<h2>Noic !You guess the Number <br></br>
        it was ${numb}</h2>
    <button class="play-again" id="play-again"> Play Again</button>
    `;
    }
    else if(numb > randomNumber)
    {
        msg.innerHTML +=`<div>Go Lower</div>`;
    }
    else if (numb < randomNumber)
    {
        msg.innerHTML +=`<div>Go Higher</div>`;
    }
    else
        return;



}

function OnSpeak (e) {

    var messge = e.results[0][0].transcript;
    writeMessage(messge); 
    checkNumber(messge); 

}

//speak result
Recognition.addEventListener('result' , OnSpeak)


// End SR services
Recognition.addEventListener('end',()=> Recognition.start());

document.body.addEventListener('click', e=>{
    if (e.target.id == 'play-again') {
        window.location.reload();
        
    }

} )