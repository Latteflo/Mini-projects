const boxes=document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes)

checkBoxes();// if we don't want the animation to be triggered when the page is loaded, we can remove the calling of the function checkBoxes()

function checkBoxes(){
    const triggerBottom = window.innerHeight/5 *4
boxes.forEach(box => {
    const boxTop=box.getBoundingClientRect().top;
if (boxTop < triggerBottom){
    box.classList.add('show');
}else {
    box.classList.remove('show');
}
})}