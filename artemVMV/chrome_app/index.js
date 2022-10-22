const inputFldEl = document.getElementById("inputFld")
const saveInputBtn = document.getElementById("saveInput")
const saveTabBtn = document.getElementById("saveTab")
const listEl = document.getElementById("listEl")

saveInputBtn.addEventListener("click", function(){
   addLiEl()
})

function addLiEl() {

    const newLine = document.createElement("li")
    newLine.innerHTML = inputFldEl.value 
   
    const newSpan = document.createElement("span")
    newSpan.innerHTML = 'Delete'

    newLine.appendChild(newSpan)
    listEl.appendChild(newLine)

    newSpan.addEventListener("click", function(e){
        const clickedSpan = e.currentTarget
        clickedSpan.parentElement.remove()
    })

    inputFldEl.value = ""
}


