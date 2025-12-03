function saveTask(){
    const title = $(`txtTitle`).val();
    const description = $(`descriptionInput`).val();
    const color = $(`colorInput`).val();
    const dateTime = $(`dateTimeInput`).val();
    const status = $(`statusSelect`).val();
    const budget = $(`numBudget`).val();

    const data = new Task(title, description, color, date, status, budget);
        console.log(data);
}

function init(){
    $(`#btnSave`).click(saveTask);
}
window.onload = init;
