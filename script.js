alert('MARI MAIN TEBAK ANGKA!!!! BERSAMA MR. GEZ!!!');

let mainLagi = true;

while (mainLagi) {
    let maximum = parseInt(prompt('Masukkan nilai maksimal!'));
    while (!maximum) {
        maximum = parseInt(prompt('Masukkan nilai maksimal!'));
    }

    const targetNum = Math.floor(Math.random() * maximum) + 1;
    console.log(targetNum);

    let guess = parseInt(prompt('Isi tebakan pertama kamu!'));
    const nomorAcak = Math.random();
    let attempts = 1;

    while (parseInt(guess) !== targetNum) {
        attempts++;
        if (guess > targetNum) {
            guess = prompt('Terlalu tinggi! tebak lagi:');
        } else {
            guess = prompt('Terlalu rendah! tebak lagi:');
        }
    }

    alert(`Selamat tebakkan anda benar!! 
    ( dengan percobaan ${attempts} x )`);

    mainLagi = confirm('Main Lagi ?');
}

if (mainLagi === false) {
    alert('TERIMA KASIH TELAH BERMAIN!');
}