function zmienKolor() {
    const colors = ["#f0f0f0", "#d1e7ff", "#d4edda", "#fff3cd"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}
