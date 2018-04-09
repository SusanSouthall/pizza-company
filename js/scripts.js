// NOTE: Begins Business Logic.

function Pizza(size,toppings) {
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

// NOTE: Begins User Interface Logic.

$(document).ready(function(){
  $("#welcome").submit(function(event){
    event.preventDefault();

     var pizzaSize = $("#pizzaSize").val();
     var personalPizzaToppings = [];
    $("input:checkbox[name=pizzaTopping]:checked").each(function(){
      personalPizzaToppings.push($(this).val());
    });

     var personalPizza = new Pizza(pizzaSize, personalPizzaToppings);

     $("#userOutput").text("You have ordered a " + personalPizza.size + " pizza with " + personalPizza.toppings  + " for " + personalPizza.cost() + " .");
     console.log(personalPizza);
  });
});
