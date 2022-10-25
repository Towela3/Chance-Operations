const pics = [
    'url("1.jpg")',
    'url("2.jpg")',
    'url("3.jpg")',
    'url("4.jpg")',
    'url("14.jpg")',
    'url("17.jpg")',
    'url("19.jpg")',
    'url("20.jpg")',
    'url("24.jpg")',
    'url("31.jpg")',
    
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