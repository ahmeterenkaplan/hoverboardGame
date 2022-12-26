const container = document.getElementById('container')

const color =['#191A19','#1E5128','#4E9F3D','#D8E9A8']
const SQUARES=484

for(let i=0;i<SQUARES;i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))



    container.appendChild(square)
}

function setColor(div) {
    const randomColor=getRandomColor()
    div.style.backgroundColor=randomColor
    div.style.boxShadow=`0 0 2px ${randomColor}, 0 0 10px  ${randomColor}`
}

function getRandomColor(){
    return color[Math.floor (Math.random()*color.length)]
}

function removeColor(div){
    div.style.backgroundColor='#111'
    div.style.boxShadow='0 0 2px #000'
}
