export const $ = el => document.querySelector(el)
export const $$ = el => document.querySelectorAll(el)

export function evaluaText (input){
    const text = input.value
    input.value = ""

    if(!text.trim()){
        return text=undefined
    }else{
        return text
    }
}
// Esta funcion realiza la filtracion entre los post, dependiendo del contenido de este
export function filterPost(searchContent, element){
    // Aunque el elemento se haya creado con una funcion, una vez que esta en el DOM se puede extraer para poder ser usado
    const liPosts = element.querySelectorAll("li")
        
    liPosts.forEach(post =>{
        // Los elementos que contenga el elemento se pueden extraer de una forma directa la propieda de interes
        const postText = post.querySelector("p").innerText;

        if(postText.toLowerCase().includes(searchContent.toLowerCase())){
            post.classList.remove("hide")
        }else{
            post.classList.add("hide")
        }
    })
}
