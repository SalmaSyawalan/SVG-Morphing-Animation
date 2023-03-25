const moonPath = "M16.5 28.5C16.5 43.6878 27.5 56 27.5 56C12.3122 56 0 43.6878 0 28.5C0 13.3122 12.3122 0.999999 27.5 0.999999C27.5 0.499999 16.5 13.3122 16.5 28.5Z";
const sunPath = "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z";
const darkMode = document.querySelector("#darkMode");
let toggle = false;

//clickable sun
darkMode.addEventListener('click', () => {
    //use anime.js
    const timeline = anime.timeline({
        duration : 750,
        easing : "easeOutExpo"
    });
    //append new animation to timeline
    timeline.add({
        targets : ".sun", //similar with querySelector
        d : [
            {value : moonPath} //an array of objects which are the data points
        ]
    })
    .add ({
        targets : "#darkMode",
        rotate : 320
    }, '-= 300')
    .add({
        targets : "section",
        backgroundColor : 'rgb(22,22,22)'
    }, '-=700')
    .add({
        targets : ".title .lightModeTitle",
        opacity : 0,
        scale : 3,
        color : 'rgb(199, 199, 199)'
    }, '-=700')
    .add({
        targets : ".title .darkModeTitle",
        opacity : [0, 1],
        scale : [0.2, 1]
    }, '-=700')

    toggle = !toggle;
});