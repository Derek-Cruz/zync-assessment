const $userList = document.querySelector('#user-list');

function getData() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.hatchways.io/assessment/students');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
    for (let students in xhr.response) {
      const $test = renderList(xhr.response.students);
      $userList.append($test);
      console.log('res:', xhr.response.students)
    }
  });
  xhr.send();
}

getData();

function renderList(list) {
  const $li = document.createElement('li');
  const $div = document.createElement('div');
  const $h2 = document.createElement('h2');
  const $p = document.createElement('p');
  const $p2 = document.createElement('p');
  const $p3 = document.createElement('p');
  const $p4 = document.createElement('p');
  const $img = document.createElement('img');

  $li.setAttribute('class', 'student-display-li');
  $div.setAttribute('class', 'student-display-div');

  // $img.setAttribute('class', 'card-display-img');
  // if (!card.imageUrl) {
  //   $img.setAttribute('src', './images/placeholder.jpg');
  // } else {
  //   $img.setAttribute('src', card.imageUrl);
  // }

  $h2.setAttribute('class', 'student-display-h2');
  $h2.textContent = list.name;

  $p.setAttribute('class', 'p-student-listing');
  $p.textContent = list.email;
  $p2.setAttribute('class', 'p-student-listing');
  $p2.textContent = list.company;
  $p3.setAttribute('class', 'p-student-listing');
  $p3.textContent = list.skill;
  $p4.setAttribute('class', 'p-student-listing');
  $p4.textContent = list.grades;

  $li.appendChild($div);
  // $div.appendChild($img);
  $div.appendChild($h2);
  $div.appendChild($p);
  $div.appendChild($p2);
  $div.appendChild($p3);
  $div.appendChild($p4);

  return $li;
}
