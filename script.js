const url = window.location.toString();

const getName = (url) => {
  const urlSplit = url.split('=');
  let name = urlSplit[1];
  if (name === undefined) {
    name = 'SanSanKon';
  }
  return name;
};

const username = getName(url);

fetch('https://api.github.com/users/' + username)
.then(res => res.json())
.then(json => {
  let picture = json.avatar_url;
  let name = json.login;
  let bio = json.bio;
  let info = json.html_url;
  if (name) {
    createPicture = () => {
      let addPicture = document.createElement('img');
      addPicture.src = picture;
      document.body.appendChild(addPicture);
    }
  

  let createBio = () => {
        let addBio = document.createElement('h2');
        let addNoBio = document.createElement('h2');
        addBio.innerHTML = bio;
        addNoBio.innerHTML = 'Bio: пользователь данную информацию о себе не указал';
        if (bio) {
          document.body.appendChild(addBio);
        } else {
          document.body.appendChild(addNoBio);
      }
      }

      let createInfo = () => {
        let elementForLink = document.createElement('a');
        let elementForHeader = document.createElement('h2');
        elementForHeader.innerText = name;
        elementForLink.href = info;
        document.body.appendChild(elementForLink);
        elementForLink.appendChild(elementForHeader);
      }

      createPicture();
      createInfo();
      createBio();
    } else {
      alert('Информация о пользователе не доступна');
    }
  })
  .catch(err => alert(err + ' Информация о пользователе не доступна'));




