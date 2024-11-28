function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
    var dropTarget = ev.target;

    if (dropTarget.className === "drop-box") {
        dropTarget.appendChild(draggedElement);
        draggedElement.setAttribute("draggable", "false");
        draggedElement.style.cursor = "default";
    }
}

function checkAnswers() {
    let correct = 0;

    if (document.getElementById("introduccion").contains(document.getElementById("c1"))) {
        document.getElementById("introduccion").classList.add("correct");
        correct++;
    } else {
        document.getElementById("introduccion").classList.add("incorrect");
    }

    if (document.getElementById("desarrollo").contains(document.getElementById("c2"))) {
        document.getElementById("desarrollo").classList.add("correct");
        correct++;
    } else {
        document.getElementById("desarrollo").classList.add("incorrect");
    }

    if (document.getElementById("conclusion").contains(document.getElementById("c3"))) {
        document.getElementById("conclusion").classList.add("correct");
        correct++;
    } else {
        document.getElementById("conclusion").classList.add("incorrect");
    }

    if (correct === 3) {
        alert("¡Felicidades! Has completado el juego correctamente.");
    } else {
        alert("Algunas respuestas son incorrectas. Intenta de nuevo.");
    }
}

// Añadir la funcionalidad de soltar en los bloques.
const dropboxes = document.querySelectorAll('.drop-box');
dropboxes.forEach(box => box.addEventListener('drop', drop));
dropboxes.forEach(box => box.addEventListener('dragover', allowDrop));
