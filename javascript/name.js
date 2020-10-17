function ajaxcall(x) {
  const htp = new XMLHttpRequest();
  htp.onreadystatechange = function () {
      if (this.status == 200 && this.readyState == 4) {
          var data123 = JSON.parse(htp.responseText);
          for (i = 0; i < 36; i++) {
              var xy = data123.data.regional[i].loc;
              var ename = xy.replace(/\s+/g, "");
              var statename = ename.toLowerCase();
              if (statename === x) {
                  console.log(xy)
                  document.getElementById("totalinfo").innerHTML = xy;
              }
              else {
                 console.log('not found')
              }
          }
      }
  };
  htp.open("get", "https://api.rootnet.in/covid19-in/stats/latest", true);
  htp.send();
}
function getName(val) {
    if (val !== '') {
        var name = val.replace(/\s+/g, "");
        var state = name.toLowerCase();
        ajaxcall(state);
    }
}