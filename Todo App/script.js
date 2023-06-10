  var inputField = document.querySelector('#input');
  var list = document.querySelector('ul');

  // Retrieve saved items from local storage and add them to the list
  if (localStorage.getItem('items')) {
    list.innerHTML = localStorage.getItem('items');
  }

  inputField.addEventListener('change', function() {
    var input = this.value;
    var listItem = document.createElement('li');
    listItem.innerHTML = input +'<i class="fas fa-check"></i> <i class="fas fa-trash"></i>';
    
    list.appendChild(listItem);

    // Save the updated list to local storage
    localStorage.setItem('items', list.innerHTML);

    this.value = '';
  });

  list.addEventListener('click', function(event) {
    if (event.target.classList.contains('fa-trash')) {
        event.target.parentElement.remove();
        // Save the updated list to local storage
        localStorage.setItem('items', list.innerHTML);
    } else if (event.target.classList.contains('fa-check')) {
      event.target.parentElement.classList.toggle('checked');
      // Save the updated list to local storage
      localStorage.setItem('items', list.innerHTML);
    }
  });
