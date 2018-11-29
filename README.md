# Easy Slider
### v1.0.0

Easy Slider is a Jquery based plugin content slideshow script that incorporates some of your most requested features all rolled into one. Not only images, this slider can slide images and texts.

### Features of this Plugin
- Fade in effect that has the current content fading over the previous one.
- Slide effect that has each content block slid one by one left to right
- Each slide can have an images & text contents associated with it.

# Initialize

## HTML

``` html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script type="text/javascript" src="../easyslider/slider.js"></script>

<div id="slider">

  <a href="javascript:void(0);" data-arrow="prev" class="navArrow"><</a>
  <a href="javascript:void(0);" data-arrow="next" class="navArrow">></a>

  <div>
    <div class="slide active"> content </div>
    <div class="slide"> content </div>
    <div class="slide"> content </div>
    <!-- more divs -->
  </div>
  <div> <!-- separate blocks (optional) -->
    <div class="slide"> content </div>
    <div class="slide"> content </div>
    <div class="slide"> content </div>
    <!-- more divs -->
  </div>
  <div> <!-- separate blocks (optional) -->
    <div class="slide"> content </div>
    <div class="slide"> content </div>
    <div class="slide"> content </div>
    <!-- more divs -->
  </div>
</div>
```
## CSS

``` css
#slider > div > .slide:not(.active){
  visibility: hidden;
}
#slider > div > .slide.active{
  -webkit-animation: fadeIn 1s both;
  -moz-animation: fadeIn 1s both;
  -o-animation: fadeIn 1s both;
  -ms-animation: fadeIn 1s both;
  animation: fadeIn 1s both;
  visibility: visible;
}
```
## jQuery

``` js
$(function(){
  $('#slider').slider();
});
```

## [Demo](https://anfathhifans.github.io/easyslider/)
