const pics = [
    'url("1.JPG")',
    'url("2.JPG")',
    'url("3.JPG")',
    'url("4.JPG")',
    'url("5.JPG")',
    'url("6.JPG")',
    'url("7.JPG")',
    'url("8.JPG")',
    'url("9.JPG")',
    'url("10.JPG")',
];
const pic = document.querySelector('section');

function showImage(){
    var a = Math.floor(Math.random()*pics.length);
    console.log(a);
    var img = pics[a]; 
    console.log(img);
    pic.style.backgroundImage = img;}

//setInterval(showImage,1000);