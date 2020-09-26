// AJAX = Asynchronous JavaScript And XML

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){ // onreadystatechange bedeutet, wenn auf der Seite sich etwas ändert, sollte diese Funktion funktionieren
  if(xhr.readyState === 4) {
    if(xhr.status === 200){
      console.log(xhr.responseText);
    }
    else if (xhr.status===404){
      console.log('recourses cannot find');
    }
  }
};

xhr.onprogress = function (){ // yükelrniken. örnegin server bir yükleme yaparken veya mesgulken loadong ikonu gösterilecegi zaman
  console.log('on progress');
}
// was wollen wir vom SERVER. wenn wir vom Server informationen erhalten wollen, benutzen wir oft GET oder manchmal POST(bei aktualisierung usw).
// msg.txt (welche Datei wollen wir)
// true = asynchronous, false = synchronous
xhr.open('GET','msg.txt',true);

xhr.send(); // calismadi hata veriyor !!!



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

