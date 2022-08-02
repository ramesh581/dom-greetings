// let timer = 1000;
// let text1 = document.getElementById('div1');
// let text2 = document.getElementById('div2');

// setTimeout(function() {
//     text1.innerHTML = 5;
//     text1.style.color = 'red';
    
//     },timer);

// setTimeout(function() {
//     text1.innerHTML = 4;
//     text1.style.color = 'black';
//     },timer*2);

// setTimeout(function() {
//     text1.innerHTML = 3;
//     text1.style.color = 'pink';
//      },timer*3);
    
//  setTimeout(function() {
//     text1.innerHTML = 2;
//     text1.style.color = 'green';
//     },timer*4);

// setTimeout(function() {
//     text1.innerHTML = 1;
//     text1.style.color = 'red';
//     },timer*5);

// setTimeout(function() {
//     text1.style.display = 'none';
//     text2.innerHTML = 'HAPPY NEW YEAR';
//     text1.style.color = 'green';
//     text2.style.fontFamily = 'Helvetica';
//     },timer*6);
                
                
let timer = 1000;
let text1 = document.getElementById('div1');
let text2 = document.getElementById('div2');

let time = 10;

text1.innerHTML = time--;

setTimeout(()=>{
    text1.innerHTML = time--;
    setTimeout(()=>{
        text1.innerHTML = time--;
        setTimeout(()=>{
            text1.innerHTML = time--;
            setTimeout(()=>{
                text1.innerHTML = time--;
                setTimeout(()=>{
                    text1.innerHTML = time--;
                    setTimeout(()=>{
                        text1.innerHTML = time--;
                        setTimeout(()=>{
                            text1.innerHTML = time--;
                            setTimeout(()=>{
                                text1.innerHTML = time--;
                                setTimeout(()=>{
                                    text1.innerHTML = time--;
                                    setTimeout(()=>{
                                        text1.innerHTML = 'HAPPY INDEPENDENCE DAY';
                                    },timer);
                                },timer);
                            },timer);
                        },timer);
                    },timer);
                },timer);
            },timer);
        },timer);
    },timer);
},timer);


