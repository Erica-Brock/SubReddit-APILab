$.ajax({
    url:"https://www.reddit.com/r/Gandalf/.json"
}).then(function(sucess){
    console.log(sucess);
    let post= sucess.data.children;
    console.log(post);
   
    for(i=0; i<post.length; i++){
        let postContainer=document.createElement("div");
        let link=document.createElement("a");
        let previewImg=document.createElement("img");
        let title=post[i].data.title;
        let thumbnail=post[i].data.thumbnail;
        previewImg.className ="thumbnail"
        if(thumbnail=="self"){
            previewImg.src="images/thumbs-up.png";
        }else{
        previewImg.src=thumbnail;}
        permalink=post[i].data.permalink
        console.log(permalink);
       link.href=`single.html?url=${permalink}`;
        link.innerHTML=title;
        postContainer.appendChild(link);
        postContainer.appendChild(previewImg);
        document.body.appendChild(postContainer);
    }

})