function zmienKolor() {
    const kolory = ["#eef2f3", "#d1e7ff", "#d4edda", "#fff3cd", "#f8d7da"];
    const losowyKolor = kolory[Math.floor(Math.random() * kolory.length)];

    document.body.style.backgroundColor = losowyKolor;
    alert("Zmieniono kolor tła!");
}
