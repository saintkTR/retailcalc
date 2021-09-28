"use strict";

document.querySelector(".calc").addEventListener("click", function () {
  const pgst = document.querySelector(".pgst").value;
  const upay = document.querySelector(".upay").value;

  let tm = (Math.round(pgst - upay) / 1.05).toFixed(2);

  //CSM PRICES
  let doze = ((pgst / 105) * 100 * 0.97 - upay) / 12;
  let vinte = ((pgst / 105) * 100 * 0.95 - upay) / 24;
  let trinta = ((pgst / 105) * 100 * 0.93 - upay) / 36;

  let twelvecsm = doze.toFixed(2);
  let twentycsm = vinte.toFixed(2);
  let thirtycsm = trinta.toFixed(2);

  //GST PRICES

  let dozegst = twelvecsm * 1.05;
  let vintegst = twentycsm * 1.05;
  let trintagst = thirtycsm * 1.05;

  document.querySelector(".twelvecsm").textContent = twelvecsm;
  document.querySelector(".twentycsm").textContent = twentycsm;
  document.querySelector(".thirtycsm").textContent = thirtycsm;
  document.querySelector(".transvalue").textContent = tm;
  document.querySelector(".twelveg").textContent = dozegst.toFixed(2);
  document.querySelector(".twentyg").textContent = vintegst.toFixed(2);
  document.querySelector(".thirtyg").textContent = trintagst.toFixed(2);
});

document.querySelector(".clear").addEventListener("click", function () {
  document.querySelector(".twelvecsm").textContent = "";
  document.querySelector(".twentycsm").textContent = "";
  document.querySelector(".thirtycsm").textContent = "";
  document.querySelector(".transvalue").textContent = "";
  document.querySelector(".twelveg").textContent = "";
  document.querySelector(".twentyg").textContent = "";
  document.querySelector(".thirtyg").textContent = "";
  document.querySelector(".pgst").value = "";
  document.querySelector(".upay").value = "";
});
