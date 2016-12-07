function calcTaxes(amount){
 var tax = 0;
    if(amount >38893){
    tax = (amount - 186350) * .33 + 907.5;
    }
    else if(amount > 89350){
        tax = (amount - 89350) * .28 + 907.5+(36900-9072)*.15+(89350-36900)*.25;
    }
    else if( amount > 36900){
    tax = (amount - 36900) * .25 + 907.5+(36900-9072)*.15;
    }
    else if(amount > 9075){
    tax = (amount - 9075) * .15 + 907.5;
    }
    else{
       tax = amount * .10;
        }
    tax += amount * .153;
    return tax;
    /*

    10% on taxable income from $0 to $9,075, plus
15% on taxable income over $9,075 to $36,900, plus
25% on taxable income over $36,900 to $89,350, plus
28% on taxable income over $89,350 to $186,350, plus
33% on taxable income over $186,350 to $405,100, plus
35% on taxable income over $405,100 to $406,750, plus
39.6% on taxable income over $406,750.
   */
}
(document).ready(function() {
$("#submit").click(function () {
   payments.push({
       amount: parseInt($("#Earned").val()),
       date:$("#Date").val()});
   total = 0;
   for(x in payments){
   total += payments[x].amount;
   }
   $("#total").html(total);
   $("#Earned").val("");
   $("#taxes").html(calcTaxes(total));
});
