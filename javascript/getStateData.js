function statedata() {
  const htp = new XMLHttpRequest();
  htp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data123 = JSON.parse(htp.responseText);
      for (i = 0; i < 36; i++) {
        var x = data123.data.regional[i].loc;
        var y ="Number of postive cases: " + data123.data.regional[i].totalConfirmed;
        var z = "Number of Foreign People: " + data123.data.regional[i].confirmedCasesForeign;
        var w = "Number of discharged: " + data123.data.regional[i].discharged;
        var u = "Number of deaths: " + data123.data.regional[i].deaths;
        var div = document.createElement("div");
        div.className = "statedatacard";
        var node = document.createElement("h3");
        div.appendChild(node);
        node.appendChild(document.createTextNode(x));
        var nOp = document.createElement("p");
        div.appendChild(nOp);
        nOp.appendChild(document.createTextNode(y));
        var nOfc = document.createElement("p");
        div.appendChild(nOfc);
        nOfc.appendChild(document.createTextNode(z));
        var nOdis = document.createElement("p");
        div.appendChild(nOdis);
        nOdis.appendChild(document.createTextNode(w));
        var nOd = document.createElement("p");
        div.appendChild(nOd);
        nOd.appendChild(document.createTextNode(u));
        document.getElementById("statedata").appendChild(div);
      }
    }
  };
  htp.open("get", "https://api.rootnet.in/covid19-in/stats/latest", true);
  htp.send();
}
