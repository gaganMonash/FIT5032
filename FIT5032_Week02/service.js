var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

function fun() 
{


    var table = document.getElementById("stats1");


    
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://api.covid19api.com/countries", false ); // false for synchronous request
    xmlHttp.send( null );
   // var coutries= xmlHttp.responseText;

    var json = JSON.parse(xmlHttp.responseText);
    console.log(json);

    for (i = 0, len = json.length, text = ""; i < len; i++) {
        var row = table.insertRow(i+1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = json[i].Country;
        cell2.innerHTML = json[i].Slug;
        cell3.innerHTML=json[i].ISO2;
       
       

        row.onclick= function () {
          var cell = row.getElementsByTagName("td")[0];
          var id = cell.innerHTML;
          localStorage.setItem('country', id);
          window.location.replace( "\countrystats.html");
      }
       // row.onclick = createClickHandler(row);
      }


}

function fun2()
{
  return localStorage.getItem("country");
}

function fun1()
{

  var serviceUrl="https://api.covid19api.com/dayone/country/"+localStorage.getItem("country");

  var table = document.getElementById("stats2");


    
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", serviceUrl, false ); // false for synchronous request
  xmlHttp.send( null );
 // var coutries= xmlHttp.responseText;

  var json = JSON.parse(xmlHttp.responseText);
  console.log(serviceUrl);

  console.log(json);

  for (i = 0, len = json.length, text = ""; i < len; i++) {
      var row = table.insertRow(i+1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var d=new Date(json[i].Date);

      var datestring = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " +
d.getHours() + ":" + d.getMinutes();

      cell1.innerHTML = datestring;
      cell2.innerHTML = json[i].Confirmed;
      cell3.innerHTML=json[i].Deaths;
      cell4.innerHTML=json[i].Recovered;
      cell5.innerHTML=json[i].Active;
     
    }
      
    }

  



