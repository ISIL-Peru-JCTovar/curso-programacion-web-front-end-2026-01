function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

document.getElementById('divcontenido1').addEventListener('drop', function(event) {
    drop(event);
});
document.getElementById('divcontenido1').addEventListener('dragover', function(event) {
    allowDrop(event);
});
document.getElementById('pcontenido1').addEventListener('dragstart', function(event) {
    drag(event);
});

document.getElementById('divcontenido2').addEventListener('drop', function(event) {
    drop(event);
});
document.getElementById('divcontenido2').addEventListener('dragover', function(event) {
    allowDrop(event);
});
document.getElementById('pcontenido2').addEventListener('dragstart', function(event) {
    drag(event);
});