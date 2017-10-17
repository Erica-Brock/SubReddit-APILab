$.ajax({
    url:"https://www.reddit.com/r/Gandalf/.json"
}).then(function(sucess){
    console.log(sucess);
    let post= sucess.data.children;
    console.log(post);
    for(i=0; i<post.length; i++){
        postContainer=document.createElement("div");
        link=document.createElement("a");
        title=post[i].data.title;
        link.href=post[i].data.url;
        link.innerHTML=title;
        document.body.appendChild(postContainer);
        postContainer.appendChild(link);
    }

})