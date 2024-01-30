let listBooks = {
    name: "Otong",
    ege: 30,
    nam: "2078899",
    time: 12,
    isGoHome: function (speed) {
        let addSpeed = speed + this.time;
        if (addSpeed => 20) {
            console.log(`Sekarang kecepatan ${addSpeed}`)
        }
        return addSpeed;
    }
}

console.log(listBooks.isGoHome(22));
