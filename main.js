const $userList = document.querySelector('#user-list');

function getData() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.hatchways.io/assessment/students');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
    const $newLi = Object.entries(xhr.response.students);
    console.log('Results:', $newLi)
    $userList.append(...$newLi);
  });
  xhr.send();
}

getData();
