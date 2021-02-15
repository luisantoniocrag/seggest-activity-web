const inputs = document.getElementsByTagName('input');
const taskForm = document.getElementById('taskForm');

// inputs
const emailInput = document.getElementById('emailInput');
const titleInput = document.getElementById('titleInput');
const descriptionInput = document.getElementById('descriptionInput');

// add input updating on every input
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', (e) => {
        inputs[i].value =  e.srcElement.value;
    });
}


async function submitForm(e) {
    e.preventDefault();
    try {
        const data = await postData(`${SERVER}/user/activity`, { 
            title: titleInput.value,
            description: descriptionInput.value,
            email: titleInput.value 
        });

        toastr.success('Activity submited, thank you!')
        emailInput.value = '';
        titleInput.value = '';
        descriptionInput.value = '';
        console.log(data)
    } catch (err) {
        toastr.error('error: ', err);
    }
}

// Send Form
taskForm.addEventListener('submit', submitForm);