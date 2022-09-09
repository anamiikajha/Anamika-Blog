const blogCont = document.getElementById("blogcont");

// array for blog data

const blogData = [
    {
        title: "My First Blog",
        date: "9-09-22",
        desc: "This my first technical blog where i'll post technical terms of cs and it.",
        slug: "my-first-blog-1",
        img_src: "/img/hello-world.png"
    },
    {
        title: "My Second Blog",
        date: "9-09-22",
        desc: "This my second technical blog where i'll post technical terms of cs and it.",
        slug: "my-second-blog-2",
        img_src: "https://media.istockphoto.com/photos/number-2-decorated-with-light-bulb-covered-with-green-wood-picture-id1363839758?b=1&k=20&m=1363839758&s=170667a&w=0&h=z1xabpEzcCLgSJD5vVeS49jM9vW08mfQLCtBgoDFxAg="
    },
    {
        title: "My Third Blog",
        date: "9-09-22",
        desc: "This my third technical blog where i'll post technical terms of cs and it.",
        slug: "my-third-blog-3",
        img_src: "/img/hello-world.png"
    },
]

blogCont.innerHTML=`
${blogData.map(function(element){
    return `
    <div class="card" style="width: 18rem;">
    <img src="${element.img_src}" class="card-img-top" alt="...">
    <i class='ml-4 mt-4' style="margin-left: 16px;"><b>Date: </b>${element.date}</i>
                <div class="card-body">
                  <h5 class="card-title">${element.title}</h5>
                  <a href="#${element.slug}">Read</a>
                </div>

<div id="${element.slug}" class="modalDialog">
    <div><a href="#close" title="Close" class="close">X</a>
    <i class='text-center'><b>Date: </b>${element.date}</i>
        	<h2>${element.title}</h2>


        <p>This is a sample modal box that can be created using the powers of CSS3.</p>
        <p>You could do a lot of things here like have a pop-up ad that shows when your website loads, or create a login/register form for users.</p>
    </div>
</div>
            </div>
    `
})}
`