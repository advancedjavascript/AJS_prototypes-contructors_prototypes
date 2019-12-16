export default function Character(name, type) {
  this.name = name;
  this.type = type;
  this.health = 100;
  this.attack = 10;
  this.defence = 40;
}


Character.prototype.damage = function damage(points) {
  const damageCounter = points * (1 - this.defence / 100);
  if ((this.health - damageCounter) > 0) {
    this.health -= (points * (1 - this.defence / 100));
  } else {
    return ('You died');
  }
  return this.health;
};
