$("#consumeApi").click(function(event){
  
    var age = $('#age').val();
    var category = $('#category').val();

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://padooostorage.blob.core.windows.net/chores/chores.json", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        // JSON.parse does not evaluate the attacker's scripts.
        var resp = JSON.parse(xhr.responseText);
      }
    }
    xhr.send();
    event.preventDefault();
});


