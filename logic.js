$(function() {
    var game = new Game(maze);
    drawMap(game);

    $("html").on("keypress", (e) => {
        if (e.keyCode === 119) {
            game.up1();
            drawMap(game);
        } else if (e.keyCode === 115) {
            game.down1();
            drawMap(game);
        } else if (e.keyCode === 97) {
            game.left1();
            drawMap(game);
        } else if (e.keyCode === 100) {
            game.right1();
            drawMap(game);
        } else if (e.keyCode === 56) {
            game.up2();
            drawMap(game);
        } else if (e.keyCode === 50) {
            game.down2();
            drawMap(game);
        } else if (e.keyCode === 52) {
            game.left2();
            drawMap(game);
        } else if (e.keyCode === 54) {
            game.right2();
            drawMap(game);
        } else if(e.keyCode === 32) {
            game.putBomb1();
            drawMap(game);
        } else if(e.keyCode === 13) {
            game.putBomb2();
            drawMap(game);
        }
    })
});

function drawMap(game) {
    var div = $('#map');
    var map = game.getMap();
    var p1 = game.getPlayer1();
    var p2 = game.getPlayer2();
    var heigth = width = map.length;
    var view = '<table>';
    for (var i = 0; i < heigth; i++) {
        view += '<tr>';
        for (var j = 0; j < width; j++) {
            view += '<td class="c' +  (map[i][j])  + '">';

            if (p1.getPosition().getX() === j && p1.getPosition().getY() === i) {
                view += '<span id="x" class="' + p1.getName() + '"></span>';
            } else if (p2.getPosition().getX() === j && p2.getPosition().getY() === i) {
                view += '<span id="x" class="' + p2.getName() + '"></span>'
            }
            
            view += '</td>';
        }
        view += '</tr>';
    }
    view += '</table>';
    div.html(view);
}
window.dm = drawMap;
