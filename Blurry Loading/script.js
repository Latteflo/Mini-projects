const loadText =document.querySelector('.loading-text')
const bg = document.querySelector('.bg')


let load = 0

let int = setInterval(bluring,30);

function bluring(){
    load++

    if(load > 99){
        clearInterval(int)
 }
loadText.innerText = `${load}%`
loadText.style.opacity = scale(load, 0, 100, 1, 0)
bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}


const scale=(num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
}

//https://stackoverflow.com/questions/5731866/how-to-scale-down-a-number-range-to-0-1-using-a-constant-factor