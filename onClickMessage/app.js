    // Get the elements
    var div1 = document.getElementById('div1');
    var div2 = document.getElementById('div2');

    // Add event listener to div1 to toggle the visibility of div2
    div1.addEventListener('click', function() {
      // Toggle the display style of div2
      if (div2.style.display === 'none' || div2.style.display === '') {
        div2.style.display = 'block';
      } else {
        div2.style.display = 'none';
      }
    });
