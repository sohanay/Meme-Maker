const form = document.querySelector('#form');
const photos = document.querySelector('#photos');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const newDiv = document.createElement('div');
    const newImg = document.createElement('img');
    const divTopText = document.createElement('div');
    const divBottomText = document.createElement('div');
    const url = document.querySelector('input[name="image"]');
    const topText = document.querySelector('input[name="top text"]');
    const bottomText = document.querySelector('input[name="bottom text"]');
   

    photos.appendChild(newDiv);
    newDiv.appendChild(divTopText);
    newDiv.appendChild(newImg);
    newDiv.appendChild(divBottomText);
    divTopText.innerText = topText.value;
    divBottomText.innerText = bottomText.value;
    newImg.src = url.value;
    newImg.width = 250;
    newDiv.className = 'hello';
    divTopText.className = 'topz';
    divBottomText.className = 'bottomz';
    url.value = '';
    topText.value = '';
    bottomText.value = '';
});

photos.addEventListener('click', function (e) {
    const selectedPhoto = e.target.parentElement;
    if (selectedPhoto.className === 'hello') {
        selectedPhoto.remove();
    }
});