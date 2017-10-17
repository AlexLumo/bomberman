function Man(position, name) {
    this.position = position;
    this.name = name;
    this.power = 1;
    this.canPutBomb = true;
}

Man.prototype.setPower = function(power) {
    this.power = power;
}

Man.prototype.cannot = function() {
    this.canPutBomb = false;
}

Man.prototype.can = function() {
    this.canPutBomb = true;
}

Man.prototype.canPut = function() {
    return this.canPutBomb;
}

Man.prototype.getPower = function() {
    return this.power;
}

Man.prototype.die = function() {
    alert('Player: ' + this.name + ' lost');
    this.position = new Position(-99999, -99999);
}

Man.prototype.getName = function() {
    return this.name;
}

Man.prototype.up = function() {
    this.position.up();
}

Man.prototype.down = function() {
    this.position.down();
}

Man.prototype.left = function() {
    this.position.left();
}

Man.prototype.right = function() {
    this.position.right();
}

Man.prototype.getPosition = function() {
    return this.position;
}