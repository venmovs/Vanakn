const filter = () => {

  const tabOpener = document.querySelectorAll('.openFilter'),
      tabs = document.querySelectorAll('.tabsElement');

    tabOpener.forEach(btn =>{
       const id = btn.dataset.target;
       const tab = document.getElementById(id);
       btn.addEventListener('click', () =>{
          tabs.forEach(el =>{
             el.style.display = "none";
          });
          tabOpener.forEach(otherBtn =>{
              otherBtn.classList.remove('button__nav__active');
           });
          tab.style.display = "block";
          btn.classList.add('button__nav__active');
       });
    });
};

export default filter;