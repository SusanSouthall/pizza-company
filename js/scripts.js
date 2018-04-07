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





// NOTE: Begins User Interface Logic.

$(document).ready(function(){

  $("#welcome").submit(function(event){
    event.preventDefault();

    var pepperoni = $("#pepperoni").val();
    var mushrooms = $("#mushrooms").val();
    var onions = $("#onions").val();
    var sausage = $("#sausage").val();
    var bacon = $("#bacon").val();
    var cheese = $("#cheese").val();
    var olives = $("#olives").val();
    var peppers = $("#peppers").val();
    var tomatoes =$("#tomatoes").val();
    var pineapple =$("#pineapple").val();
    var spinach = $("#spinach").val();
    var pizzaSize = $("#pizzaSize").val();
    var pizzaToppings = ["pepperoni", "mushrooms", "onions", "sausage", "bacon", "cheese", "olives", "peppers", "tomatoes", "pineapple", "spinach"];
    var personalPizzaToppings = [];
    var personalPizza = new Pizza(pizzaSize, personalPizzaToppings);
    //
  $("input[type=checkbox]:checked").each(function(topping){
     personalPizzaToppings.push(topping);
    console.log(personalPizzaToppings);

  });

    console.log(personalPizzaToppings);
    // if(document.getElementById("#mushrooms").checked) {
    //   console.log("mushrooms");
    // }

    //   }) {
    //     personalPizza.size = "small";
    //   }else if ($("#medium").attr("checked")) {
    //     personalPizza.size = "medium";
    //   }else {
    //     personalPizza.size = "large";
    //   }return personalPizza.size;
    // }

// var personalPizzaSize = checkSize();
//     console.log(personalPizzaSize);
//

  });
});
