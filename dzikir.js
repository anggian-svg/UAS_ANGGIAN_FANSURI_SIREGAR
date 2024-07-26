// Fungsi untuk memanggil API dan menampilkan data dzikir pagi
function callApi() {
    const API = 'https://api.dikiotang.com/dzikir/pagi'; // URL API yang digunakan untuk mendapatkan data dzikir pagi
    
    // Mengambil data dari API
    fetch(API)
        .then((response) => response.json()) // Mengonversi respons API menjadi format JSON
        .then((ayats) => {
            const data = ayats.data; // Menyimpan data dzikir pagi dari API

            // Mengurutkan data dzikir pagi sesuai dengan urutan yang diinginkan
            const orderedData = [
                data[0], data[2], data[14], data[15], data[18], data[22],
                data[19], data[20], data[21], data[3], data[17], data[5], data[7], data[9],
                data[1], data[8], data[10], data[13], data[11], data[16], data[12]
            ];

            // Menampilkan data dzikir pagi sesuai urutan
            orderedData.forEach((ayat) => {
                // Membuat elemen div dengan kelas "container"
                const dzikir = document.createElement('div');
                dzikir.classList.add("container");

                // Membuat elemen paragraf untuk teks Arab dan terjemahan
                const arabDzikir = document.createElement('p');
                const artiDzikir = document.createElement('p');

                // Menambahkan kelas CSS untuk styling
                arabDzikir.classList.add('arab-dzikir');
                artiDzikir.classList.add("arti-dzikir");

                // Menyisipkan teks Arab dan terjemahan ke dalam elemen paragraf
                arabDzikir.innerText = ayat.arab;
                artiDzikir.innerText = ayat.indo;

                // Menambahkan elemen paragraf ke dalam elemen div
                dzikir.appendChild(arabDzikir);
                dzikir.appendChild(artiDzikir);

                // Menambahkan elemen div ke dalam elemen dengan kelas "dzikirpagi" di halaman
                document.querySelector(".dzikirpagi").appendChild(dzikir);
            });
        });
}

// Memanggil fungsi callApi untuk menjalankan proses
callApi();
