
const blogData = [
  {
      title: "My First Blog",
      desc: "This my first technical blog where i'll post technical terms of cs and it.",
      rlink: "thisismyfirstbloi",
      img_src: "/img/hello-world.png"
  },
  {
      title: "My Second Blog 2",
      desc: "This my second technical blog where i'll post technical terms of cs and it.",
      rlink: "thisismyfirstblogii",
      img_src: "/img/hello-world.png"
  },
  {
      title: "My Third Blog 3",
      desc: "This my third technical blog where i'll post technical terms of cs and it. Okay",
      rlink: "thisismyfirstblogiii",
      img_src: "/img/hello-world.png"
  }
]
const blogCol = document.getElementById("blogcol");

blogCol.innerHTML = `
${blogData.map(function(element) {
  return `
<div class="card" style="width: 18rem;">
                <img src="${element.img_src}" class="card-img-top" alt="${element.title} Image.">
                <div class="card-body">
                  <h5 class="card-title">${element.title}</h5>
                  <p class="card-text">${element.desc}</p>
                  <a href="#${element.rlink}">Read more...</a>

                </div>
                
                <div id="${element.rlink}" class="modalDialog">
                    <div>	<a href="#close" title="Close" class="close">X</a>
                
                            <h1>${element.title}</h2>
                
                        <p>${element.desc}</p>
                        
                    </div>
                </div>
    </div>
  `  
   
})}
`