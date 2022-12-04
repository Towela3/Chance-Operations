const pics = [
    'url("1.jpg")',
    'url("2.jpg")',
    'url("3.jpg")',
    'url("4.jpg")',
    'url("5.jpg")',
    'url("6.jpg")',
    'url("7.jpg")',
    'url("8.jpg")',
    'url("9.jpg")',
    'url("10.jpg")',
    'url("11jpg")',
    'url("12.jpg")',
    'url("13.jpg")',
    'url("14.jpg")',
    'url("15.jpg")',
    'url("16.jpg")',
    'url("17.jpg")',
    'url("18.jpg")',
    'url("19.jpg")',
    'url("20.jpg")',
    'url("21.jpg")',
    'url("22.jpg")',
    'url("23.jpg")',
    'url("24.jpg")',
    'url("25.jpg")',
    'url("26.jpg")',
    'url("27.jpg")',
    'url("28.jpg")',
    'url("29.jpg")',
    'url("30.jpg")',
    'url("31.jpg")',
    'url("32.jpg")',
    
    
    
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