const forms = () =>{
    const form = document.querySelectorAll('form'),
        input = document.querySelectorAll('input');


    const postData = async (url, data) => {
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });
        return await res.text();
    };

    const clearInputs = () => {
      inputs.forEach(item => {
            item.value = '';
      });
    };

    form.forEach(item => {
       item.addEventListener('submit', (e) => {
           e.preventDefault();

           const formData = new FormData(item);

            postData('vigen94@icloud.com' , formData).then(res => {
                console.log(res);
            }).catch(() => console.log('fail')).finally(() => {
                clearInputs();
            });
       });
    });

};

export default forms;