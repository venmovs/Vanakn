
const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector);

        trigger.forEach(item => {
           item.addEventListener('click', (e) => {
               if (e.target){
                   e.preventDefault();
               }

               modal.style.display = "flex";
               document.body.style.overflow = "hidden";
           });
        });

        if(close){
            close.addEventListener('click', () => {
                modal.style.display = "none";
                document.body.style.overflow = "";
            });
        }


        modal.addEventListener('click', (e) =>{
            if(e.target === modal){
                modal.style.display = "none";
                document.body.style.overflow = "";
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(function() {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = "hidden";
        }, time);
    } // включит таймер с запуском модального окна (если понадобится)


    bindModal('.button__black', '.modal', '.modal .modal__cross__bg');
    bindModal('.button.button__telephone', '.modal', '.modal .modal__cross__bg');
    bindModal('.button.button__product', '.modal', '.modal .modal__cross__bg');
    bindModal('.header__mobile__phone','.modal', '.modal .modal__cross__bg');
    bindModal('.header__mobile__burger__bg', '.header__mobile__burger__open', '.header__mobile__burger__open__cross');
};

export default modals;