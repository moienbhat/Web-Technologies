document.getElementById("isbnForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const isbn = document.getElementById("isbn").value.trim();
  const message = document.getElementById("message");

 
  const isbn10Regex = /^(?:\d[-\s]?){9}[\dXx]$/;
  const isbn13Regex = /^(?:\d[-\s]?){13}$/;

  if (isbn10Regex.test(isbn) || isbn13Regex.test(isbn)) {
   
    message.textContent = "Valid ISBN format.";
  } else {
  
    message.textContent = "Invalid ISBN format.";
  }
});

