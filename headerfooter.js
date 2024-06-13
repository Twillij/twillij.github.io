fetch('includes/header.html')
    .then(response => {
        return response.text(); // Convert response into text
    })
    .then(data => {
        document.getElementById('header').innerHTML = data; // Inject header content into the "header" div element.
    })
    .catch(error => {
        console.log('Error:', error);
    });

fetch('includes/footer.html')
    .then(response => {
        return response.text(); // Convert response into text
    })
    .then(data => {
        document.getElementById('footer').innerHTML = data; // Inject footer content into the "footer" div element.
    })
    .catch(error => {
        console.log('Error:', error);
    });
