let listeningStatus = document.getElementById("listeningStatus");
let resultElement = document.getElementById("resultElement");
let SpeechRecognition, recognition;



try {
  SpeechRecognition =  window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SpeechRecognition();

  const selectLanguage = function getTheValue(){
    let selection = document.getElementById("languages");
    let option = selection.options[selection.selectedIndex].value;
    return option;
  }

  //convert the value to string after saving the value from calling the function
  let languageValue = selectLanguage(this);
 
  recognition.lang = String(languageValue);
  
  // on start, show speech recognition service is listenig
  recognition.onstart = () => {
    listeningStatus.innerHTML ="";
    resultElement.innerHTML =  "Short speech recognition has started";
    
  };
  // show listening status that has ended
  recognition.onend = () => {
  
    listeningStatus.innerHTML ="Service stopped!";
    
  };

  // display the captured message
  recognition.onresult = (event) => {
    let transcript = event.results[event.resultIndex][0].transcript;
    resultElement.innerHTML = transcript;
  };

   
} catch (e) {
  resultElement.innerHTML = "Browser not supported. Please use Chrome or Edge";
}

startSpeaking = () => recognition.start();
