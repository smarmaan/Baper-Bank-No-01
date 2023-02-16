document.getElementById("withdraw-btn").addEventListener("click", function () {
  const newWithdrawAmount = document.getElementById(
    "withdraw-amount-field"
  ).value;

  if (isNaN(newWithdrawAmount) || newWithdrawAmount === "") {
    alert("Input Invalid");
    return;
  } else {
    const newWithdrawAmountValue = parseFloat(newWithdrawAmount);

    const previousWithdrawnAmount =
      document.getElementById("withdrawn-amount").innerText;

    const previousWithdrawnAmountFloat = parseFloat(previousWithdrawnAmount);

    // const currentWithdraw =
    //   previousWithdrawnAmountFloat + newWithdrawAmountValue;

    // document.getElementById("withdrawn-amount").innerText = currentWithdraw;

    document.getElementById("withdraw-amount-field").value = "";

    // balance er sathe connect kora.....

    const previousBalanceElement =
      document.getElementById("balance-amount").innerText;

    const previousBalanceTotal = parseFloat(previousBalanceElement);

    if (previousBalanceTotal < newWithdrawAmountValue) {
      alert("Oi bal.. Baper bank e eto tk nai");
      return;
    }

    const currentWithdraw =
      previousWithdrawnAmountFloat + newWithdrawAmountValue;

    document.getElementById("withdrawn-amount").innerText = currentWithdraw;

    const balanceTotal = previousBalanceTotal - newWithdrawAmountValue;

    document.getElementById("balance-amount").innerText = balanceTotal;
  }
});
