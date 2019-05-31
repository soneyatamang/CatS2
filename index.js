function getCatPhoto() {
    fetch('https://aws.random.cat/meow').then(function(response) {
        return response.json()
    }).then(function(catData) {
        // catData.file
        console.log(catData.file);
        // document.createElement
        // element.append
        // element.prepend
        let catImg = document.createElement("img");
        catImg.src = catData.file;
        let catContainer = document.getElementById("catContainer");
        catContainer.prepend(catImg);

    })
}

document.getElementById("getCatPhoto").onclick = getCatPhoto
