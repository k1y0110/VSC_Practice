$(function(){
    $(".square").click(clickSquareEvent);
});

function clickSquareEvent(){
    let square = $(this);

putPiece(square, "black");
}

function putPiece(targetSquare, owner){
    targetSquare.text("⚫︎").attr("data-owner", owner).addClass("selected");
}