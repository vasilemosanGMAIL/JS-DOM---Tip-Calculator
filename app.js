const calculate = document.getElementById("calculate");

function calculateTip(e) {
  e.preventDefault();
  let totalAmount = document.getElementById("totalamount").value;

  let numberOfPersons = document.getElementById("numberofpersons").value;

  let selectedService = document.querySelector(
    'input[name="servicelevel"]:checked'
  ).defaultValue;

  let total = (totalAmount * selectedService) / numberOfPersons;
  document.getElementById(
    "tip"
  ).innerHTML = `Tip value for each person: ${total}`;
}

calculate.addEventListener("click", calculateTip);
