   function get() {
            const htp = new XMLHttpRequest();
            htp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    
                    var data123 = JSON.parse(htp.responseText);
                      var deaths = data123.data.summary.deaths;
                    var confirmcases = data123.data.summary.confirmedCasesIndian;
                    var Recovered = data123.data.summary.discharged;
                    var x = document.getElementById("positivecases");
                    var y = document.getElementById("deaths");
                    var z = document.getElementById("discharged");
                    z.innerHTML = Recovered;
                    y.innerHTML = deaths;
                    x.innerHTML = confirmcases;
                    console.log(data123.data.summary);
                }
            }
            htp.open("get", "https://api.rootnet.in/covid19-in/stats/latest", true);
            htp.send()
        }