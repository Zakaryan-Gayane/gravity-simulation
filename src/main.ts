import * as _ from 'lodash';
import { spawnCircle, update } from './circle';

let lastTime = performance.now();

function tick(currentTime: number) {
    const deltaTime = (currentTime - lastTime) / 1000; 
    lastTime = currentTime;

    update(deltaTime);
    requestAnimationFrame(tick);
}

requestAnimationFrame(tick);

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('gravityCanvas') as HTMLCanvasElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    requestAnimationFrame(tick);
    canvas.addEventListener('click', (event) => {
        const { offsetX, offsetY } = event;
        spawnCircle(offsetX, offsetY);
    });
});
function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());