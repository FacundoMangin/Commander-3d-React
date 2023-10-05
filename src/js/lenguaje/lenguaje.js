let langs = document.querySelector(".langs"),
     link = document.querySelectorAll("a"),

     subtitulo = document.querySelector(".header-subtitulo");

link.forEach(el=>{
     el.addEventListener("click", ()=>{
 

          subtitulo.textContent = data[attr].header-subtitulo
     })
})

let data = {
     english: {
          subtitulo: "Hello World",
         
     },
     espanol: {
          subtitulo: "Привет мир",
          
}}