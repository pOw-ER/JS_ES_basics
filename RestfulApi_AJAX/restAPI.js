document.querySelector('#getOne').addEventListener('click',getOne);
document.querySelector('#getAll').addEventListener('click',getAll);
document.querySelector('#postData').addEventListener('click',postData);

function getOne (){
  var id = document.querySelector('#postId').value; // wenn wir mit id ein post zeigen möchten
  var url ="https://jsonplaceholder.typicode.com/posts/"+id; // nur erste post zeigen wir.
  var xhr = new XMLHttpRequest();
  var loadImage= document.querySelector('#loading');
  loadImage.style.display = 'block';
  xhr.open('GET',url,true);
  xhr.onload = function(){
    if(this.status === 200){
      loadImage.style.display = 'none';
      var post = JSON.parse(this.responseText);
      var html = "";

      html += `<div class="card mb-2">
                <div class="card-header">
                ${post.id}-${post.title}
                </div>
                <div class="card-body">
                  <blockquote class="blockquote mb-0">
                    <p>${post.body}</p>

                  </blockquote>
                </div>
              </div>`;


      document.querySelector('#results').innerHTML = html;
    }
  }
  xhr.send();
}

function getAll (){
  var url ="https://jsonplaceholder.typicode.com/posts";
  var xhr = new XMLHttpRequest();
  var loadImage= document.querySelector('#loading');
  loadImage.style.display = 'block';
  xhr.open('GET',url,true);
  xhr.onload = function(){
    if(this.status === 200){
      loadImage.style.display = 'none';
      var posts = JSON.parse(this.responseText);
      var html = "";
      posts.forEach(post => {
        html += `<div class="card mb-2">
                <div class="card-header">
                  ${post.title}
                </div>
                <div class="card-body">
                  <blockquote class="blockquote mb-0">
                    <p>${post.body}</p>

                  </blockquote>
                </div>
              </div>`;
      });

      document.querySelector('#results').innerHTML = html;
    }
  }
  xhr.send();
}

function postData(){
  const data = {
    userId:1,
    title:"new title",
    body: "new body"
  }
  var json = JSON.stringify(data); // wandeln wir das Objekt zu JSON format um
  var url = "https://jsonplaceholder.typicode.com/posts";
  var xhr = new XMLHttpRequest();
  var loadImage= document.querySelector('#loading');
  loadImage.style.display = 'block';
  xhr.open('POST',url,true);
  xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
  xhr.onload = function(){
    if (xhr.status === 201 && xhr.readyState ===4){ // 201 html response code = created
      loadImage.style.display = 'none';
      var post = xhr.responseText;
      console.log(post);
    }
  }
  xhr.send(json);
}




