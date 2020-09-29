const posts=[
    {title:'One Post',body:'This is post one'},
    {title:'Post two',body:'This is post two'}
];

function getPost(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post)=>{
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML=output;
    },1000);
}

function createPost(post){
    return  new Promise((resolve ,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error = true;
            if(!error){
                resolve();
            }
            else{
                reject("Something went wrong");
            }
        },2000);
    });
}

createPost({title:'Post Three',body:'This is post Three'})
    .then(getPost)
    .catch(err=>console.log(err));