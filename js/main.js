// (function () {

// console.log(etsy);
var items = etsy.results;

var templateString = $('#itemTemplate').text(); //could use .html
// console.log(templateString);

var templateFunction = _.template(templateString); //.template "does the work for me" ..? makes a function, takes obj, returns template


_.each(items,  function(item, index) {
  // console.log(index);
  if (index <= 23) {
    // console.log(index);
    var itemHTML = templateFunction(item);
    $('.items').append(itemHTML);
  }
});





// var itemImages = etsy.results[0].Images[0].url_75x75;
// console.log(itemImages);




// HTML



  // var firstPageItems = [];

  // var listResults = function () {
  //   if (etsy.results.indexOf() <= 47) {
  //     firstPageItems.push(etsy.results);
  //   }
  // }

  // console.log(firstPageItems);

// }());



