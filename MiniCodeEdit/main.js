const $$ =el => document.querySelectorAll(el);
const $ = el => document.querySelector(el);

const htmlCode = $("#html-code");
const cssCode = $("#css-code");
const jsCode = $("#js-code");
const $opLanguage = $$(".menu-environment")
const coderEditors = $$(".coder-edit")

const getSavedContentHtml = localStorage.getItem("codeHtml")
const getSavedContentCss = localStorage.getItem("codeCss")
const getSavedContentJs = localStorage.getItem("codeJs")

// console.log(getSavedContent)

if(getSavedContentHtml || getSavedContentCss|| getSavedContentJs){
    htmlCode.value = getSavedContentHtml
    jsCode.value = getSavedContentJs
    cssCode.value = getSavedContentCss
}

function run(){
    const output = $("#output")

    output.contentDocument.body.innerHTML =`
    ${htmlCode.value} <style>${cssCode.value}</style>
    `
    
     
    output.contentWindow.eval(jsCode.value)

    saveContent(htmlCode.value, cssCode.value, jsCode.value)
}

function saveContent(contentHtml, contentCss, contentJS){

    if(contentHtml || contentCss || contentJS){
        localStorage.setItem("codeHtml", contentHtml)
        localStorage.setItem("codeCss", contentCss)
        localStorage.setItem("codeJs", contentJS)
    }
}




$opLanguage.forEach(op =>{
    op.addEventListener("click", (e)=>{
        if (e.target.classList.contains("op-html")) {
            handleFilter("op-html");
        } else if (e.target.classList.contains("op-css")) {
            handleFilter("op-css");
        } else if (e.target.classList.contains("op-js")) {
            handleFilter("op-js");
        }
    })
})

function handleFilter(filter){

    coderEditors.forEach(edit =>{
        if(filter === "op-css" && edit.classList.contains("css")){
            edit.style.display = "flex"
        }else if(filter === "op-js" && edit.classList.contains("js")){
            edit.style.display = "flex"
        }else if(filter === "op-html" && edit.classList.contains("html5")){
            edit.style.display = "flex"
        }
        else{
            edit.style.display = "none";
        }
    })
}

htmlCode.addEventListener("keyup", run)
jsCode.addEventListener("keyup", run)
cssCode.addEventListener("keyup", run)

