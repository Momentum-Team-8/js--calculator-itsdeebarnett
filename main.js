let output = document.querySelector('.output-button')
let newElement= document.createElement('h2')


document.getElementById('#seven').addEventListener('click', function (event){
    let seven = document.createTextNode(eval(output.Innertext))
    const erase = document.getElementById("output")
    erase.textContent = ''

    setTimeout(function(){
        newElement.appendChild(equal)
        output.appendChild(newElement)
    }, 200) ;
})

// document.querySelector('#seven').addEventListener('click', function (event){
//     let newEntry = document.createTextNode(event.target.innerHTML)
//     newElement.appendChild(newEntry)
//     output.appendChild(newElement)
//     console.log(event.target.innerHTML)
// })


