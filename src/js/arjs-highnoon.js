const audioHighNoon = new Audio('src/assets/itshighnoon.ogg');
let isAnimationPlaying = false;

AFRAME.registerComponent('mccreehandler', {
  init: function () {
    this.el.addEventListener('click', () => {
      // When the model is clicked, run the function onMccreeHit
      onMccreeHit();
    });
  },
});

function onMccreeHit() {
  // if the animation is not playing already, start the animation
  if (!isAnimationPlaying) {
    // Toggle the animation playing boolean so it can't be restarted
    // while it's already playing
    isAnimationPlaying = true;

    // Play the audio
    audioHighNoon.muted = false;
    audioHighNoon.play();

    // Start the animation for the spinning base
    const mccreeSpinner = document.getElementById('mccree-base-spinner');
    mccreeSpinner.emit('startAnimation');

    // Start the particle system throwing out the Overwatch Logos
    const particleSystem = document.getElementById('particle-system');
    particleSystem.components['particle-system'].startParticles();

    // Wait for 2.5 seconds
    setTimeout(function () {
      // Stop the particle system throwing out the Overwatch Logos
      particleSystem.components['particle-system'].stopParticles();
    }, 2500);

    // Wait for 5 seconds
    setTimeout(function () {
      // Now that the animation is finished, toggle the animation playing
      // boolean so it can be restarted
      isAnimationPlaying = false;
    }, 4000);
  }
}
