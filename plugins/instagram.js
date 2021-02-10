const userInstagram = require("user-instagram");

//Gets informations about a user
// userInstagram('pixomondo') // Same as getUserData()
//   .then(response => {
//     console.log(response.posts)
//   })
//   .catch(console.error);

//Gets information about a post
userInstagram.getPostData('pixomondo')
  .then(console.log)
  .catch(console.error)


// const instaObj = require('instagram-basic-data-scraper-with-username');

// instaObj.specificField(user, 'id').then(res => {
//   const userId = res.data;
//   console.log(userId);
//   // => 1429637717
// });


// const instagrammer = require("instagrammer");
// const username = 'pixomondo';

// instagrammer.profilePicture(username).then(res => console.log(res));
