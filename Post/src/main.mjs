import { $,$$, evaluaText, filterPost } from "./utils.mjs";
import { createPost } from "./CreatePost.mjs";
const $form = $("form")
const $input = $(".post-input")

const $liPost = $("ul")
const $filter = $(".filter")

$filter.addEventListener("input", (e) => filterPost(e.target.value, $liPost))

$form.addEventListener("submit", e=>{
    e.preventDefault()

    const text = evaluaText($input)
    if(text){
        createPost(text,$liPost)
       
        let liPosts = $liPost.querySelectorAll("li")

        // Guardar el elemento en el local, pero antes debe ser convertido en una cadena, debido a que los nodos estan en formato JSON    
        // Se espesifica que elemento se obtendra, en este caso el elemento p, pero su texto    
        localStorage.setItem("myPost", 
            JSON.stringify(Array.from(liPosts).map(li => li.querySelector("p").innerText))
        );
    }
});

// Parsear la cadena al formato JSON
const POSTS = JSON.parse(localStorage.getItem("myPost"))
// Verificar si hay algun post, si los hay los genera
if(POSTS){
    POSTS.forEach(post => {
        createPost(post, $liPost)        
    });
}

$liPost.addEventListener("click", (e)=>{
    if (e.target.closest(".bttn-delete")) {
        // Encuentra el <li> correspondiente
        const li = e.target.closest("li");

        // Obtiene el texto del post
        const postText = li.querySelector("p").innerText;

        // Recupera los posts del localStorage como un arreglo
        let posts = JSON.parse(localStorage.getItem("myPost")) || [];

        // Filter se encargara de crear un nuevo arreglo que no incluya el texto que se eliminara al precionar el boton
        posts = posts.filter(p => p !== postText);

        // Guarda los posts actualizados en localStorage
        localStorage.setItem("myPost", JSON.stringify(posts));

        // Elimina el <li> del DOM
        li.remove();
    }
})
