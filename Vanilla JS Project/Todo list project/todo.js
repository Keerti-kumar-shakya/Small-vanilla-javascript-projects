const todoList = [
{
  name: 'keerti',
  date: '11-02-2022'
},

{
  name: 'bobby',
  date: '09-02-2021'
}

]

console.log(todoList);
const search = []



const addBtn = document.querySelector('.add-btn-js');

const displayResult = document.querySelector('.conatainer-result');
console.log(displayResult);

//console.log(addBtn);



function displayTodoList() {
  let todoListHTML = '';
  
  todoList.forEach(function (list) {
    const {name, date} = list;
  //console.log(list);
  //console.log(index);
 const html = `
    <p class="name-display-js">${name}</p>
          <p class="date-display-js">${date}</p>
          <button class="delete-js" 
          ">Delete</button>
    `
    todoListHTML += html;
  })



  displayResult.innerHTML = todoListHTML;

  const deleteBtn = document.querySelectorAll('.delete-js');
  console.log(deleteBtn);

  deleteBtn.forEach(function (delBtn, index) {

    delBtn.addEventListener('click', function () {
      todoList.splice(index,1);
      displayTodoList();
    });

  });

}

/*-------------------------------------------------------------*/
addBtn.addEventListener('click', function () {
  addTodoList()
})


function addTodoList() {
  
  const inputValue = document.querySelector('.input-js');
  const dateValue = document.getElementById('input-date-js');
  const name = inputValue.value;
  const date = dateValue.value;
  //console.log(name);
  //console.log(date);

  todoList.push({
    name,
    date
  })

  search.push(
    [name]
    
    )

    console.log(search);

  inputValue.value = '';

  dateValue.value = '';
  displayTodoList()
  
}

/*-------------------------------------------------------------*/

const filterSearch = document.getElementById('search');

filterSearch.addEventListener('keydown', (event) =>{
  if (event.key === 'Enter') {
    
    filtrSearch()
  }
})

function filtrSearch() {

  let searchTodoList = '';  
 const searchInput = filterSearch.value;

 const searchResult = document.querySelector('.result');
 const similarNames = search.filter(names => names.toLowerCase().includes(searchInput.toLowerCase()));

 console.log(similarNames);



  }









