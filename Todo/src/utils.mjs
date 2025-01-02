export const $ = el => document.querySelector(el)
export const  $$ = el => document.querySelectorAll(el)

export function statusBar (itemBar){
    itemBar.forEach((item) => {
        // Permitira por defecto mostrar siempre la seccion de All
        if(item.classList.contains("all")){
            item.classList.add("active")
        }
        item.addEventListener("click", () => {
            // Iterar para eliminar la clase active de todos los botones
            itemBar.forEach((el) => el.classList.remove("active"));
            // El boton que se presione se le acumulara la clase active 
            item.classList.add("active");
        });
    });
}

export function handleFilter(filter, object) {
    // Obtener los li del elemento o padre ul
    const notes = object.querySelectorAll('li');

    // filtrar por los li
    notes.forEach(note => {
        // verificar el valor de la propiedad 
        const isCompleted = note.dataset.completed === 'true';

        // this if/else control the visualization of the notes
        if (filter === 'pending' && isCompleted) { // This case control Completed
            note.style.display = 'none';
        } else if (filter === 'completed' && !isCompleted) { // this case control Pending
            note.style.display = 'none';
        } else { // This case control All
            note.style.display = '';
        }
    });
}

export const getValueText = (inputValue) =>{
    const value = inputValue.value
    inputValue.value = ""

    if(!value.trim()){
        return value= undefined
    }else{
        return value
    }
}



