<template>
  <!-- 인트로 페이지 -->
  <main v-if="page === 0"></main>
  <!-- 퀴즈 페이지 -->
  <main v-else></main>
</template>

<script>
/*
* 메인 페이지 않에 들어갈 것
* 1. 인트로 페이지
* 2. 조건부 렌더링을 통해 퀴즈 컴포넌트
* 3. 결과는 페이지 이동 /result/_mbti
*/
export default {
  computed: {
    page() {
      return 0
    },
    quiz() {
      return []
    }
  }
}
</script>

<style>
  main {
    padding: 30px 0;
    width: 100%;
    max-width: 360px;
    margin: auto;
  }
</style>
