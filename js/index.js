
const dataURL = "http://localhost:3000/monsters/"
const pageLimit = "?_limit=5"
const pageParam = "&_page="
let pageNum = '1'



function getData() {
    console.log(document.querySelector('#monster-container'.innerHTML))
    fetch(`${dataURL}${pageLimit}${pageParam}${pageNum}`).then(res => res.json()).then(data => {
        console.log(data)
        const monsterList = document.querySelector('#monster-container')
        console.log(monsterList)
        data.forEach((monster) => {
            console.log(document.querySelector('#monster-container'.childNodes))
            monsterList.append(createMonster(monster))
        })
    })
}

function createMonster(monster) {
    const p = document.createElement('p')
    p.id = monster.id
    const h3 = document.createElement('h3')
    const h4Age = document.createElement('h4')
    const h4Desc = document.createElement('h4')
    h3.textContent = monster.name
    h4Age.textContent = monster.age
    h4Desc.textContent = monster.description
    p.append(h3, h4Age, h4Desc)
    return p
}

function pageForward() {
    const btnFwd = document.querySelector('#forward')
    btnFwd.addEventListener('click', (e)=> {
        console.log(e)
        pageNum++
        console.log(pageNum)
        getData()
    })
}

function newMonster() {
    const form = document.querySelector('#form')
    console.log(form)
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        const monsterObject = {
            name: `${e.target[0].value}`,
            age: `${e.target[1].value}`,
            description: `${e.target[2].value}`
        }
        console.log(monsterObject)
        fetch(`${dataURL}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(monsterObject)
            }).then(res => res.json().then(data=> console.log(data)))
        })
    }

function domLoaded() {
    document.addEventListener('DOMContentLoaded', (e)=> {
        console.log('DOM Loaded')
        getData()
        newMonster()
        pageForward()

    })
}

domLoaded()
