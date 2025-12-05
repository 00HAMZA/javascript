const xhr = new XMLHttpRequest();
let res;
xhr.addEventListener('load', () => { // methode 1
    res = xhr.response; 
    console.log(res);
})
xhr.open('GET', 'https://supersimplebackend.dev/images/apple.jpg');
xhr.send();
