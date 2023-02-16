document.getElementById("deposit-btn").addEventListener("click", function () {
  const newDepositAmount = document.getElementById(
    "deposit-amount-field"
  ).value;

  if (isNaN(newDepositAmount) || newDepositAmount === "") {
    alert("Invalid Input");
  } else {
    const newDepositAmountValue = parseFloat(newDepositAmount);

    const previousDepositedAmount = document.getElementById("deposited-amount");

    const previousDepositedAmountValue = parseFloat(
      previousDepositedAmount.innerText
    );

    const currentDeposit = previousDepositedAmountValue + newDepositAmountValue;

    document.getElementById("deposited-amount").innerText = currentDeposit;

    document.getElementById("deposit-amount-field").value = "";

    // balance er sathe connect kora.....
    //
    //
    //
    //
    const previousBalanceElement =
      document.getElementById("balance-amount").innerText;

    const previousBalanceTotal = parseFloat(previousBalanceElement);

    const balanceTotal = previousBalanceTotal + newDepositAmountValue;

    document.getElementById("balance-amount").innerText = balanceTotal;
  }
});
