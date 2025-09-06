import { Application } from "https://cdn.jsdelivr.net/npm/@splinetool/runtime@1.9.20/build/runtime.min.js";

const canvas = document.getElementById('model');
const app = new Application(canvas);
app.load('https://draft.spline.design/fARYofSlfBRA5t0b/scene.splinecode');