function reproduirRiure() {
    let player = document.getElementById('player');
    player.play();
}

window.onload = function() {
    // Get a reference to the button element by its id
    let nas = document.getElementById('nas');

    // Register the buttonClickHandler function to handle the click event
    nas.addEventListener('click', reproduirRiure);
};