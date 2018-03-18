function createGrid() {
    var container = document.querySelector('#container');
    for (let row = 1; row < 17; row++) {
        var containerow = document.createElement('div');
        container.appendChild(containerow);
        containerow.setAttribute("class", "row");
        for (let col = 1; col < 17; col++) {
            var containecell = document.createElement('div');
            containerow.appendChild(containecell);
            containecell.setAttribute("id", "cell" + col);
            containecell.setAttribute("class", "cell");
        }
    }
}
/*
document.getElementsByClassName("cell").addEventListener("mouseout", mousegrid());
function mousegrid() {
    alert('ups!');
}
*/
function cleargrid() {
    $("#container").empty();
    createGrid();
    $(".cell").hover(function(){
        $(this).css("background-color", "red");
    });
}

$(document).ready(function(){
    createGrid();
    $(".cell").hover(function(){
        $(this).css("background-color", "red");
    });
});