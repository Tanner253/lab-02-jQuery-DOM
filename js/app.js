var allImages = [] //instances of data
//const function
function Image(images){
    this.image_url = images.image_url;
    this.title = images.title;
    this.description = images.description;
    this.keyword = images.keyword;
    this.horns = images.horns;
}

Image.prototype.render =  function () {
    $('main').append('<div class="clone"></div>');
    let imageClone = $('div[class="clone"]');

    let imageHtml = $('#photo-template').html()

    imageClone.html(imageHtml)


//might not work!

    imageClone.find('img').attr(
        src: 'this.image_url')


    imageClone.find('p').text(this.description);
}

Image.readJson = () => {
    $.get('page-1.json', 'json')
        .then(data => {
            data.forEach(obj => {
                Image.allImages.push(new Image(obj))
            })
        })
        .then(Image.loadImage)
}
Image.loadImage = () => {
    Image.allImages.forEach(images => images.render)
}

$(() => Image.readJson());