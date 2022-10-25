const pics = [
    'url("1.jpg")',
    'url("2.jpg")',
    'url("3.jpg")',
];
const pic = document.querySelector('section');

function showImage(){
    var a = Math.floor(Math.random()*pics.length);
    console.log(a);
    var img = pics[a]; 
    console.log(img);
    pic.style.backgroundImage = img;}


//setInterval(showImage,1000);
setTimeout(section, 3000);