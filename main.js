const WINCASES = ["1,2,3", "4,5,6", "7,8,9", "1,4,7", "2,5,8", "3,6,9", "1,5,9", "3,5,7"]
let curentuser = true
let user1 = []
let user2 = []

function user1move(button) {
    user1.push(button.innerHTML)
    button.innerHTML = "X"
    button.removeEventListener("click", OnClick)

    let win = WINCASES.find((props) => {
        return user1.sort().toString().search(props) > -1
    })
    if (win != null) {
        let elements = win.split(",");
        elements.forEach((props) => {
            let query = `[data-value="${props}"]`

            let element = document.querySelector(query)

            element.style.backgroundColor = "lightgreen"

        })


        setTimeout(() => {

            startgame(`user x has won the game`)
        }, 1000)
    }

}
function user2move(button) {
    user2.push(button.innerHTML)
    button.innerHTML = "O"
    button.removeEventListener("click", OnClick)

    let win = WINCASES.find((props) => {
        return user2.sort().toString().search(props) > -1
    })

    if (win != null) {
        let elements = win.split(",");
        elements.forEach((props) => {
            let query = `[data-value="${props}"]`

            let element = document.querySelector(query)

            element.style.backgroundColor = "lightblue"

        })


        setTimeout(() => {

            startgame(`user O has won the game`)
        }, 1000)
    }


}

function OnClick(event) {
    if (curentuser) {
        user1move(event.target)
    } else {
        user2move(event.target)
    }
    curentuser = !curentuser

}

function startgame(message) {
    let buttons = document.querySelectorAll(".j-button")
    curentuser = true;
    user1 = [];
    user2 = [];
    if (message) {
        alert(message)
    }


    buttons.forEach((button, index) => {
        button.addEventListener("click", OnClick)
        button.innerHTML = index + 1
        button.style.backgroundColor = "unset"
    })

}
startgame()