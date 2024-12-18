const list = document.createElement('ul');
const info = document.createElement('p');

// the html lement of this document
const html = document.querySelector('html');

info.textContent = 'Below is a dynamic list. Click anywhere on the page to add a new list item. Click an existing list item to change its text to something else.';

// appending created element in the child list of the body element
document.body.appendChild(info);
document.body.appendChild(list);

// onClick event into the html element
html.onclick = function () {
  const listItem = document.createElement('li');
  const listContent = prompt('What content do you want the list item to have?');
  listItem.textContent = listContent;
  list.appendChild(listItem);

  // onclick event into the new listItem
  listItem.onclick = function (e) {
    e.stopPropagation();
    const listContent = prompt('Enter new content for your list item');
    this.textContent = listContent;
  }
}
