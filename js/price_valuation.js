"use strict";
var $ = function(id) {
  return document.getElementById(id);
};

function validate() {

}

function numberWithCommas(x) {
  if (x.indexOf(".") !== -1) {
    return x.toString().replace(".", ",");
  }
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function calculate() {
  let in1 = parseFloat($("income1").value);
  let in2 = parseFloat($("income2").value);
  let in3 = parseFloat($("income3").value);
  let in4 = parseFloat($("income4").value);
  let vol = parseInt($("volume").value.replace(/,/g, ''));
  let pe1 = parseFloat($("pe1").value);
  let pe2 = parseFloat($("pe2").value);
  // Do calculate
  const EPS = ((in1 + in2 + in3 + in4)*Math.pow(10, 9)/vol).toFixed(3);
  let price1 = 0, price2 = 0;
  price1 = pe1*EPS;
  price2 = pe2*EPS;
  // Format number VNĐ
  const price1String = (Math.round(price1/100)*100).toLocaleString();
  const price2String = (Math.round(price2/100)*100).toLocaleString();
  // Add string into element
  let html = "";
  html = "Cổ phiếu bạn đang xét có giá trị từ <b>" + price1String + "</b> (VNĐ) đến <b>" + price2String + "</b> (VNĐ).";
  $("result").innerHTML = html;
}

window.onload = function() {
  $("valuate").onclick = calculate;
  $("income1").focus();
};