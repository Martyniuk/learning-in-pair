const BREEDS_URL = 'https://dog.ceo/api/breeds/image/random';

function addDoggo() {

    fetch(BREEDS_URL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            const img = document.createElement('img'); // creates new html tag
            img.src = data.message; // indicates tag atribute
            img.alt = 'quite dog'; // indicates tag atribute

            document.querySelector('.doggos')
                .appendChild(img);
        })

}

document.querySelector('.add-doggo')
    .addEventListener('click', addDoggo);
