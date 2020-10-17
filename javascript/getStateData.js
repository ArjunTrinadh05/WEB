function statedata() {
    function styles(div,h3) {
        div.style['background-color'] = "white";
        div.style['width'] = "30%";
        div.style['height'] = "40%";
        div.style['margin'] = "10px";
    
       }
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
                        var div = document.createElement('div')
                        var heading = document.createElement('h3');
                        div.appendChild(heading);
                        heading.appendChild(document.createTextNode(x));
                        var nOp = document.createElement('p');
                        div.appendChild(nOp);
                        nOp.appendChild(document.createTextNode(y));
                         var nOfc = document.createElement('p');
                        div.appendChild(nOfc);
                        nOfc.appendChild(document.createTextNode(z));
                         var nOdis = document.createElement('p');
                        div.appendChild(nOdis);
                        nOdis.appendChild(document.createTextNode(w));
                         var nOd = document.createElement('p');
                        div.appendChild(nOd);
                        nOd.appendChild(document.createTextNode(u));
                        document.getElementById("statedata").appendChild(div);
                        styles(div,heading);
                    }
                }
            }
            htp.open("get", "https://api.rootnet.in/covid19-in/stats/latest", true);
            htp.send();
        }