(function () {
  
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
  for (var i = 0; i < names.length; i++) 
  { 
    var firstLetter = names[i].charAt(0).toLowerCase();
    
      if (firstLetter === 'j') {
        console.log("Good Bye " + names[i]);

      }

      
      else {
        console.log("Hello " + names[i])
      } 
    
  }


})();

(function (window){
  
  var helloSpeaker = {};
helloSpeaker.name = "Yaakov";
var speakword = "Hello ";
helloSpeaker.sayHello = function speak(name) {
  console.log(speakword + " " + helloSpeaker.name);
}
  window.helloSpeaker = helloSpeaker;
})(window);


(function (window){
  
  var byeSpeaker= {};
byeSpeaker.name = "John";
var speakword = "Good Bye ";
byeSpeaker.goodbye = function  speak(name) {
  console.log(speakword + " " + byeSpeaker.name);
}
  window.byeSpeaker = byeSpeaker;
})(window);

helloSpeaker.sayHello();
byeSpeaker.goodbye();
