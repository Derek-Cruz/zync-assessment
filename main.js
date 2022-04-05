const $userList = document.querySelector('#user-list');

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
      // console.log('res:', xhr.response.students[i])
    }
  });
  xhr.send();
}

getData();

function renderList(list) {
  const $li = document.createElement('li');
  const $div = document.createElement('div');
  const $div2 = document.createElement('div');
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

  $h2.setAttribute('class', 'student-display-h2');
  $h2.textContent = `${list.firstName} ${list.lastName}`;

  $p.setAttribute('class', 'p-student-listing');
  $p.textContent = `Email: ${list.email}`;
  $p2.setAttribute('class', 'p-student-listing');
  $p2.textContent = `Company: ${list.company}`;
  $p3.setAttribute('class', 'p-student-listing');
  $p3.textContent = `Skill: ${list.skill}`;
  $p4.setAttribute('class', 'p-student-listing');
  const average = list.grades.reduce((a, b) => a + b) / list.grades.length;

  $p4.textContent = `Average: ${average}`;
  console.log('test:', average)
  console.log('test 2:', list.grades.length)

  $li.appendChild($div);
  $div.appendChild($img);
  $div.appendChild($div2);
  $div2.appendChild($h2);
  $div2.appendChild($p);
  $div2.appendChild($p2);
  $div2.appendChild($p3);
  $div2.appendChild($p4);

  return $li;
}
