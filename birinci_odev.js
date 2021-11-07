// 1) Asal sayı mı?

function asalSayi(...numbers) {
    for (let i = 0; i < numbers.length; ++i) {
        let asalMi = true
        for (let j = 2; j < numbers[i] / 2; ++j) {
            if (numbers[i] % j == 0) {
                asalMi = false
                break
            }
        }
        if (asalMi) {
            console.log(numbers[i] + " Sayısı Asaldır")
        } else {
            console.log(numbers[i] + " Sayısı Asal Değildir")
        }
    }
}

asalSayi(1, 2, 3, 5, 6, 7, 8, 21, 55, 100);


// 2) Arkadaş Sayılar

function arkadasSayilar(sayi1, sayi2) {
    let toplam1 = 0
    let toplam2 = 0

    for (let i = 1; i < sayi1; i++) {
        if (sayi1 % i == 0) {
            toplam1 = toplam1 + i
        }
    }

    for (let j = 0; j < sayi2; j++) {
        if (sayi2 % j == 0) {
            toplam2 = toplam2 + j
        }

    }

    if (toplam1 == sayi2 && toplam2 == sayi1) {
        console.log("Arkadaş sayılardır")
    } else {
        console.log("Arkadaş sayı değiller")
    }
}

arkadasSayilar(220, 284)


// 3) Mükemmel Sayılar

function mukemmelSayilar() {
    let toplam = 0

    for (let i = 1; i < 1000; i++) {
        for (let j = 0; j < i; j++) {
            if (i % j == 0) {
                toplam = toplam + j
            }
        }
        if (i == toplam) {
            console.log(i + " mükemmel sayıdır")
        }
        toplam = 0
    }
}

mukemmelSayilar()


// 4) 1000'e Kadar Olan Asal Sayılar

function asalSayilar() {
    let sayac = 0

    for (let i = 1; i < 1000; i++) {
        for (let j = 0; j <= i; j++) {
            if (i % j == 0) {
                sayac++
            }
        }

        if (sayac > 2) {
            console.log(i + " Asal Sayı Değildir")
        }
        else {
            console.log(i + " Asal Sayıdır")
        }

        sayac = 0
    }

}

asalSayilar()