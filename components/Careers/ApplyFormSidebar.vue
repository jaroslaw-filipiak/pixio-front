<template>
  <div class="apply-form-sidebar">
    <div class="apply-form-sidebar--photo">
      <img
        class="img-fluid"
        src="@/assets/img/apply-job-img.jpg"
        alt="our team photo"
      />
    </div>
    <div class="apply-form-sidebar--button-wrapper"></div>
    <div class="apply-form-sidebar--content">
      <h4>An accurate resume is a key</h4>
      <p>
        The resume is the most important part of the application. Make sure it
        contains all the crucial information, which will help our hiring
        managers to decide if you are a good fit for the job. Good luck!
      </p>

      <h4>What to expect?</h4>
      <p>
        Once you submit your application our local hiring managers will review
        it carefully. To discuss the next steps, the recruiter will get in touch
        with you, using the contact information you had provided (please
        double-check them). Please bear in mind we will contact only the people
        who are the best fit for the position.
      </p>

      <h4>What if I’m not a Visual Effects- or Software Expert?</h4>
      <p>
        Sometimes a passion is all it takes. If you love what we do, and why we
        do it – that's already great. When you top it with attention to a
        detail, a collaborative spirit, and an eagerness to learn, you are all
        set – we would love to have you on the team.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.apply-form-sidebar {
  width: 100%;
  padding: 30px;
  background-color: #f7f6f2;

  @include lg-min {
    width: 266px;
    margin-left: 20px;
    padding: 0;
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
