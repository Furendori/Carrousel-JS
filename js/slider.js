'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/



/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

$(document).ready(function () {
    $( "#toolbar-toggle" ).click(function() {
    $(".toolbar").toggleClass("hidden");
    $("#jquery").toggleClass("fa fa-arrow-down")
    });
})

var slider_img = document.querySelector('#img-slider');
var slider_btnnext = document.querySelector('#slider-next')
var slider_btnnprevious = document.querySelector('#slider-previous')
var images = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg', 'images/6.jpg'];
var position = 0

function show() {
    slider_img.src = images[position]
}

function next() {
    position++
    if (position > images.length -1) {
        position = 0
    }
    show()
}

function previous() {
    position--
    if (position > images.length +1) {
        position = -1
    }
    show()
}

function random() {
    
} 
/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

document.addEventListener('DOMContentLoaded', show)
slider_btnnext.addEventListener('click', next)
slider_btnnprevious.addEventListener('click', previous)

