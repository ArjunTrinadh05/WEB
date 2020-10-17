function covidInfo() {
  function numAnimation(id) {
    let element = document.getElementById(id);
    let value = element.innerHTML;
    let temp = parseInt(value);
    let index = 0;
    let interval = setInterval(function () {
      index = index + parseInt(temp / 50);
      if (temp <= index) {
        if (temp != NaN) {
          element.innerHTML = temp;
        }
        clearInterval(interval);
      } else {
        element.innerHTML = index;
      }
    }, 100);
  }
  const htp = new XMLHttpRequest();
  htp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let test = setInterval(function () {
        let element = document.getElementById("deaths");
        let value = element.innerHTML;
        console.log(value);
        let temp = parseInt(value);
        if (temp !== NaN) {
          numAnimation("deaths");
          numAnimation("positivecases");
          numAnimation("discharged");
          clearInterval(test);
        }
      }, 400);
      var data123 = JSON.parse(htp.responseText);
      var deaths = data123.data.summary.deaths;
      var confirmcases = data123.data.summary.confirmedCasesIndian;
      var Recovered = data123.data.summary.discharged;
      var last_updated = data123.lastRefreshed;
      var x = document.getElementById("positivecases");
      var y = document.getElementById("deaths");
      var z = document.getElementById("discharged");
      var w = document.getElementById("last-update");
      z.innerHTML = Recovered;
      y.innerHTML = deaths;
      x.innerHTML = confirmcases;

      console.log("connected");
    } else {
      console.log("Not Connected yet");
    }
  };
  htp.open("get", "https://api.rootnet.in/covid19-in/stats/latest", true);
  htp.send();
}
