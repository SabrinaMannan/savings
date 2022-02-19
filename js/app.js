//handling income and expenses
function getInputValue(cost) {
    const costInput = document.getElementById(cost);
    const costNumber = parseInt(costInput.value);
    return costNumber;
}

//total calculation
function sumTotal() {


    const incomeTotal = getInputValue('income');
    const foodTotal = getInputValue('food');
    const clothesTotal = getInputValue('clothes');
    const rentTotal = getInputValue('rent');

    const expenseTotal = foodTotal + clothesTotal + rentTotal;

    const balancetotal = incomeTotal - expenseTotal;

    const savingsTotal = balancetotal / 10;

    document.getElementById('total-expense').innerText = expenseTotal;
    document.getElementById('balance').innerText = balancetotal;
    document.getElementById('savings').innerText = savingsTotal;

    //clear the  field

    expenseTotal.innerText = '';
    balancetotal.innerText = '';
    savingsTotal.innerText = '';


}
