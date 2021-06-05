const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all'; // pulling all breeds from API;
const select = document.querySelector('.breeds'); // select is DOM element, but not Array; we cannot push anything in DOM tag, for this purpose is used appendChild;

fetch(BREEDS_URL)
    .then(response => {
        return response.json();
    })
    .then(data => {
        //console.log(data) - may be used to check what data is obtained
        const breedsObject = data.message;
        const breedsArray = Object.keys(breedsObject); // converted to array, .keys function gets all keys out of an object

        for (let i = 0; i < breedsArray.length; i++) {
            const option = document.createElement('option'); // creating option tag in DOM
            option.value = breedsArray[i];
            option.innerText = breedsArray[i]; // making visible the value of option inserted above
            select.appendChild(option);
        }
    })

select.addEventListener('change', function (event) { // "event" may be called in any manner;

    let NEW_URL = `https://dog.ceo/api/breed/${event.target.value}/images/random`;

    getNewDoggo(NEW_URL);
    // fetch(NEW_URL) - also possible to indicated inside event listener
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(data => {
    //         const img = document.querySelector('.dog-image');
    //         img.src = data.message;
    //         img.alt = 'dog picture';
    //     })
});

const img = document.querySelector('.dog-image');
const spinner = document.querySelector('.spinner');

function getNewDoggo(NEW_URL) {
    spinner.classList.add('show');
    img.classList.remove('show');
    fetch(NEW_URL)
        .then(response => {
            return response.json();
        })
        .then(data => {
            img.src = data.message;
        })
}

img.addEventListener('load', function () {
    spinner.classList.remove('show');
    img.classList.add('show');
})
