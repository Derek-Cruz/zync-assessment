const $userList = document.querySelector('#user-list');

function getData() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.hatchways.io/assessment/students');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
    for (const loop in xhr.response) {
      const $newLi = document.createElement('li');
      $newLi.textContent = xhr.response[loop].name;
      $userList.append($newLi);
    }
  });
  xhr.send();
}

getData();
