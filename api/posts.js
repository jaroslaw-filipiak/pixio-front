import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
// const api = new GhostContentAPI({
  // url: 'https://d169f6.stage.titans24.com',
  // key: '4e70592dcf83046a05d3202223',
  // version: "v3"
// });

const api = new GhostContentAPI({
  url: 'http://localhost:2368',
  key: '542d7007df0dfe7e8e684a6b99',
  version: "v3"
});


export async function getPosts() {
  return await api.posts
    .browse({
      limit: "all"
    })
    .catch(err => {
      console.error(err);
    });
}
