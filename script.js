const addItems = document.querySelector('.add-items'); // select form element
const itemsList = document.querySelector('.plates'); // select ul
const items = JSON.parse(localStorage.getItem('items')) || [] ; // try to get items from localStorage, if it's not there, it's going to fall back to an empty array.

function addItem(e) {
  e.preventDefault(); // This method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
  const text = (this.querySelector('[name=item]')).value; // "this" refers to form element in here
  const item = {
    text: text,
    done: false
  };

  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items)); // store data in localStorage
  this.reset(); // reset method is used to clear all the values of the form elements. It does not require any parameter values and also does not return any value.

}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
         <li>
           <input type = "checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}/>
           <label for="item${i}">${plate.text}</label>
         </li>
       `;
  }).join(""); //convert it into string
}

function toggleDone(e){
  if(!e.target.matches('input')) return; // skip this unless it's an input!
  console.log(e.target);
}


addItems.addEventListener('submit', addItem);
// The submit event fires when the user clicks a submit button (<button> or <input type="submit">)
//or presses Enter while editing a field (e.g. <input type="text">) in a form. The event is not sent to the form
//when calling the form.submit() method directly.
itemsList.addEventListener('click', toggleDone); // event delegation is basically a pattern to handle events efficiently.
//Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element
//and call an event on a particular target using the target property of the event object.
populateList(items, itemsList);
