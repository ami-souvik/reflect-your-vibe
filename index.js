function sendEmail() {
    const formData = new FormData();
    const formValues = {};
    for (const fieldEl of document.querySelectorAll(".s_website_form_field")) {
        const inputEl = fieldEl.querySelector("input, textarea");
        if(inputEl) {
            const {value} = inputEl;
            formData.append(inputEl.getAttribute("name"), value);
        }
    }

    // formData.append('name', 'Souvik Dey');
    // formData.append('phone', '09062786568');
    // formData.append('email_from', 'dsouvik141@gmail.com');
    // formData.append('company', 'Qurtesy');
    // formData.append('subject', '1321321');
    // formData.append('description', 'JKC');
    // formData.append('email_to', 'saradindu96@gmail.com');

    fetch('http://0.0.0.0:8000/send-email', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        console.log(response.json());
    })
    .catch(error => {
        console.error('Error:', error);
    });
}