
var taxableI= grossIncome-400
function paye (taxableI){
  var paye=0
  // check the == sign
if (taxableI<===10164){
  paye=0.1*taxableI;

}
else if (taxableI >===10165 && <===19740) {
  paye=0.15*taxableI;

}
else if (taxableI >===19741 && <===29316) {
  paye=0.20*taxableI;

}
else if (taxableI >===29317 && <===38892) {
  paye=0.25*taxableI;

}
else if (taxableI >===38892) {
  paye=0.3
  *taxableI;

}
else return(0);

}

// PAYE ends here...
}
function nhif(grossIncome){
  var nhif =0
  // check the == sign
if (grossIncome<===5999){
  nhif=150;

}
else if (grossIncome >===6000 && <===7999) {
  nhif=300;

}
else if (grossIncome >===8000 && <===11999) {
  nhif=400;
}
else if (grossIncome >===12000 && <===14999) {
  nhif=500;
}
else if (grossIncome >===15000 && <===19999) {
  nhif=600;
}
else if (grossIncome >===20000 && <===24999) {
  nhif=750;
}
else if (grossIncome >===25000 && <===29999) {
  nhif=850;
}
else if (grossIncome >===30000 && <===34999) {
  nhif=900;
}
else if (grossIncome >===35000 && <===39999) {
  nhif=950;
}
else if (grossIncome >===40000 && <===44999) {
  nhif=1000;
}
else if (grossIncome >===45000 && <===49999) {
  nhif=1100;
}
else if (grossIncome >===50000 && <===59999) {
  nhif=1200;
}
else if (grossIncome >===60000 && <===69999) {
  nhif=1300;
}
else if (grossIncome >===70000 && <===79999) {
  nhif=1400;
}
else if (grossIncome >===80000 && <===89999) {
  nhif=1500;
}
else if (grossIncome >===90000 && <===99999) {
  nhif=1600;
}
else if (grossIncome >===100000) {
  nhif=1700;
}

}
// nhif ends here
