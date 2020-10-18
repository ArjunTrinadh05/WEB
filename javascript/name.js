function ajaxcall(x) {
  const htp = new XMLHttpRequest();
  htp.onreadystatechange = function () {
      if (this.status == 200 && this.readyState == 4) {
          var data123 = JSON.parse(htp.responseText);
            for (i = 0; i < 36; i++) {
              var xy = data123.data.regional[i].loc;
              var number = data123.data.regional[i].confirmedCasesIndian;
              var forginNumber = data123.data.regional[i].confirmedCasesForeign;
              var deaths = data123.data.regional[i].deaths;
              var disCharged = data123.data.regional[i].discharged;
              var totalConfirmed = data123.data.regional[i].totalConfirmed;
              var ename = xy.replace(/\s+/g, "");
              var statename = ename.toLowerCase();
              if (statename == x) {
                //  document.getElementById("totalinfo").innerHTML = "State:  " + xy;
                var div = document.createElement("div");
                div.className = "CompleteDetails";
                createElement("h3", "State: " + xy, div);
                createElement("p", "Confirmed Indians: " + number, div);
                createElement("p", "Confirmed Forgins: " + forginNumber, div);
                createElement("p", "Deaths: " + deaths, div);
                createElement("p", "Discharged: " + disCharged, div);
                createElement("p", "Total: " + totalConfirmed, div);
                document.getElementById("stateinfo").appendChild(div);
                  console.log(number);
                 
                  drawChart(number,forginNumber,deaths,disCharged)
                  break;
              } 
          }
          if (document.getElementById("totalinfo").innerHTML === "") {
              document.getElementById("totalinfo").innerHTML = "Check spelling"
          }
      }
  };
  htp.open("get", "https://api.rootnet.in/covid19-in/stats/latest", true);
  htp.send();
}
function createElement(type, value,div) {
       var x = document.createElement(type);
          x.appendChild(document.createTextNode(value));
       div.appendChild(x);
}
function getName(val, event) {
    if (event.keyCode === 13) {
        if (val !== '') {
            var name = val.replace(/\s+/g, "");
            var state = name.toLowerCase();
            document.getElementById("stateinfo").innerHTML = "";
            ajaxcall(state);
            
        }
    }
}