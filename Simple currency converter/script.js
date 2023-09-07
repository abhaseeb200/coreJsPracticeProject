//Task 5 ---- Solution 1
let dollarPrice = 307;
let pkr = document.getElementById("pkr");
let usd = document.getElementById("usd");

pkr.addEventListener("input", pkrFunction);
usd.addEventListener("input", usdFunction);

function pkrFunction() {
  console.log("PKR value ->", pkr.value);
  if (pkr.value === "" || pkr.value < 0) {
    // console.log("Value is Nan....");
    usd.value = "";
    pkr.value = "";
  } else {
    let usdVal = (pkr.value / dollarPrice).toFixed(3);
    usd.value = parseFloat(usdVal);
  }
}
function usdFunction() {
  console.log("USD value ->", usd.value);
  if (usd.value === "" || usd.value < 0) {
    // console.log("Value is Nan....");
    pkr.value = "";
    usd.value = "";
  } else {
    let pkrVal = (usd.value * dollarPrice).toFixed(3);
    pkr.value = parseFloat(pkrVal);
  }
}