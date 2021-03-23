<template>
  <div class="single-job-sidebar">
    <div class="single-job-sidebar--photo">
      <img
        class="img-fluid"
        src="@/assets/img/sidebar-img.jpg"
        alt="our team photo"
      />
    </div>
    <div class="single-job-sidebar--button-wrapper">
      <ApplyButton />
    </div>
    <div class="single-job-sidebar--content">
      <h4>Our values</h4>
      <p>
        PIXOMONDO is an international visual effects company with a global
        network of facilities. We are recruiting for various positions where we
        would like to welcome anyone with the right experience to work in a
        fresh and challenging environment.
      </p>

      <h4>About perfect candidate</h4>
      <p>
        You are confident about what you do. And strategically prioritize your
        tasks to achieve the goal. When it comes to problem-solving: you decide
        if it needs a bandage or a cure. You see the final result even before
        the first shot.
      </p>

      <h4>Courage, Passion, and Honesty</h4>
      <p>
        You don’t do something wrong simply because you “were told to” and
        aren’t afraid to speak up respectfully when it’s important. We want
        everything to be the best it can be, and you do too. You take risks and
        responsibility in proportional measure, and you’re reliable. When you
        say it’ll be done, it gets done, and it’s done on time.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.single-job-sidebar {
  width: 85%;
  margin-left: 20px;
  background-color: #f7f6f2;

  @include lg-min {
    width: 266px;
  }

  &--button-wrapper {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &--content {
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    h4 {
      font-size: 18px;
      font-weight: 600;
    }
    p {
      font-size: 14px;
    }

    h4,
    p {
      margin-bottom: 20px;
    }
  }
}
</style>
