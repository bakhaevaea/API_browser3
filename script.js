const photoConainer = document.getElementById("photo_container");


async function fetchPhoto(){
    try{
        const response = await fetch("https://api.unsplash.com/photos/random?client_id=U5AG7YyU28OJJzB3ICVM66fPs7Vv-g3fD3yMYamkbnY");
        const photo = await response.json();
        return photo;
    } catch(error) {
        console.error("Ошибка при загрузке фотографии", error);
        return [];
    }

}

async function displayPhoto() {
    const dataPhoto = await fetchPhoto();
    image.src = dataPhoto.urls.regular;
    author.textContent = dataPhoto.user.name;
  }

function clickLike(){
    count_like.textContent = parseInt(count_like.textContent) + 1;
}

window.addEventListener('load', displayPhoto);
window.addEventListener('click', clickLike);