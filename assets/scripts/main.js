setTimeout(function() { location.reload(); }, 10000);

var divEvent = document.getElementsByClassName('greeting')[0];
var otherSide = document.getElementsByClassName('ending')[0];

divEvent.addEventListener('click', function(event) { alert('Hola hola') });
otherSide.addEventListener('click', function(event) { console.log('heyyyy') });
