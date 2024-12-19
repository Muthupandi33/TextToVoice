
let speech = new SpeechSynthesisUtterance();
let btn=document.getElementById("btn");
let textArea=document.getElementById("textAreaValue");
btn.addEventListener("click",()=>{
    speech.text= textArea.value;
    // console.log(speech);
//   console.log(window.speechSynthesis)
window.speechSynthesis.speak(speech);
})
