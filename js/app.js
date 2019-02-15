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
Img.data1 = [];
Img.data2 = [];

Img.prototype.render = function () {
  $('main').append('<div class="clone"></div>');
  let imageClone = $('div[class="clone"]');

  let imageHtml = $('#photo-template').html();

  imageClone.html(imageHtml);

  imageClone.find('img').attr('src', this.image_url);
  imageClone.find('p').text(this.description);
  imageClone.removeClass('clone');
};

const renderOption = function(arrChoice){
  arrChoice.forEach((obj) => {
    let keyword = obj.keyword;
    if (choices.indexOf(keyword) == -1) {
      choices.push(keyword);
    }
  });
  options()
}

function options () {choices.forEach((str) => {$('select').append(`<option>${str}</option>`)})}

Img.readJson = () => {
  $.get('../data/page-1.json', 'json')
    .then(data => {
      data.forEach(obj => {
        Img.data1.push(new Img(obj));
      });
    })
  $.get('../data/page-2.json', 'json')
    .then(data => {
      data.forEach(obj => {
        Img.data2.push(new Img(obj));
      });
    })
};

Img.loadImg = (arrChoice) => {
  arrChoice.forEach((images) => {
    images.render();
  })
  renderOption(arrChoice);
};


$('select').change(function(arrChoice){
  $('div').hide()
  arrChoice.forEach((images) => {
    let target = event.target.value;
    if(target === images.keyword){
      images.render();
    }

  });
})


$('#page1').click(function(){
  $('select').empty();
  choices = [];
  $('div').hide();
  Img.loadImg(Img.data1);
})

$('#page2').click(function(){
  $('select').empty();
  choices = [];
  $('div').hide();
  Img.loadImg(Img.data2);
})

$(() => Img.readJson());
