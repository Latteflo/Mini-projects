const tagsEl=document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', (e) =>{
    createTags(e.target.value);
    if(e.key === 'Enter'){
      //clear text area
        setTimeout(() => {
            e.target.value = '';
        } , 10);

        //call function to select 
        randomSelect()
    }
})

// function to create tags/ trim and split the textarea value
function createTags(input){
    const tags = input.split(',').filter(tag => tag.trim()!=='').map(tag => tag.trim());
    
    tagsEl.innerHTML = '';

    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
    })
}

// function to select a random tag and highlight it when selected
function randomSelect(){
    const times= 30

    const interval = setInterval(() => {
        const randomTag =pickRandomTag()
      highlightTag(randomTag);

    setTimeout(() => {
        unhighlightTag(randomTag);
       },100)
    },100)

    setTimeout(() => {
        clearInterval(interval);
        setTimeout(() => {
            const randomTag =pickRandomTag()
            highlightTag(randomTag);
        },100)

    } , times*100)
}

function pickRandomTag(){
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag){
    tag.classList.add('highlight');
}

function unhighlightTag(tag){
    tag.classList.remove('highlight');
}