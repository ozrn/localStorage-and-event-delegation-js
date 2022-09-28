const addItems = document.querySelector('.add-items'); // select form element
const itemsList = document.querySelector('.plates'); // select ul
const items = [];

function addItem(e) {
  e.preventDefault(); // This method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
  const text = (this.querySelector('[name=item]')).value; // "this" refers to form element in here
  const item = {
    text: text,
    done: false
  };

  items.push(item);
  this.reset(); // reset method is used to clear all the values of the form elements. It does not require any parameter values and also does not return any value.
}


addItems.addEventListener('submit', addItem);
// The submit event fires when the user clicks a submit button (<button> or <input type="submit">)
//or presses Enter while editing a field (e.g. <input type="text">) in a form. The event is not sent to the form
//when calling the form.submit() method directly.
