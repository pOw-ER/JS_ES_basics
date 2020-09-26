// AJAX = Asynchronous JavaScript And XML

var xhr = new XMLHttpRequest();

xhr.onreadystatechange=function(){ // onreadystatechange bedeutet, wenn auf der Seite sich etwas ändert, sollte diese Funktion funktionieren
  if(xhr.readyState === 4 && xhr.status===200) {
    console.log(xhr.responseText);
  }
};

// was wollen wir vom SERVER. wenn wir vom Server informationen erhalten wollen, benutzen wir oft GET oder manchmal POST(bei aktualisierung usw).
// msg.txt (welche Datei wollen wir)
// true = asynchronous, false = synchronous
xhr.open('GET','msg.txt',true);

xhr.send();



/*
readyState :

0 : request not initialized                  => Talep baslatilmadi
1 : server connection established            => Server baglantisi kuruldu
2 : request received                         => Talep alindi
3 : processing request                       => Talep üzerinde calisiliyor
4 : request finished and response is ready   => Talep bitti ve hazir durumalrini ifade eder

status :

200 = "OK" // basarili
403 = "Forbidden" // talep onaylanmadi
404 = "Not Found" // bulunamadi hatalari
*/

