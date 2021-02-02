let img = [
    'img/bazar.png',
    'img/begin.jpg',
    'img/robot.png',
    ['img/robot.png','img/22.jpeg'],
    ['img/robot.png','img/33.jpeg'],
    'img/ii.jpeg',
    ['img/ii.jpeg','img/66.jpeg'],
    ['img/ii.jpeg','img/77.jpeg'],
    'img/44.jpeg',
    'img/99.jpeg',
    // 'img/77.jpeg',
    // 'img/88.jpeg',
    // 'img/2.jpeg',

];
let subtitles =[
    'Giełda Papierów Wartościowych',
    'Giełda Papierów Wartościowych',
    'Robot handlowy',
    'Robot handlowy plusy',
    'Robot handlowy wady',
    'AI',
    'AI plusy',
    'AI plusy',
    'Wniosek',
    'Wniosek',
]
let myObjState = {
    elems:document.getElementsByClassName('test'),
    currentState:-2,
    decrement:function(){
        if(this.currentState < 0){
            this.changeState();
        }else{
            this.currentState--;
            this.changeState();
            
        }
    },
    increment:function(){
        if(this.currentState > this.elems.length-1){
            this.changeState();
        }
        else{
            this.currentState++;
            this.changeState();
        }
    },
    changeState:function(){
                
        for(let i =0; i < this.elems.length;i++){
            if(this.currentState > i){
                this.elems[i].classList.remove('active');
                this.elems[i].classList.add('from-left');
                let lf_c = this.elems[i].children[1]; //left child
                // console.log(this.elems[i].offsetWidth - lf_c.offsetWidth,(this.elems[i].offsetWidth - lf_c.offsetWidth) + lf_c.offsetWidth*(0.40-(i*(0.40/img.length))));
                lf_c.style.marginLeft = `${(this.elems[i].offsetWidth - lf_c.offsetWidth) + (lf_c.offsetWidth*(0.40-(i*(0.40/img.length))))}px`;
                // console.log(i,this.elems[i].of)
            }else if(i > this.currentState){
                this.elems[i].classList.remove('active');
                this.elems[i].classList.add('from-tight');
            }else{                
                this.elems[this.currentState].classList.remove('from-tight');
                this.elems[this.currentState].classList.remove('from-left');
                this.elems[this.currentState].classList.add('active'); 

                this.elems[this.currentState].children[1].style.marginLeft = '0px';
            }
        }                                                                                                                                                                                                  
        console.log(this.currentState);
    },
    lighOn:function(){
        document.body.classList.remove('begin');
        document.body.classList.add('continue');
    },
    lightOff(){
        document.body.classList.add('begin');
        document.body.classList.remove('continue');
    }


}

window.addEventListener('keydown',(e)=>{
    if(e.key == 'ArrowLeft'){
        myObjState.decrement();
    }else if(e.key == 'ArrowRight'){
        myObjState.increment();
    }else if(e.key == 'ArrowUp'){
        myObjState.lighOn();
    }else if(e.key == 'ArrowDown'){
        myObjState.lightOff();
    }
})
window.onload = function(){
    setTimeout(()=>{myObjState.lighOn();},5);
    setTimeout(()=>{myObjState.lightOff();},10);
    setTimeout(()=>{myObjState.lighOn();},15);
    setTimeout(()=>{myObjState.lightOff();},20);

    for(let i =0; i < img.length;i++){
        document.body.innerHTML += `
        <div class="test from-tight">
            <p>${subtitles[i]}</p>
            <div class="test__pict"></div>
            <div class="test__num"></div>
        </div>`;
        if(typeof(img[i]) == 'object'){
            // console.log(img[i]);
            // myObjState.elems[myObjState.currentState].children[0].innerHTML = '';
            for(let j =0; j < img[i].length;j++){
                myObjState.elems[i].children[1].innerHTML += `<div'>
                <img src='${img[i][j]}' width='${1000/img[i].length}px' height='${1000/img[i].length}px'></div>`;
            }
        }else{
            // myObjState.elems[myObjState.currentState].children[0].innerHTML = '';
            myObjState.elems[i].children[1].innerHTML += `<img src='${img[i]}' width='600px' height='600px'>`;
            console.log(myObjState.elems[i].children[0]);
        }
        if(i == img.length-1){
            myObjState.elems[i].children[2].innerHTML = `<p>${i+1}<span style='margin-left:10px;margin-right:10px;'>/</span>${img.length}.</p>`;
        }
        else{
            
            myObjState.elems[i].children[2].innerHTML = `<p>${i+1}<span style='margin-left:10px;margin-right:10px;'>/</span>1 x</p>`;
        }
    }
};

