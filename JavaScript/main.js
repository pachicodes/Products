var pop = document.querySelector("[data-pop]");
var light = document.querySelector("[data-light]");
var skies = document.querySelector("[data-skies]");
var input = document.querySelector("[data-input]");
var choose = document.querySelector("[data-choose]");
var button = document.querySelector("[data-button]");
var total = document.querySelector("[data-total]")

button.addEventListener('click', function(event) {
    event.preventDefault();
    total.innerHTML = "";
    var quant = input.value;
    var options = choose.value;
    var result = quant * options;
    console.log(result);
    var element = document.createElement('h1');
    var totaly = document.createTextNode(result);
    element.append(result);
    total.append(element);
    }
)



