
let post= location.search.substring(1).split('=')[1];
$.ajax({
    url:"https://www.reddit.com"+post+ ".json"
}).then(function(sucess){
    let image=document.createElement("img");
    let div=document.createElement("div");
    let myPost=sucess[0].data.children[0].data;
    let title= document.createElement("h1")
    title.innerHTML=myPost.title
    let thumbnail=myPost.thumbnail;
    if(thumbnail=="self"){
        image.src="images/thumbs-up.png";
    }else{
    image.src=thumbnail;}
    div.appendChild(title);
    div.appendChild(image);
    document.body.appendChild(div);
    console.log(sucess);
    console.log(myPost)
})