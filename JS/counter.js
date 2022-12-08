let shake = document.getElementById("number")
let number = shake.innerHTML
let estimatedTime = document.getElementById("estimatedTime")

//When the add button is clicked, the number is ++ and the wait time is adjusted.
const addOne = () => {
    number++
    document.getElementById("number").innerHTML = number

    if (number >= 15) {
        estimatedTime.innerHTML = "Estimated Wait: --Please Submit Ticket--"
    } else if (number >= 10) {
        estimatedTime.innerHTML = "Estimated Wait: 15+ Minutes"
    } else if (number >= 1) {
        let wait = number * 1.5
        estimatedTime.innerHTML = `Estimated Wait: ${wait} Minutes`
    } else {
        estimatedTime.innerHTML = "Estimated Wait: 0 Minutes"
    }
}

//When the subtract button is clicked, the number is -- and the wait time is adjusted.
const subtractOne = () => {
    if (number > 1) {
        number--
        document.getElementById("number").innerHTML = number

        if (number >= 15) {
            estimatedTime.innerHTML = "Estimated Wait: --Please Submit Ticket--"
        } else if (number >= 10) {
            estimatedTime.innerHTML = "Estimated Wait: 15+ Minutes"
        } else if (number >= 1) {
            let wait = number * 1.5
            estimatedTime.innerHTML = `Estimated Wait: ${wait} Minutes`
        } else {
            estimatedTime.innerHTML = "Estimated Wait: 0 Minutes"
        }
        //If number is about to be reset to 0 prompt the user
    } else if (number === 1) {
        if (confirm("Are all students done being helped?")) {
            number--
            document.getElementById("number").innerHTML = number

            estimatedTime.innerHTML = "Estimated Wait: 0 Minutes"
        } else {
            alert("PLease finish helping all students before reseting office population to 0")
        }
    }
}

//Clears the shown number back to 0 and resets the wait time
const clearAll = () => {
    if (number === 0) {
        return
    }
    //Ask user if all students haves been helped.
    if (confirm("Are all students done being helped?")) {
        //If the number is not 0, we add the shake class and CSS animation.
        if (number != 0) {
            shake.classList.add("shake")
        }

        //Reset the number back to 0
        number = 0
        document.getElementById("number").innerHTML = number

        estimatedTime.innerHTML = "Estimated Wait: 0 Minutes"
    } else {
        alert("Please finish helping students before reseting office population to 0")
    }
}

// After the shake animation completes, it removes the shake class so it can be reapplied later
shake.addEventListener("animationend", () => {
    shake.classList.remove("shake")
})
