const switcher = (switchSelector, switchItem) =>{
    const selector = document.querySelector(switchSelector),
        items = document.querySelectorAll(switchItem);


       selector.addEventListener('click', () =>{
           items.forEach(item =>{
               if (item.style.display == 'block'){
                   item.style.display = 'none';
               } else {
                   item.style.display = 'block';
               }
           });
       });




};

export default switcher;