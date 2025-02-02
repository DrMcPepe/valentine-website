document.getElementById('yesButton').addEventListener('click', function () {
    document.getElementById('response').classList.remove('hidden');
    document.getElementById('yesResponse').classList.remove('hidden');
    document.getElementById('yesGif').classList.remove('hidden');
    document.getElementById('noResponse').classList.add('hidden');
  });
  
  document.getElementById('noButton').addEventListener('click', function () {
    document.getElementById('response').classList.remove('hidden');
    document.getElementById('yesResponse').classList.add('hidden');
    document.getElementById('yesGif').classList.add('hidden');
    document.getElementById('noResponse').classList.remove('hidden');
  });