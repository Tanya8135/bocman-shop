document.addEventListener('DOMContentLoaded', function () {
    const inputs = document.querySelectorAll('.data-field-text');

    inputs.forEach(function (input) {
        input.addEventListener('input', function () {
            input.classList.toggle('data-field-text', input.value.trim() !== '');
        });
    });
});