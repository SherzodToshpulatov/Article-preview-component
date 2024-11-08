document.querySelector('.share-btn').addEventListener('click', function() {
  const shareOptions = document.querySelector('.share-options');
  const shareButton = document.querySelector('.share-btn');


  shareOptions.style.display = shareOptions.style.display === 'none' || shareOptions.style.display === '' ? 'flex' : 'none';
  

  shareButton.classList.toggle('active');
});



