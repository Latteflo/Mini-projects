const pianoKeys=document.querySelectorAll('.key')

function playSound(newUrl){
    new Audio(newUrl).play()
}

pianoKeys.forEach((pianoKey,i) =>{
    const number = i<9? '0'+ (i+1): (i+1)
    const newUrl='24-piano-keys/key' + number + '.mp3'
    pianoKey.addEventListener('click',()=> playSound(newUrl))
})


const keys = document.querySelectorAll('.key').length
for( let i = 0; i < keys; i++) {
    document.querySelectorAll(".key")[i].addEventListener('click', function(e){
        let keyInnerHtml = this.InnerHTML; 
        makeSound(keyInnerHtml);
        buttonClicked(keyInnerHtml);
     }
    )}

    document.addEventListener("keydown", function (e){
     makeSound(e.key)
     buttonClicked(e.key)
});


function makeSound(key){
    switch(key){
        case '.':
            let key1 = new Audio('./24-piano-keys/key01.mp3');
            key1.play();
            break;
        case '1':
            let key2 = new Audio('./24-piano-keys/key02.mp3');
            key2.play();
            break;
        case '2':
            let key3 = new Audio('./24-piano-keys/key03.mp3');
            key3.play();
            break;
        case '3':
            let key4 = new Audio('./24-piano-keys/key04.mp3');
            key4.play();
            break;
        case '4':
            let key5 = new Audio('./24-piano-keys/key05.mp3');
            key5.play();
        break;
        case '5':
            let key6 = new Audio('./24-piano-keys/key06.mp3');
            key6.play();
            break;
        case '6':
            let key7 = new Audio('./24-piano-keys/key07.mp3');
            key7.play();
            break;
        case '7':
            let key8 = new Audio('./24-piano-keys/key08.mp3');
            key8.play();
            break;
        case '8':
            let key9= new Audio('./24-piano-keys/key09.mp3');
            key9.play();
            break;
        case '9':
            let key10 = new Audio('./24-piano-keys/key10.mp3');
            key10.play();
            break;
        case 'a':
            let key11 = new Audio('./24-piano-keys/key11.mp3');
            key11.play();
            break;
        case 'w':
            let key12 = new Audio('./24-piano-keys/key12.mp3');
            key12.play();
            break;
        case 's':
            let key13 = new Audio('./24-piano-keys/key13.mp3');
            key13.play();
            break;
        case 'e':
            let key14 = new Audio('./24-piano-keys/key14.mp3');
            key14.play();
            break;
        case 'd':
            let key15 = new Audio('./24-piano-keys/key15.mp3');
            key15.play();
            break;
        case 'r':
            let key16 = new Audio('./24-piano-keys/key16.mp3');
            key16.play();
            break;
        case 'f':
            let key17 = new Audio('./24-piano-keys/key17.mp3');
            key17.play();
            break;
        case 't':
            let key18 = new Audio('./24-piano-keys/key18.mp3');
            key18.play();
            break;
        case 'g':
            let key19 = new Audio('./24-piano-keys/key19.mp3');
            key19.play();
            break;
        case 'y':
            let key20 = new Audio('./24-piano-keys/key20.mp3');
            key20.play();
            break;
        case 'h':
            let key21 = new Audio('./24-piano-keys/key21.mp3');
            key21.play();
            break;
        case 'u':
            let key22 = new Audio('./24-piano-keys/key22.mp3');
            key22.play();
            break;
        case 'j':
            let key23 = new Audio('./24-piano-keys/key23.mp3');
            key23.play();
            break;
        case 'i':
            let key24 = new Audio('./24-piano-keys/key24.mp3');
            key24.play();
            break;
            default:
    };
}

 buttonClicked =(key)=>{
        if(key === activeKey.innerHTML){
         activeKey.classList.add('active')      
         setTimeout(function(){
            activeKey.classList.remove('active')
           },100) 
        }
    }