export default function Character(name, type) {
  this.name = name;
  this.type = type;

  this.attack = 10;
  this.defence = 40;

  Character.prototype.damage = function damage(points) {
    this.health = 100 - (points * (1 - this.defence / 100));
  };
}
