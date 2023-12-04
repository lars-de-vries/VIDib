
// Buttons
var waveButton = document.querySelector('body section > div:nth-of-type(1)');
var jumpButton = document.querySelector('body section > div:nth-of-type(2)');
var danceButton = document.querySelector('body section > div:nth-of-type(3)');


// Animations
var idleAnimation = document.querySelector('.idle-animation');
var waveAnimation = document.querySelector('.wave-animation');
var jumpAnimation = document.querySelector('.jump-animation');
var danceAnimation = document.querySelector('.dance-animation');


waveButton.addEventListener('click', function(){
    idleAnimation.classList.add('hide');
    jumpAnimation.classList.add('hide');
    danceAnimation.classList.add('hide');
    waveAnimation.classList.remove('hide');
    waveAnimation.play();
    setTimeout( () => {
        waveAnimation.classList.add('hide');
        idleAnimation.classList.remove('hide');
    }, 2000);
});

jumpButton.addEventListener('click', function(){
    idleAnimation.classList.add('hide');
    waveAnimation.classList.add('hide');
    danceAnimation.classList.add('hide');
    jumpAnimation.classList.remove('hide');
    jumpAnimation.play();
    setTimeout( () => {
        jumpAnimation.classList.add('hide');
        idleAnimation.classList.remove('hide');
    }, 2000);
});

danceButton.addEventListener('click', function(){
    idleAnimation.classList.add('hide');
    waveAnimation.classList.add('hide');
    jumpAnimation.classList.add('hide');
    danceAnimation.classList.remove('hide');
    danceAnimation.play();
    setTimeout( () => {
        danceAnimation.classList.add('hide');
        idleAnimation.classList.remove('hide');
    }, 2000);
});

