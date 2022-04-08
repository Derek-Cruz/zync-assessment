const $userList = document.querySelector('#user-list');
const $searchBar = document.querySelector('#searchBar');

function getData() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.hatchways.io/assessment/students');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
    for (var i = 0; i < xhr.response.students.length; i++) {
      const $test = renderList(xhr.response.students[i]);
      $userList.appendChild($test);
    }
  });
  xhr.send();
}

getData();

function renderList(list) {
  const $li = document.createElement('li');
  const $div = document.createElement('div');
  const $div2 = document.createElement('div');
  const $div3 = document.createElement('div');
  const $div4 = document.createElement('div');
  const $h2 = document.createElement('h2');
  const $p = document.createElement('p');
  const $p2 = document.createElement('p');
  const $p3 = document.createElement('p');
  const $p4 = document.createElement('p');
  const $img = document.createElement('img');

  $li.setAttribute('class', 'student-display-li');
  $div.setAttribute('class', 'student-display-div');

  $img.setAttribute('class', 'card-display-img');
  if (!list.pic) {
    $img.setAttribute('src', './images/placeholder.jpg');
  } else {
    $img.setAttribute('src', list.pic);
  }

  $div2.setAttribute('class', 'column-full');
  $div3.setAttribute('class', 'column-full header-icon-placement');

  $h2.setAttribute('class', 'student-display-h2');
  $h2.textContent = `${list.firstName} ${list.lastName}`;

  const $editIcon = document.createElement('i');
  $editIcon.setAttribute('data-student-id', list.id);
  $editIcon.setAttribute('class', 'fa-solid fa-plus fa-plus-styling');

  $p.setAttribute('class', 'p-student-listing');
  $p.textContent = `Email: ${list.email}`;
  $p2.setAttribute('class', 'p-student-listing');
  $p2.textContent = `Company: ${list.company}`;
  $p3.setAttribute('class', 'p-student-listing');
  $p3.textContent = `Skill: ${list.skill}`;
  $p4.setAttribute('class', 'p-student-listing');
  const average = list.grades.reduce((a, b) => a + b) / list.grades.length;

  $p4.textContent = `Average: ${average}`;

  $div4.setAttribute('class', 'hidden view')
  const testingGrade = list.grades.map(test => `test: ${test}%`)

  $userList.addEventListener('click', function (event) {
    if (event.target.tagName === 'I') {
      console.log('CLICKED')
      $div4.classList.remove('hidden');
      return;
    }
  });

  $li.appendChild($div);
  $div.appendChild($img);
  $div.appendChild($div2);
  $div2.appendChild($div3);
  $div3.appendChild($h2)
  $div3.appendChild($editIcon)
  $div2.appendChild($p);
  $div2.appendChild($p2);
  $div2.appendChild($p3);
  $div2.appendChild($p4);
  $div2.appendChild($div4)


  return $li;
}

$searchBar.addEventListener('keydown', function (event) {
  if (event.keyCode === 13) {
    if (!$searchBar.value || $searchBar.value === ' ') {
      return;
    }
    search();
  }

  if ($searchBar.value) {
    $searchBar.value.toLowerCase();
  }
});

function search(event) {
  const xhr = new XMLHttpRequest();
  const url = 'https://api.hatchways.io/assessment/students' + $searchBar.value;
  xhr.open('GET', url);
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    for (var i = 0; i < xhr.response.students.length; i++) {
      var $cards = renderList(xhr.response.students[i]);
      $userList.appendChild($cards);
    }
  });
  xhr.send();
  $searchBar.value = '';
}
