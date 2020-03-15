let searchInputElem = document.querySelector('.search-input');
let outputContainerElem = document.querySelector('.output-container');

fetch('/assets/data/data.json')
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        searchInputElem.addEventListener('keyup', () => {
            outputContainerElem.innerHTML = "";

            let results = data.people.filter((person) => {
                let name = person.name.toLowerCase().includes(searchInputElem.value.toLowerCase());
                let age = person.age.toString().toLowerCase().includes(searchInputElem.value.toString().toLowerCase());
                let hairColor = person.hairColor.toLowerCase().includes(searchInputElem.value.toLowerCase());
                let height = person.height.toLowerCase().includes(searchInputElem.value.toLowerCase());
                let weight = person.weight.toLowerCase().includes(searchInputElem.value.toLowerCase());
                if (name || age || hairColor || height || weight)
                    return person;
            });

            if (results.length > 0) {

                results.forEach((person) => {
                    buildPersonView(person);
                })
            }
        })


    })
    .catch((err) => {
        console.log('err: ', err);

    })


function buildPersonView(person) {
    let name = document.createElement('p');
    let age = document.createElement('p');
    let hairColor = document.createElement('p');
    let height = document.createElement('p');
    let weight = document.createElement('p');
    let singlePersonContainer = document.createElement('div');

    singlePersonContainer.classList.add('single-container')

    name.innerHTML = `Name: ${person.name}`;
    age.innerHTML = `Age: ${person.age}`;
    hairColor.innerHTML = `Hair color: ${person.hairColor}`;
    height.innerHTML = `Height: ${person.height}`;
    weight.innerHTML = `Weight: ${person.weight}`;

    singlePersonContainer.appendChild(name);
    singlePersonContainer.appendChild(age);
    singlePersonContainer.appendChild(hairColor);
    singlePersonContainer.appendChild(height);
    singlePersonContainer.appendChild(weight);
    outputContainerElem.appendChild(singlePersonContainer);


}