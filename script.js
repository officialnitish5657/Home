let speechtext = '';
if (window.SpeechRecognition || window.webkitSpeechRecognition) {
    let speech = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    speech.leng = "en-US";
    speech.onstart = function () {
        console.log("start to speech..");

    }
    speech.onerror = function () {
        console.log("error, let's try again!");
    }

    speech.onresult = function (e) {
        console.log(e.results[0][0].transcript);
        document.querySelector("#chats").innerHTML = e.results[0][0].transcript;
        
        // speechtext = e.results[0][0].transcript;

    }

    document.querySelector("#speech").addEventListener("click", function () {
        speech.start();
    });


}
else {
    console.log("you brouser not support speech funcanality");
}

function speak() {
    speechtext = document.querySelector("#chats").value;
    let spk = new SpeechSynthesisUtterance();
    spk.leng = "en-US";
    if(speechtext===''){
        text="plese speech..";
    }
    else{
        text=speechtext;
    }

    spk.text = text;
    spk.rate = 0.5;
    window.speechSynthesis.speak(spk)

}
document.querySelector("#speak").addEventListener("click", function () {
    speak();
});


function mic(){

    let spee = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    spee.leng = "en-US";
    spee.onstart = function () {
        console.log("start to speech..");
        
    }
    spee.onerror = function () {
        console.log("error, let's try again!");
    }
    
    spee.onresult = function (e) {
        // console.log(e.results[0][0].transcript);
        transcript = e.results[0][0].transcript;
        document.querySelector("#google-search").value =transcript ;
        
    }  
    return spee
}
    document.querySelector("#mic").addEventListener("click", function () {
       let s=mic();
        s.start();
    });
    // document.querySelector("#google-search").innerHTML ="hello"

    function searchGoogle() {
        var searchtext = document.querySelector(".searchtext").value;
        var searchUrl = "https://www.google.com/search?q=" + encodeURIComponent(searchtext);
        window.open(searchUrl, '_blank');
      }

      function handleKeyPress(e) {
        if (e.key === 'Enter') {
            searchGoogle();
            // Hide the keyboard after search (optional)
            this.blur();
        }
        else
        console.log(e);
    }

    document.querySelector("#google-search").addEventListener('keyup', handleKeyPress);
    document.querySelector("#google-search").addEventListener('keypress', handleKeyPress);
