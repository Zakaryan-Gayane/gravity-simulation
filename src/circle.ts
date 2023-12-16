interface Circle {
    x: number;
    y: number;
    radius: number;
    velocityY: number;
}

const ctx = (document.getElementById('gravityCanvas') as HTMLCanvasElement).getContext('2d')!;
const circles: Circle[] = [];

export function spawnCircle(x: number, y: number): void {
    const radius = 50;
    const velocityY = 0;
    circles.push({ x, y, radius, velocityY });
}

export function update(deltaTime: number): void {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    circles.forEach((circle) => {
        const gravity = 0.1;
        circle.velocityY += gravity * deltaTime;

        circle.y += circle.velocityY * deltaTime;

        if (circle.y + circle.radius > window.innerHeight) {
            circle.y = window.innerHeight - circle.radius;
            circle.velocityY *= -0.8; 
        }

        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.closePath();
    });

    circles.filter(circle => Math.abs(circle.velocityY) > 0.1);
}

