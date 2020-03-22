let calculate = document.querySelector(".form-data");
calculate.addEventListener('submit' , onClick);

function onClick(e){
  
  let loanAmount = parseFloat(document.querySelector(".amount").value);
  let loanInterest = parseFloat(document.querySelector(".interest").value);
  let loanYears = parseFloat(document.querySelector(".years").value);

  let resultMonth = document.querySelector(".resultMonth");
  let resultTotal = document.querySelector(".resultTotal");
  let resultInterest = document.querySelector(".resultInterest");

  let interestPerMonth = loanInterest / (100*12);
  let principal = loanAmount * interestPerMonth;
  let totalMonths = loanYears *12;
  let interestFinal = Math.pow(interestPerMonth + 1, totalMonths);

  let emi = principal *(interestFinal/(interestFinal-1));
  let totalAmount = emi * totalMonths;
  let totalInterest =  totalAmount - loanAmount;
  

  if(isFinite(emi)){

    let result = document.querySelector(".fullResult");
    result.style.display = "block";
    
    resultMonth.value = emi.toFixed(2);
    resultTotal.value = totalAmount.toFixed(2);
    resultInterest.value = totalInterest.toFixed(2);

  } else {

    let check = document.querySelector(".noNum");
    check.style.display = "block";
    setTimeout(() => {
      check.style.display = "none";
    },3000);
  }

  e.preventDefault();

}

  
let clear = document.querySelector("button");

clear.addEventListener("click", () => {

  document.querySelector(".amount").value = "";
  document.querySelector(".interest").value= "";
  document.querySelector(".years").value= "";

  document.querySelector(".resultMonth").value= "";
  document.querySelector(".resultTotal").value= "";
  document.querySelector(".resultInterest").value= "";

  let result = document.querySelector(".fullResult");
    result.style.display = "none";
});


