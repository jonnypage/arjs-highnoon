# arjs-highnoon

This is a quick example of webAR using [ar.js](https://ar-js-org.github.io/AR.js/) with a marker. It loads a gltf file, and has interaction built in when the user clicks on the model. The model will stay in perspective to the user as long as they keep the camera pointed at the marker. The model can be interacted with by clicking or tapping on it.

## Requirements

- [Node.js](http://nodejs.org/)

## Getting Started

You can run the ar example by uploading it to a SSL encrypted server and opening `index.html`

## Installation Steps

1. Clone repo
2. Run `npm install`
3. Open `index.html` in your browser
4. If you make changes to the javascript files, run `npm run build` to get a new js bundle

---

The Asset can be viewed at https://jonnypage.github.io/arjs-highnoon/ using this pattern:

![ar pattern](https://jonnypage.github.io/arjs-highnoon/src/patterns/pattern-01.png)

A printable pdf version can be found [here](https://github.com/jonnypage/arjs-highnoon/blob/main/src/patterns/pattern-01-printable.pdf)

The interaction and animations are built using [A-Frame animations](https://github.com/aframevr/aframe) and the [A-Frame particle system](https://github.com/IdeaSpaceVR/aframe-particle-system-component)

## Documentation

### File Structure

    index.html
    src
     ┣ assets
     ┃ ┣ itshighnoon.ogg
     ┃ ┣ mccree-base-spinner.png
     ┃ ┣ mccree.gltf
     ┃ ┣ overwatch-logo.png
     ┃ ┗ scene.bin
     ┣ js
     ┃ ┣ app.js
     ┃ ┗ arjs-highnoon.js
     ┗ patterns
     ┃ ┣ pattern-01-printable.pdf
     ┃ ┣ pattern-01.png
     ┃ ┗ pattern-01.patt
     dist
     ┗ bundle.js

### index.html

`<a-scene>` is where arjs starts. It creates a A-Frame scene in which the camera is displayed, and all the assets live.

`<a-assets>` A-Frame has an [asset management system](https://aframe.io/docs/0.9.0/core/asset-management-system.html) that allows housing of assets in one place to preload and cache assets for better performance.
Each item has a unique `id` tag that we reference later in our entities

`<a-marker>` Markers are a sort of simplified qr-codes. In AR.js we define specific 3D scenes for specific markers, so when the camera recognizes a marker, the web-app shows the 3D model on top of it.

`<a-plane>` This is the entity that spins at the base of the model when the animation plays. It contains a number of [animation attributes](https://aframe.io/docs/0.9.0/components/animation.html) to setup the different animations that play. Note the Extra animations are needed to reset the entity states before the animation can play again.

`<a-entity id="particle-system">` This entity houses the [A-Frame particle system](https://github.com/IdeaSpaceVR/aframe-particle-system-component). It emits Overwatch logos during the animation

`<a-entity id="mccree-model">` This is the model entity. It is loaded via the asset management system by referencing the id of the `<a-asset-item>` setup earlier. It also houses the `a-frame` component `mccreehandler` used to listen for clicks/taps

`<a-entity camera>` The camera determines what the user sees.

### arjs-highnoon.js

This is the main script used for the interaction and animation.

`const audioHighNoon` is the [audio file](https://www.w3schools.com/jsref/met_audio_play.asp) used for the animation

`const isAnimationPlaying` is a `booolean` used to make sure the animation cannot be fired off again while it's playing.

`AFRAME.registerComponent` is the main handler. It references our model in `index.html` and an eventListener is added so we can listen for a click event.

`onMccreeHit()` is the function that runs when the click event fires.

It checks the `isAnimationPlaying` `boolean` to see if the animation is currently playing, and if it's not marks it as true to indicate the animation has started.

It then plays the audio `audioHighNoon`

Then triggers the animation for the spinning base via `emit()`

Followed by starting the particle system with the function `startParticles()`

Next there is a `setTimeout` function that waits for 2.5 seconds (2500ms) and stops the particle emitter with the function `stopParticles()`

Followed by another `setTimeout` function that waits for 4 seconds (4000ms) and toggles the `isPlayingAnimation` back to `false` so the animation can be started again.
