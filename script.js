//1.Create XHR object;
var request = new XMLHttpRequest();
//2.opening the connection open() method parameters = HTTP method , URL ,
request.open("GET", "https://restcountries.eu/rest/v2/all", true);
//3.sending a connection
request.send();
//4. server responded successfully
request.onload = function () {
  var data = JSON.parse(this.response);
  console.log(data);
  for (i = 0; i < 250; i++) {
    console.log(data[i].name + " - " + data[i].capital + " - " + data[i].flag);
  }
};
