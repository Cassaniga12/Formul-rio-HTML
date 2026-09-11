document.addEventListener('DOMContentLoaded', () => {
    // Definir a data atual no campo de confirmação automaticamente
    const hoje = new Date().toISOString().split('T')[0];
    const campoData = document.getElementById('dataConfirmacao');
    if (campoData) {
        campoData.value = hoje;
    }
});