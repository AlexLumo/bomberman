function Position(x, y) {
    this.x = x;
    this.y = y;
}

Position.prototype.up = function() {
    if (this.y < 0) {
        return;
    }
    this.y--;
}

Position.prototype.down = function() {
    if (this.y < 0) {
        return;
    }
    this.y++;
}

Position.prototype.left = function() {
    if (this.x < 0) {
        return;
    }
    this.x--;
}

Position.prototype.right = function() {
    if (this.x < 0) {
        return;
    }
    this.x++;
}

Position.prototype.getX = function() {
    return this.x;
}

Position.prototype.getY = function() {
    return this.y;
}