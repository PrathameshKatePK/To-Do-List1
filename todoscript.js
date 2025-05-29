const taskInput=document.getElementById('taskInput');
const addBtn=document.getElementById('addBtn');
const taskList=document.getElementById('taskList');

addBtn.addEventListener('click',addTask);

function addTask(){
    const taskText=taskInput.value.trim();
    if(taskText===''){
        alert('plese enter the task');
        return;
    }


    const li=document.createElement('li');
    li.textContent=taskText;

    li.addEventListener('click',()=>{
       li.classList.toggle('done');
    });

    const delBtn=document.createElement('button');
    delBtn.textContent='Delete';
    delBtn.className='btn-delete';

    delBtn.addEventListener('click',(e)=>{
        e.stopPropagation();
        taskList.removeChild(li);
    });

    li.appendChild(delBtn);
    taskList.appendChild(li);

    taskInput.value='';
}