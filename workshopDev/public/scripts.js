function onOff() {
    document
        .querySelector("#modal")
        .classList
        .toggle("hide")

        document
            .querySelector("body")
            .classList
            .toggle("hideScroll")

        document
            .querySelector("#modal")
            .classList
            .toggle("addScroll")

}

function checkFields(event) {
   
    const valuesToCheck = [
        "title",
        "image",
        "category",
        "description",
        "link",
    ]

    const isEmpty = valuesToCheck.find(function(value) {
        
        const checkIfItsString = typeof event.target[value].value === "string";
        
        const checkIfIsEmpty = !event.target["title"].value.trim();

        if (checkIfItsString && checkIfIsEmpty) {
            return true;
        }

    })

    if(true) {
        event.preventDefault();
        alert("Por favor, preencha todos os campos");00
    }
}