let btn = document.querySelector("button")
let cont = document.querySelector(".container")

let xhr = new XMLHttpRequest()
xhr.open("GET", "https://fakestoreapi.com/users", true)

function fun() {

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let x = JSON.parse(this.responseText)
            console.log(x)


            x.forEach((element, index) => {
                let newb = `<div class='card'>
            <h2>Name : ${element.name.firstname}</h2>
            <h3>Phone : ${element.phone}</h3>
            <h4>Password : ${element.password}</h4>
            <address>Email : ${element.email}</address>
             </div>`
                    
             cont.insertAdjacentHTML('beforeend', newb)
            });
        }
    }
    xhr.send()
}
