import { formatCurrency } from "../scripts/utiles/money.js";

console.log("the format tests : ");
console.log("the normal case is ");
if(formatCurrency(2094) === '20.94'){
    console.log("passed");
} else {
    console.log("fialed")
}
console.log("the number 0.00 is")
if(formatCurrency(0) === '0.00'){
    console.log("passed");
} else {
    console.log("fialed")
}
console.log("the number nearest is :");
if(formatCurrency(200043) === '20.01'){
    console.log("passed");
} else {
    console.log("fialed")
}