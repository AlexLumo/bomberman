function Game(map) {
    this.map = map;
    this.player1 = new Man(new Position(0, 0), 'p1');
    this.player2 = new Man(new Position(10, 10), 'p2');
    
    this.players = [];
    this.players.push(this.player1);
    this.players.push(this.player2);

    this.player1.setPower(2);
    this.player2.setPower(2);
}

Game.prototype.getPlayers = function() {
    return this.players;
}

Game.prototype.getMap = function() {
    return this.map;
}

Game.prototype.getPlayer1 = function() {
    return this.player1;
}

Game.prototype.getPlayer2 = function() {
    return this.player2;
}

Game.prototype.putBomb1 = function() {
    if (!this.player1.canPut()) {
        return;
    }
    this.player1.cannot();
    var posX = this.player1.getPosition().getX();
    var posY = this.player1.getPosition().getY();
    this.map[posY][posX] = 2;
    var that = this;
    setTimeout(() => {
        this.explode(posX, posY, this.player1);
        window.dm(that);
        this.player1.can();
    }, 3000)
}

Game.prototype.putBomb2 = function() {
    if (!this.player2.canPut()) {
        return;
    }
    this.player2.cannot();
    var posX = this.player2.getPosition().getX();
    var posY = this.player2.getPosition().getY();
    this.map[posY][posX] = 2;
    var that = this;
    setTimeout(() => {
        this.explode(posX, posY, this.player2);
        window.dm(that);
        this.player2.can();
    }, 3000)
}

Game.prototype.explode = function(posX, posY, player) {
    var severity = player.getPower();
    for (var i = posY - severity; i <= posY + severity; i++) {
        if (this.map[i] === undefined || this.map[i][posX] === undefined) {
            continue;
        }
        this.map[i][posX] = 3;
    }
    for (var i = posX - severity; i <= posX + severity; i++) {
        if (this.map[posY] === undefined || this.map[posY][i] === undefined) {
            continue;
        }
        this.map[posY][i] = 3;
    }
    var that = this;
    setTimeout(() => {
        for (var i = posY - severity; i <= posY + severity; i++) {
            if (this.map[i] === undefined || this.map[i][posX] === undefined) {
                continue;
            }
            this.map[i][posX] = 0;
        }
        for (var i = posX - severity; i <= posX + severity; i++) {
            if (this.map[posY] === undefined || this.map[posY][i] === undefined) {
               continue;
            }
            this.map[posY][i] = 0;
        }
        this.killPlayers(posX, posY, severity);
        window.dm(that);
    }, 200)
}

Game.prototype.killPlayers = function(posX, posY, severity) {
    var players = this.players;
    players.forEach((player) => {
        var x = player.getPosition().getX();
        var y = player.getPosition().getY();
        if (x === posX && y >= (posY - severity) && y <= (posY + severity)) {
            player.die()
        } else if (y === posY && x >= (posX - severity) && x <= (posX + severity)) {
            player.die()
        }
    });
}

Game.prototype.up1 = function() {
    var posX = this.player1.getPosition().getX();
    var posY = this.player1.getPosition().getY();
    if (posY <= 0 || this.map[posY - 1][posX] >= 1) {
        return false;
    } else {
        this.player1.up();
    }
}

Game.prototype.down1 = function() {
    var posX = this.player1.getPosition().getX();
    var posY = this.player1.getPosition().getY();
    if (posY >= (this.map.length - 1) || this.map[posY + 1][posX] >= 1) {
        return false;
    } else {
        this.player1.down();
    }
}

Game.prototype.left1 = function() {
    var posX = this.player1.getPosition().getX();
    var posY = this.player1.getPosition().getY();
    if (posX <= 0 || this.map[posY][posX - 1] >= 1) {
        return false;
    } else {
        this.player1.left();
    }
}

Game.prototype.right1 = function() {
    var posX = this.player1.getPosition().getX();
    var posY = this.player1.getPosition().getY();
    if (posX >= (this.map.length - 1) || this.map[posY][posX + 1] >= 1) {
        return false;
    } else {
        this.player1.right();
    }
}

Game.prototype.up2 = function() {
    var posX = this.player2.getPosition().getX();
    var posY = this.player2.getPosition().getY();
    if (posY <= 0 || this.map[posY - 1][posX] >= 1) {
        return false;
    } else {
        this.player2.up();
    }
}

Game.prototype.down2 = function() {
    var posX = this.player2.getPosition().getX();
    var posY = this.player2.getPosition().getY();
    if (posY >= (this.map.length - 1) || this.map[posY + 1][posX] >= 1) {
        return false;
    } else {
        this.player2.down();
    }
}

Game.prototype.left2 = function() {
    var posX = this.player2.getPosition().getX();
    var posY = this.player2.getPosition().getY();
    if (posX <= 0 || this.map[posY][posX - 1] >= 1) {
        return false;
    } else {
        this.player2.left();
    }
}

Game.prototype.right2 = function() {
    var posX = this.player2.getPosition().getX();
    var posY = this.player2.getPosition().getY();
    if (posX >= (this.map.length - 1) || this.map[posY][posX + 1] >= 1) {
        return false;
    } else {
        this.player2.right();
    }
}