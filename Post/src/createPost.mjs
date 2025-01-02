export const createPost = (text, object)=>{
    const li = document.createElement("li")

    li.innerHTML = `<label>
        <p>${text}</p>
        <div>
            <butto class="bttn-delete">Delete</butto>
        </div>
        </label>`
    object.appendChild(li)
}