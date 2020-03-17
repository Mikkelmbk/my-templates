let outputElem = document.querySelector('.output');


fetch('http://localhost:3000/test1')
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log('data: ', data);

        outputElem.innerHTML = `Name: ${data.name} |  Age: ${data.age}`;

    })