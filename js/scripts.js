// NOTE: BEgins Business Logic.


function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  }
  
Pizza.prototype.cost = function() {
  if (this.size === "small") {
    return this.price = "$10.00";
  }else if (this.size === "medium") {
    return this.price = "$15.00";
  }else {
    return this.price = "$20.00";
  }
}
