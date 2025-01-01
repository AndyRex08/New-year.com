function createFirework()
{
    const firework = 
    document.createElement('div');
    firework.className = 'firework';
    firework.style.left = Math.random() * window.innerWidth + 'px';
    firework.style.top = Math.random() * window.innerHeight + 'px';

    firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

    document.body.appendChild(firework);
    setTimeout(() => {

        firework.remove();
    }, 1000);

}    

    setInterval(createFirework, 500);
