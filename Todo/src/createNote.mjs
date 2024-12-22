export function createNote (object, noteText) {
    const li = document.createElement("li");
    
    li.dataset.completed = "false"

    li.innerHTML=`
        <label>
            <input type="checkbox" class="is-completed" />
            <p class="note-text"> ${noteText}</p>
        </label>
    `

    if(li.dataset.completed === "true"){
        li.querySelector(".note-text").classList.add("completed")
    }
    object.appendChild(li)
}
