document.getElementById('myform').addEventListener('submit', function(event){
    event.preventDefault();

    const inputdate = document.getElementById('date-input').value;
    const inputtime = document.getElementById('time-input').value;
    const inputtask = document.getElementById('task-input').value; 

    if(inputdate && inputtime && inputtask){
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item'; 
    taskItem.innerHTML = `
        <p>Date: ${inputdate}</p>
        <p>Time: ${inputtime}</p>
        <p>Task: ${inputtask}</p>
    `;

    const deletebutton = document.createElement("button");
    deletebutton.innerText = "Delete";
    deletebutton.className = "delete-btn"

    deletebutton.addEventListener("click", function(){
        taskItem.remove();
    })
    taskItem.appendChild(deletebutton);

    
    document.getElementById('task-div').appendChild(taskItem);
    document.getElementById('myform').reset();
    }else{
        alert ('fill all the fields.')
    }
});
