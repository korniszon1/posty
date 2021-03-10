for(i=1;i<100;i++)
{
  fetch('https://jsonplaceholder.typicode.com/posts/'+i)
  .then((response) => response.json())
  .then((json) => document.getElementById('container').innerHTML +='<div class="Post" id="post'+i+'"> <h1>'+json.title+'</h1> <div class="content">'+json.body+'</div> <div id="space"></div></div> ');
}
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => console.log(json));
