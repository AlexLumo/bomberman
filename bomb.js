function Bomb() {
    this.power = 1;
    this.lifeTime = 3000;
}
Bomb.prototype.getLifeTime = function() {
    return this.lifeTime;
}

Bomb.prototype.setPower = function(power) {
    this.power = power;
}