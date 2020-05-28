const cards = document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.dropzone');

dropzones.forEach( dropzone => {
    dropzone.addEventListener('dragenter', dragenter);
    dropzone.addEventListener('dragover', dragover);
    dropzone.addEventListener('dragleave', dragleave);
    dropzone.addEventListener('drop', drop);
});

cards.forEach( card => {
    card.addEventListener('dragstart', dragstart);
    card.addEventListener('drag', drag);
    card.addEventListener('dragend', dragend);
});

function dragstart(){
    dropzones.forEach( dropzone => dropzone.classList.add('highlight'));

    this.classList.add('is-dragging');
}
function drag() {
    console.log("> Is dragging");
}
function dragend(){
    dropzones.forEach( dropzone => dropzone.classList.remove('highlight'));
    this.classList.remove('is-dragging');
}
function dragenter(){
    console.log("DROPZONE: Enter in zone");
}
function dragover(){
    this.classList.add('over');

    const cardBeingDragged = document.querySelector('.is-dragging');

    this.appendChild(cardBeingDragged);
}
function dragleave(){
    this.classList.remove('over');
}
function drop(){
    this.classList.remove('over');
}