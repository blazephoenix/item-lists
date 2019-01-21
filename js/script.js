//Globals
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//Listen for submit
form.addEventListener('submit', addItem);

//Listen for click
itemList.addEventListener('click', removeItem);

//Filter on submit
filter.addEventListener('submit', filterItems);

//Add item to list
function addItem(e) {
    e.preventDefault();

    //Get input value
    var newItem = document.getElementById('item').value;
    if (newItem == 0) {
        alert('Enter a value');
    } else { //create new list item
        var li = document.createElement('li');
        //Add class
        li.className = 'list-group-item';
        //Add text node with input value
        li.appendChild(document.createTextNode(newItem));

        //create delete button
        var deleteBtn = document.createElement('button');
        //Add class
        deleteBtn.className = 'btn btn-red';
        deleteBtn.appendChild(document.createTextNode('X'));
        li.appendChild(deleteBtn);

        //add it to the ul list
        itemList.appendChild(li);
        form.reset();
    }
}

function removeItem(e) {
    e.preventDefault();
    if (e.target.classList.contains('btn-red')) {
        var li = e.target.parentElement;
        if(confirm('Delete ' + li.textContent + '?')){
        itemList.removeChild(li);
        }
    }
}

function filterItems(e) {
    e.preventDefault();

    var keyword = document.getElementById('keyword').value;
    //convert filter text to lowercase
    var text = keyword.toLowerCase();
    //Get list from ul
    var items = itemList.getElementsByTagName('li');
    //Create container for error message
    var divError = document.createElement('div');

    if (items.length === 0) {
        //Add class and other stuff
        divError.className = 'error-div';
        divError.id = 'error';
        divError.appendChild(document.createTextNode('No items added yet.'));
        itemList.appendChild(divError);
        setTimeout(function () {
            document.getElementById('error').remove();
        }, 1000);
    } else {
        //loop through every item on the list and compare to search term
        Array.from(items).forEach(function (item) {
            var itemName = item.firstChild.textContent;
            //console.log(itemName);
            if (itemName.toLowerCase().indexOf(text) != -1) {
                //show if it matches
                item.style.display = 'block';
            } else {
                //hide if it doesnt
                item.style.display = 'none';
                var noItemError = document.createElement('div');
                noItemError.className = 'error-div';
                noItemError.id = 'no-item-error';
                noItemError.appendChild(document.createTextNode('No matching items found!'));
                document.getElementById('main').appendChild(noItemError);
                setTimeout(function () {
                    document.getElementById('no-item-error').remove();
                }, 1000);
            }
        });
    }
}