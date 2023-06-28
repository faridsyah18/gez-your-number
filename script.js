alert('MARI MAIN TEBAK ANGKA!!!! BERSAMA MR. GEZ!!!');

let mainLagi = true;
const nomorAcak = Math.random();

while (mainLagi) {
    let maximum = parseInt(prompt('Masukkan nilai maksimal!'));
    while (!maximum) {
        maximum = parseInt(prompt('Masukkan nilai maksimal!'));
    }

    const targetNum = Math.floor(Math.random() * maximum) + 1;

    let guess = parseInt(prompt('Isi tebakan pertama kamu!'));
    let attempts = 1;

    while (parseInt(guess) !== targetNum) {
        attempts++;
        if (guess > targetNum) {
            if (guess - targetNum < 4) {
                guess = prompt('Hampir, nilai yang kamu isi masih sedikit lebih tinggi!');
            } else {
                guess = prompt('Terlalu tinggi! Tebak lagi!');
            }
        } else {
            if (targetNum - guess < 4) {
                guess = prompt('Hampir, nilai yang kamu isi masih sedikit lebih rendah!');
            } else {
                guess = prompt('Terlalu rendah! Tebak lagi!');
            }
        }
    }

    alert(`Selamat tebakkan anda benar!! 
    ( dengan percobaan ${attempts} x )`);

    mainLagi = confirm('Main Lagi ?');
}

if (mainLagi === false) {
    alert('TERIMA KASIH TELAH BERMAIN!');

    setTimeout(function() {
        window.close();
    }, 3000);
}