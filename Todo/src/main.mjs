import {$,$$, statusBar, handleFilter} from "./utils.mjs"
import { createNote } from "./createNote.mjs"

const menuItems = $$(".menu-item");
const $form = $("form")
const $listNote = $(".list-note")
const $valueTodo = $(".value-todo");
const $menuButtons = document.querySelectorAll('.menu-item'); // Todos los botones del menú

$form.addEventListener("submit", e =>{
    e.preventDefault()    
    const value = getValueText($valueTodo)
    //Si no hay valor, por defecto es undefined
    if(value){

        $menuButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const filter = e.target.classList.contains('pending')
                    ? 'pending'
                    : e.target.classList.contains('con-completed')
                    ? 'completed'
                    : 'all';
        
                // Notificar el filtro seleccionado a la función principal
                handleFilter(filter, $listNote); // Función que filtra las notas
            });
        });

        createNote($listNote, value)
        $listNote.addEventListener("click", e=>{
            if(e.target.closest(".is-completed")){
                // const textNote = e.target.closest("li").querySelector(".note-text")
                // Hacer esto es como hacer lo de arriba
                const li = e.target.closest("li");
                const textNote = li.querySelector(".note-text");

                if(textNote.classList.contains("completed")){
                    textNote.classList.remove("completed")
                    li.dataset.completed = "false"
                }else{
                    textNote.classList.add("completed")
                    li.dataset.completed = "true"
                }
            }
        })//end 
    }// end first if
})
// function what control the status bar
statusBar(menuItems)

const getValueText = (inputValue) =>{
    const value = inputValue.value
    inputValue.value = ""

    if(!value.trim()){
        return value= undefined
    }else{
        return value
    }
}
