var vid = document.getElementById('myVideo');
var prova = document.getElementById('primera');
var tancar = document.getElementById('tancarModal');
var collaps = document.getElementById('collapsOne');

prova.addEventListener('click', function(ev) {
    vid.currentTime = 00;

    document.getElementById('abtme').scrollIntoView();
    collaps.click();
});


var prova2 = document.getElementById('segona');

prova2.addEventListener('click', function(ev) {
    vid.currentTime = 23;
});


var prova3 = document.getElementById('tercera');

prova3.addEventListener('click', function(ev) {
    vid.currentTime = 45;
});

var prova3 = document.getElementById('quarta');

prova3.addEventListener('click', function(ev) {
    vid.currentTime = 55;
});

tancar.addEventListener('click', function(ev) {
    vid.pause();
    vid.currentTime = 0;
});


