<template>
  <div class="section section-instagram" id="section-instagram">
    <div class="slide">
      <div class="instagram-heading">Follow us on Instagram</div>

      <div class="instagram-feed" id="instagram-feed">
        <!-- <div class="instagram-post"></div>
        <div class="instagram-post"></div>
        <div class="instagram-post"></div>
        <div class="instagram-post"></div>
        <div class="instagram-post"></div>
        <div class="instagram-post"></div>
        <div class="instagram-post"></div>
        <div class="instagram-post"></div>
        <div class="instagram-post"></div>
        <div class="instagram-post"></div>
        <div class="instagram-post"></div>
        <div class="instagram-post"></div>
        <div class="instagram-post"></div>
        <div class="instagram-post"></div>
        <div class="instagram-post"></div> -->
      </div>
    </div>
    <div class="slide"></div>
     <slot> </slot>  
  </div>
</template>

<script>
// const InstagramFeed = require("instafeed");
const Instagram = require("node-instagram").default;

// Create a new instance.
const instagram = new Instagram({
  clientId: "1618384628549329",
  clientSecret: "87d5286771ff7a1142360bd97311f515",
  accessToken:"IGQVJVR1I1aUN6bGJRNnFmaUFfaml2T2RYODFKaDJmZAnZABZAFFjWkcxenBqZAE9kcC05S3NTd085ZAEdhYzFLWUZArcjR5d0wxbl94ck1GUnVIWXk1SzVtb1J1aXM5UTBPS0l5SDRNUE84ZA2tuUmZADN2NBNgZDZD"
});

export default {
  data() {
    return {
       posts: []
    }
  },
    
   
   

  mounted() {

//     $.ajax({
//     url: "https://api.instagram.com/v1/users/self/media/recent/?    access_token=IGQVJVR1I1aUN6bGJRNnFmaUFfaml2T2RYODFKaDJmZAnZABZAFFjWkcxenBqZAE9kcC05S3NTd085ZAEdhYzFLWUZArcjR5d0wxbl94ck1GUnVIWXk1SzVtb1J1aXM5UTBPS0l5SDRNUE84ZA2tuUmZADN2NBNgZDZD",
//     type: "GET",
//     crossDomain: true,
//     // dataType: "jsonp",
//     success: function(data){
//         console.log(data);
//     }
// });

    // console.log(axios)

     fetch('https://api.instagram.com/v1/users/self/media/recent/?    access_token=IGQVJVR1I1aUN6bGJRNnFmaUFfaml2T2RYODFKaDJmZAnZABZAFFjWkcxenBqZAE9kcC05S3NTd085ZAEdhYzFLWUZArcjR5d0wxbl94ck1GUnVIWXk1SzVtb1J1aXM5UTBPS0l5SDRNUE84ZA2tuUmZADN2NBNgZDZD', {mode: 'cors'}).then(response => console.log(response))

    // this.getPosts();

    // instagram.get('posts').then(data => {

    //   data = response.data.posts
    //   console.log(data)
    // })

    // console.log(instagram)

    // this.getPosts()
   
    // (function () {
    //   new InstagramFeed({
    //     username: "pixomondo",
    //     container: document.getElementById("instagram-feed"),
    //     display_profile: true,
    //     display_biography: true,
    //     display_gallery: true,
    //     display_captions: true,
    //     callback: null,
    //     styling: true,
    //     items: 8,
    //     items_per_row: 4,
    //     margin: 1,
    //     lazy_load: true,
    //     on_error: console.error,
    //   });
    // })();
  },
  methods: {
   getPosts: function() {

   instagram.get("users/self/media/recent").then(data => {
    console.log(data);
  });

   }
  }
 
};
</script>

<style lang="scss">

#section-instagram {
  .fp-controlArrow {
    display: none !important;
  }

  .fp-prev .fp-next {
    display: none !important;
  }

  .fp-tableCell {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: space-between !important;
    height: 100vh !important;
    padding: 60px 100px;
  }
}
.instagram-heading {
  font-size: 24px;
  text-align: center;
  color: #fff;
}

.instagram-feed {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.instagram-post {
  width: 200px;
  height: 200px;
}
</style>