<template>
  <div class="single-job--content">
    <div class="single-job--title">{{ title }}</div>
    <div class="single-job--exp">Experience: Mid to Senior</div>
    <div class="single-job--localization">
      <img src="@/assets/img/map-pin.svg" alt="map-pin" />
      Toronto
    </div>
    <div class="single-job--time">
      <img src="@/assets/img/clock.svg" alt="map-pin" />
      ASAP
    </div>

    <h3>Job qualifications:</h3>
    <ul>
      <li>3+ years of Lighting experience in visual effects</li>
      <li>Strong Knowledge of Maya, Arnold, and Nuke</li>
      <li>
        Strong understanding of rendering methods (Render Setup) & shading
        models
      </li>
      <li>Previous experience performing Look Development tasks</li>
      <li>Experience of photo-real lighting</li>
      <li>Good communication & interpersonal skills</li>
      <li>Ability to work within a strong team environment</li>
      <li>Experience with Shotgun an asset</li>
      <li>Be comfortable with a Windows/Linux OS environment</li>
      <li>Houdini experience (Solaris) a plus!</li>
      <li>Unreal Engine experience a plus!</li>
    </ul>

    <h3>Duties & Responsibilities:</h3>
    <ul>
      <li>Create and design lighting for complex scenes.</li>
      <li>Look development of assets, environments, and FX elements.</li>
      <li>
        Work with supervisors, leads, and compositing team to ensure all
        elements reach the desired look and delivery.
      </li>
      <li>Ability to self-troubleshoot renders.</li>
      <li>Pre-composite shots in Nuke.</li>
      <li>Sustain great team dynamics.</li>
      <li>Maintain shot quotas set by production and leads.</li>
      <li>
        Key-Lighting and templated shots for propagations and sequences
        (Senior.)
      </li>
      <li>
        Ability to identify problematic shots that may affect delivery schedules
        and communicate concerns to leads and supervisors.
      </li>
      <li>Ensure shot continuity.</li>
    </ul>

    <h3>Additional Requirements:</h3>
    <ul>
      <li><b>Must be eligible to work in Canada.</b></li>
      <li><b>Include your current resume and IMDB.</b></li>
      <li>
        <b
          >Please make sure your resume also includes your name, address, phone,
          and email.</b
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style lang="scss">
.single-job {
  &--content {
    width: 100%;
    background-color: #fff;
    padding: 30px;
    @include lg-min {
      width: 590px;
    }
  }
  &--title {
    font-weight: 600;
    font-size: 24px;
    line-height: 35px;
    margin-bottom: 16px;
  }
  &--exp {
    font-weight: 400;
    margin-bottom: 20px;
  }
  &--localization,
  &--time {
    font-size: 14px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    @include md-min {
      margin-bottom: 16px;
    }

    img {
      margin-right: 8px;
    }
  }

  h3 {
    font-size: 20px;
    color: #222;
    line-height: 29px;
    margin-bottom: 18px;
    font-weight: 600;
  }

  ul {
    margin-left: 20px;
    margin-bottom: 18px;
    li {
      list-style-type: disc;
      font-size: 14px;
      margin-bottom: 6px;
      font-weight: 400;
    }
  }
}
</style>
