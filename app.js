const eyeBall = document.querySelectorAll('.eye-ball');
// console.log(eyeBall);
document.addEventListener('mousemove', (event) => {
    let x = event.clientX * 100 / window.innerWidth + "%";
    let y = event.clientY * 100 / window.innerHeight + "%";
    console.log(x + y);
    for (let i = 0; i < eyeBall.length; i++) {
        eyeBall[i].style.top = y;
        eyeBall[i].style.left = x;
        eyeBall[i].style.transform = "translate(-" + x + ",-" + y + ")";
    }
});
