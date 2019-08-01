const htmlBuilder = {
    //Function to build and return an element taking in element, text, and id as arguments.
    createElementWithText(element, text, id, className, elementValue) {
        const newElement = document.createElement(element)
        if (text) {
            newElement.textContent = text   
        }                                                                                 
                                                                                                
        if (id) {                                                                                
            newElement.id = id                                                                    
                                                                                                  
        }

        if (className) {
            newElement.classList.add(className)
        }
        if (elementValue) {
            newElement.setAttribute("value", elementValue)
        }
        return newElement
    }}
    

let displayContainer = document.querySelector("display-container")
    let createButton = htmlBuilder.createElementWithText("button","Create","create--button","createBtn")
    let textInput = htmlBuilder.createElementWithText("input",undefined,"text--input")
    let cardDiv = htmlBuilder.createElementWithText("div",)

    createButton.addEventListener("click", function(){
        let card = htmlBuilder.createElementWithText("div",undefined,undefined,"newCard")

        let cardHeader = htmlBuilder.createElementWithText("h2")
        cardHeader.textContent = textInput.value;
        let deleteButton = htmlBuilder.createElementWithText("button","delete",undefined,"deleteB")
        card.appendChild(cardHeader)
        card.appendChild(deleteButton)
        document.body.append(card)

        deleteButton.addEventListener("click",function(){

            card.remove()
        })

displayContainer.appendChild(cardDiv)
cardDiv.appendChild(textInput)
textInput.appendChild(createButton)



    })