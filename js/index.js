
const dataURL = "http://localhost:3000/monsters/"
const pageLimit = "?_limit=5"
const pageParam = "&_page="
let pageNum = '1'



function getData() {
    fetch(`${dataURL}${pageLimit}${pageParam}${pageNum}`).then(res => res.json()).then(data => {
        console.log(data)
        const monsterList = document.querySelector('#monster-container')
        console.log(monsterList)
        data.forEach((monster) => {
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

function domLoaded() {
    document.addEventListener('DOMContentLoaded', (e)=> {
        console.log('DOM Loaded')
        getData()
        pageForward()
    })
}

domLoaded()
