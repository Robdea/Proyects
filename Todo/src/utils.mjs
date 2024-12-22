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
    const notes = object.querySelectorAll('li');

    notes.forEach(note => {
        const isCompleted = note.dataset.completed === 'true';

        if (filter === 'pending' && isCompleted) {
            note.style.display = 'none';
        } else if (filter === 'completed' && !isCompleted) {
            note.style.display = 'none';
        } else {
            note.style.display = '';
        }
    });
}

