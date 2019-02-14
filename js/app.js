'use strict';
let choices = [];
//const function
function Img(images){
  this.image_url = images.image_url;
  this.title = images.title;
  this.description = images.description;
  this.keyword = images.keyword;
  this.horns = images.horns;
}
//instances of data
Img.allImages = [];

Img.prototype.render = function () {
  $('main').append('<div class="clone"></div>');
  let imageClone = $('div[class="clone"]');

  let imageHtml = $('#photo-template').html();

  imageClone.html(imageHtml);

  imageClone.find('img').attr('src', this.image_url);
  imageClone.find('p').text(this.description);
  imageClone.removeClass('clone');
};

Img.readJson = () => {
  $.get('../data/page-1.json', 'json')
    .then(data => {
      data.forEach(obj => {
        Img.allImages.push(new Img(obj));
      });
    })
    .then(Img.loadImg);
};

Img.loadImg = () => {
  Img.allImages.forEach(images => images.render());
};

$(() => Img.readJson());


///////////////////
//drop down menu///

Img.prototype.renderOption = function(){
    Img.forEach((images) => 
        options.push(Img.this.keyword)
    })
};


addEventListener('sumbit', function(){

})
