<template>
  <div class="apply-btn">
    Apply
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 12H19"
        stroke="#222222"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 5L19 12L12 19"
        stroke="#222222"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.apply-btn {
  font-size: 14px;
  background-color: #fff;
  border: 1px solid #5680e9;
  border-radius: 50px;
  width: 144px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 400;
  transition: all 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
  &:hover {
    background-color: #5680e9;
    color: #fff;
    transition: all 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);

    path {
      stroke: #fff;
      transition: all 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
    }
  }

  svg {
    margin-left: 10px;
  }

  img {
    margin-left: 16px;
  }

  path {
    stroke: #222;
    transition: all 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
  }
}
</style>
