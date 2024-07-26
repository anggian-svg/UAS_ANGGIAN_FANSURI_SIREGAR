function callApi() {
    // Mendefinisikan endpoint API
    const API = 'https://islamic-api-zhirrr.vercel.app/api/doaharian';
    
    // Mengambil data dari API
    fetch(API)
        .then((response) => response.json()) // Mengubah respon menjadi JSON
        .then((ayats) => {
            // Mendefinisikan indeks yang akan dikecualikan
            const excludeIndices = [27, 31, 33];
            
            // Iterasi setiap ayat dalam data respon
            ayats.data.forEach((ayat, index) => {
                // Lewati indeks yang dikecualikan
                if (excludeIndices.includes(index)) return;

                // Membuat container untuk setiap doa
                const doaDoa = document.createElement('div');
                doaDoa.classList.add("container-doa");

                // Membuat elemen untuk nama, teks Arab, terjemahan, dan tombol
                const nameDoa = document.createElement('h3');
                const arabDoa = document.createElement('p');
                const artiDoa = document.createElement('p');
                const btnTranslate = document.createElement('button');

                // Menambahkan kelas ke elemen yang dibuat
                nameDoa.classList.add('name-doa');
                arabDoa.classList.add('arab-doa');
                artiDoa.classList.add("arti-doa");
                btnTranslate.classList.add("btn-translate");

                // Mengatur teks untuk elemen
                nameDoa.innerText = ayat.title;
                arabDoa.innerText = ayat.arabic;
                artiDoa.innerText = ayat.translation;
                btnTranslate.innerText = "Lihat Terjemahan";

                // Membuat container untuk header dan menambahkan elemen ke dalamnya
                const container = document.createElement('article');
                container.classList.add("header-doa");
                container.appendChild(nameDoa);
                container.appendChild(arabDoa);
                container.appendChild(artiDoa);
                container.appendChild(btnTranslate); // Tombol ditambahkan setelah teks terjemahan

                // Menambahkan container header ke dalam container doa utama
                doaDoa.appendChild(container);

                // Menambahkan container doa utama ke dalam dokumen
                document.querySelector(".doa-harian1").appendChild(doaDoa);

                btnTranslate.addEventListener('click', function() {
                    artiDoa.classList.toggle('show'); // Toggle kelas untuk menampilkan/menyembunyikan terjemahan
                
                    // Tambahkan atau hapus kelas 'translated' untuk animasi transisi
                    nameDoa.classList.toggle('translated', artiDoa.classList.contains('show'));
                    arabDoa.classList.toggle('translated', artiDoa.classList.contains('show'));
                });
                
            });
        });
}

// Menambahkan event listener untuk mendeteksi perubahan pada input pencarian dengan id 'searchInput'
document.getElementById('searchInput').addEventListener('input', function() {
    // Mengambil nilai yang diinput oleh pengguna dan mengubahnya menjadi huruf kecil
    const searchValue = this.value.toLowerCase();

    // Mengambil semua elemen yang memiliki kelas 'container-doa'
    const doaItems = document.querySelectorAll('.container-doa');

    // Melakukan iterasi pada setiap elemen 'container-doa'
    doaItems.forEach(item => {
        // Mengambil teks dari elemen dengan kelas 'name-doa' di dalam 'container-doa' dan mengubahnya menjadi huruf kecil
        const title = item.querySelector('.name-doa').innerText.toLowerCase();

        // Memeriksa apakah teks 'title' mengandung nilai pencarian (searchValue)
        if (title.includes(searchValue)) {
            // Jika cocok, tampilkan elemen 'container-doa'
            item.style.display = '';
        } else {
            // Jika tidak cocok, sembunyikan elemen 'container-doa'
            item.style.display = 'none';
        }
    });
});

// Memanggil fungsi API untuk mengambil dan menampilkan data
callApi();
