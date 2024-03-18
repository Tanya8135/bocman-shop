(() => {
    const refs = {
        openCardProd: document.querySelector(".art-position"),
        closeCardProd: document.querySelector(".cardBtnClose"),
        modal: document.querySelector("[data-modal]")
    }

    refs.openCardProd.addEventListener("click", toggleModal);
    refs.closeCardProd.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
})();