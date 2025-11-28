let currentStep = 1;
const totalSteps = 8;
const stepsList = document.getElementById('cookingSteps').getElementsByTagName('li');
const statusMessage = document.getElementById('statusMessage');

// Fungsi untuk menandai langkah berikutnya sebagai selesai
function markNextStep() {
    if (currentStep <= totalSteps) {
        // Tandai langkah saat ini sebagai selesai
        for (let i = 0; i < stepsList.length; i++) {
            if (parseInt(stepsList[i].dataset.step) === currentStep) {
                stepsList[i].classList.add('completed');
                break;
            }
        }
        
        // Perbarui pesan status
        if (currentStep < totalSteps) {
            currentStep++;
            statusMessage.textContent = `Lanjut ke langkah ${currentStep}. Siap untuk: ${stepsList[currentStep - 1].textContent}`;
        } else {
            // Semua langkah selesai
            statusMessage.textContent = '🥳 SEMUA LANGKAH SELESAI! Nasi Goreng Anda Siap Disajikan. Selamat Menikmati!';
            document.querySelector('button').disabled = true;
            document.querySelector('button').textContent = 'Selesai Memasak!';
        }
    }
}

// Inisialisasi pesan status awal
window.onload = function() {
    statusMessage.textContent = `Mari Mulai! Klik 'Selesai Langkah Berikutnya' setelah Anda melakukan Langkah ${currentStep}.`;
};
