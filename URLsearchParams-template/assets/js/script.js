let h1Elem1 = document.querySelector('.url-output-1');
let h1Elem2 = document.querySelector('.url-output-2');

let URLparams = new URLSearchParams(window.location.search);


h1Elem1.innerHTML = `This is the UrlParam: ${URLparams.get('id')}`;
h1Elem2.innerHTML = `This is the UrlParam: ${URLparams.get('data')}`;


