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

---

The interaction and animations are built using [A-Frame animations](https://github.com/aframevr/aframe) and the [A-Frame particle system](https://github.com/IdeaSpaceVR/aframe-particle-system-component)
