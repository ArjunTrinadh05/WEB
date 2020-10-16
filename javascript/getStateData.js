   function statedata() {
            const htp = new XMLHttpRequest();
            htp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var data123 = JSON.parse(htp.responseText);
                    for (i = 0; i < 36; i++) {
                        var x = data123.data.regional[i].loc;
                        var y = data123.data.regional[i].totalConfirmed;
                        var z = data123.data.regional[i].confirmedCasesForeign;
                        var w = data123.data.regional[i].discharged;
                        var u = data123.data.regional[i].deaths;
                        const htp2 = new XMLHttpRequest();
                        htp2.onreadystatechange = function() {
                            if (this.readyState == 4 && this.status == 200) {
                                document.write(htp2.responseText)
                            }
                        }
                        htp2.open("get", "Requirements/StateData.php?q=" + x + "&y=" + y + "&z=" + z + "&w=" + w+"&u="+ u, true);
                        htp2.send();
                    }
                }
            }
            htp.open("get", "https://api.rootnet.in/covid19-in/stats/latest", true);
            htp.send();
        }