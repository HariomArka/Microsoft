let k = document.querySelector('.nothanks');
console.log(k.innerHTML)
k.addEventListener('click', () => {
    document.querySelector('.aitop').style.display = 'none'
})

let images = ['https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Surface-Pro-AI-11Ed-Sapphire-MC001-3000x1682:VP4-1399x600','https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-MultiCanvas-Microsoft-Copilot-App-3screens:VP4-1399x600']
p=document.querySelector('.firstimage')
let i=0;
setInterval(() => {
    if(i==0){
        p.innerHTML=''
        p.innerHTML=`<div class="image">
                <img src="${images[1]}"
                    alt="">
            </div>
            <div class="cardlearnnew">
                <div class="meet">
                    Unlock your potential with Microsoft Copilot
                </div>
                <div class="laptop">
                    Get things done faster and unleash your creativity with the power of AI anywhere you go.
                </div>
                <div class="download">
                    Download the Copilot app
                </div>
            </div>`
        i=i+1;
        document.querySelector('.cardlearnnew').style.display='flex'
    }
    else if(i==1){
        p.innerHTML=''
        p.innerHTML=`<div class="image">
                <img src="${images[0]}"
                    alt="">
            </div>
            <div class="cardlearn">
                <div class="new">
                    New
                </div>
                <div class="meet">
                    Meet Surface Pro
                </div>
                <div class="laptop">
                    This laptop's unrivalled flexibility and AI features like Live Captions and Cocreator, enable you to
                    do more than you ever imagined.
                </div>
                <div class="learn">
                    Learn more
                </div>
            </div>
`
        i=i+1;
        
    }
    else if(i==2){
        i=0;
    }
}, 3000);

previous.addEventListener('click', (e) => {
    if (document.querySelector('.image').innerHTML == `<img src="${images[0]}" alt="">`) {
        console.log(e)
        document.querySelector('.image').innerHTML = `<img src="${images[1]}"
                    alt="">`
        document.querySelector('.cardlearn').style.display='none'
        document.querySelector('.cardlearnnew').style.display='flex'
    }
    else {
        document.querySelector('.image').innerHTML = `<img src="${images[0]}"
                    alt="">`
        document.querySelector('.cardlearn').style.display='flex'
        document.querySelector('.cardlearnnew').style.display='none'
    }
})

next.addEventListener('click', (e) => {
    if (document.querySelector('.image').innerHTML == `<img src="${images[0]}" alt="">`) {
        console.log(e)
        document.querySelector('.image').innerHTML = `<img src="${images[1]}"
                    alt="">`
        document.querySelector('.cardlearn').style.display='none'
        document.querySelector('.cardlearnnew').style.display='flex'
    }

    else {
        document.querySelector('.image').innerHTML = `<img src="${images[0]}"
                    alt="">`
        document.querySelector('.cardlearn').style.display='flex'
        document.querySelector('.cardlearnnew').style.display='none'
    }
})

const screenWidth = window.innerWidth;

console.log(screenWidth);

if(screenWidth<=767){
    document.querySelector('.footer').innerHTML=`
    <div class="newapart flex">
        <div>
            English (India)
        </div>

        <div>
            Your Privacy choices
        </div>

        <div>
            Consumer Health Privacy
        </div>

        <div class="newpartany flex">
            <div>
                Contact Microsoft
            </div>
            <div>
                Privacy
            </div>
            <div>
                Terms of use
            </div>
            <div>
                Trademarks
            </div>
            <div>
                About our ads
            </div>
            <div>
                © Microsoft 2024
            </div>
        </div>
    </div>`

    document.querySelector('.footer').classList.add('anewclass')
    document.querySelector('.footer').style.gap='20px';
}