/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const me = "nicholas-patterson";
const cards = document.querySelector(".cards");
axios
  .get(`https://api.github.com/users/${me}`)
  .then(data => {
    console.log(data.data);
    const element = createUserCard(data.data);
    cards.appendChild(element);
  })
  .then(
    axios.get("https://api.github.com/users/alasalle").then(data => {
      const angelaData = createUserCard(data.data);
      cards.appendChild(angelaData);
    })
  )
  .then(
    axios.get("https://api.github.com/users/brudnak").then(data => {
      const brudnakData = createUserCard(data.data);
      cards.appendChild(brudnakData);
    })
  )
  .then(
    axios.get("https://api.github.com/users/noahfranco").then(data => {
      const noahfrancoData = createUserCard(data.data);
      cards.appendChild(noahfrancoData);
    })
  )
  .then(
    axios.get("https://api.github.com/users/tetondan").then(data => {
      const tetondanData = createUserCard(data.data);
      cards.appendChild(tetondanData);
    })
  )
  .then(
    axios.get("https://api.github.com/users/dustinmyers").then(data => {
      const dustinmyersData = createUserCard(data.data);
      cards.appendChild(dustinmyersData);
    })
  )
  .then(
    axios.get("https://api.github.com/users/justsml").then(data => {
      const justsmlData = createUserCard(data.data);
      cards.appendChild(justsmlData);
    })
  )
  .then(
    axios.get("https://api.github.com/users/luishrd").then(data => {
      const luishrdData = createUserCard(data.data);
      cards.appendChild(luishrdData);
    })
  )
  .then(
    axios.get("https://api.github.com/users/bigknell").then(data => {
      const bigknellData = createUserCard(data.data);
      cards.appendChild(bigknellData);
    })
  );

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function createUserCard(user) {
  // create elements
  const card = document.createElement("div");
  const userImage = document.createElement("img");
  const cardInfo = document.createElement("div");
  const name = document.createElement("h3");
  const userName = document.createElement("p");
  const location = document.createElement("p");
  const profileLink = document.createElement("p");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");
  console.log(user);

  // set class names on elements
  card.classList.add("card");
  cardInfo.classList.add("card-info");
  name.classList.add("name");
  userName.classList.add("username");

  // put together
  card.appendChild(userImage);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profileLink);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  // setting content

  userImage.src = user.avatar_url;
  name.textContent = user.name;
  userName.textContent = user.login;
  location.textContent = "Location: " + user.location;
  profileLink.textContent = "Profile: " + user.login;
  followers.textContent = "Followers: " + user.followers;
  following.textContent = "Following: " + user.following;
  bio.textContent = "Bio: " + user.bio;

  return card;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
