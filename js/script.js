function setUserName() {
    const userNameElement = document.getElementById('user-name');
    if (userNameElement) {
        let name = prompt("tolong masukkan nama anda :D :", "");
        if (name) {
            userNameElement.textContent = name;
        }
    }
}
function validateForm(event) {
    event.preventDefault();

    const nama = document.getElementById('nama').value;
    const tanggalLahir = document.getElementById('tanggal-lahir').value;
    const jenisKelaminElement = document.querySelector('input[name="jenis-kelamin"]:checked');
    const pesan = document.getElementById('pesan').value;

    if (!nama || !tanggalLahir || !jenisKelaminElement || !pesan) {
        alert("Semua kolom harus diisi!");
        return;
    }

    const jenisKelamin = jenisKelaminElement.value;
    const now = new Date();
    const currentTime = now.toLocaleString('en-GB', { timeZone: 'UTC' });

    const currentTimeElement = document.getElementById('current-time');
    const outputNamaElement = document.getElementById('output-nama');
    const outputTanggalLahirElement = document.getElementById('output-tanggal-lahir');
    const outputJenisKelaminElement = document.getElementById('output-jenis-kelamin');
    const outputPesanElement = document.getElementById('output-pesan');

    if (currentTimeElement) currentTimeElement.textContent = currentTime + " GMT+0000";
    if (outputNamaElement) outputNamaElement.textContent = nama;
    if (outputTanggalLahirElement) outputTanggalLahirElement.textContent = tanggalLahir;
    if (outputJenisKelaminElement) outputJenisKelaminElement.textContent = jenisKelamin;
    if (outputPesanElement) outputPesanElement.textContent = pesan;
}
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('user-name')) {
        setUserName();
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', validateForm);
    }
});
