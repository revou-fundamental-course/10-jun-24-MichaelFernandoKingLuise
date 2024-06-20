function convertTemperature() {
    // Mendapatkan nilai input dan tipe konversi
    const temperature = document.getElementById("temperature").value;
    const conversionType = document.getElementById("conversion-type").value;

    // Memeriksa apakah input suhu sudah diisi
    if (temperature === "") {
        document.getElementById("result").innerText = "Silakan masukkan nilai suhu.";
        document.getElementById("explanation").innerText = "";
        return;
    }

    // Mendeklarasikan variabel untuk hasil dan penjelasan
    let result = "";
    let explanation = "";

    // Melakukan konversi berdasarkan tipe yang dipilih
    if (conversionType === "toFahrenheit") {
        const fahrenheit = (temperature * 9) / 5 + 32;
        result = `${temperature}°C adalah ${fahrenheit.toFixed(2)}°F`;
        explanation = `Perhitungan: (${temperature}°C × 9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
    } else if (conversionType === "toCelsius") {
        const celsius = ((temperature - 32) * 5) / 9;
        result = `${temperature}°F adalah ${celsius.toFixed(2)}°C`;
        explanation = `Perhitungan: (${temperature}°F - 32) × 5/9 = ${celsius.toFixed(2)}°C`;
    }

    // Menampilkan hasil dan penjelasan pada halaman
    document.getElementById("result").innerText = result;
    document.getElementById("explanation").innerText = explanation;
}

// Menyimpan nilai dropdown sebelum reset dan mengembalikan setelah reset
document.getElementById('temperature-form').addEventListener('reset', function(event) {
    // Mendapatkan nilai dropdown sebelum reset
    const selectedConversionType = document.getElementById("conversion-type").value;

    // Menggunakan setTimeout untuk menunggu sampai reset selesai
    setTimeout(function() {
        // Mengembalikan nilai dropdown setelah reset
        document.getElementById("conversion-type").value = selectedConversionType;

        // Menghapus hasil konversi dan penjelasan
        document.getElementById("result").innerText = "";
        document.getElementById("explanation").innerText = "";
    }, 0);
});
