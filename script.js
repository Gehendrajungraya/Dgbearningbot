let miningInterval;

document.getElementById('startMining').addEventListener('click', () => {
    startMining();
});

document.getElementById('stopMining').addEventListener('click', () => {
    stopMining();
});

document.getElementById('miningForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const pool = document.getElementById('pool').value;
    const intensity = document.getElementById('intensity').value;
    alert(`Mining settings saved!\nPool: ${pool}\nIntensity: ${intensity}`);
});

function startMining() {
    const hashRateElement = document.getElementById('hashRate');
    let hashRate = 0;

    miningInterval = setInterval(() => {
        hashRate += Math.floor(Math.random() * 10); // Simulate hash rate increase
        hashRateElement.textContent = hashRate + ' H/s';
    }, 1000);
}

function stopMining() {
    clearInterval(miningInterval);
}