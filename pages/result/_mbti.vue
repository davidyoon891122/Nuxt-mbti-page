<template>
    <main>
        <img :src="result[mbti].img" :alt="result[mbti].title" />
        <h1>{{result[mbti].title}}</h1>
        <p v-html="result[mbti].description"></p>
        <Button text="다시 테스트 하기" 
        :clickEvent="resetPage"
        />
    </main>
</template>
<script>
import Button from '../../components/Button.vue';
export default {
    data() {
        return {
            mbti: null,
            result: {
                esfj: {
                    img: "/monkey.png",
                    title: "몽키 D 루피",
                    description: `원피스의 주인공. 밀짚모자 일당의 선장이자 대선단의 두목 그리고 현재 원피스에서 19살 나이로 최연소 사황이다. 꿈은 골드 로저가 남긴 세계 제일의 보물 원피스를 찾아내 해적왕이 되는 것.
                    <br/><br/>최악의 세대의 일원으로 이따금 세간에 이름을 떨치는 D의 이름을 가진 해적이기도 하다. 겁이 없고 낙천적이며, 자유와 모험을 사랑하고 무엇보다 동료와 친구를 소중히 여긴다. 때문에 해적 동료들은 루피를 진심으로 따른다. 생명의 은인이자 자신을 해적의 길로 이끌어 준 위대한 사나이 빨간 머리 해적단의 선장 샹크스를 누구보다도 존경한다. 위풍당당한 해적이 돼서 샹크스와 재회해 그가 맡긴 밀짚모자를 돌려줄 날을 기다리고 있다.`,
                }
            }
        };
    },
    created() {
        this.mbti = this.$route.params.mbti;

        if (this.result[this.$route.params.mbti] === undefined) {
            this.$router.push({name: "index"})
        }
        
    },
    components: { Button },
    methods: {
        resetPage() {
            this.$store.dispatch('clickResetButton')
            this.$router.push({name: "index"})
        }
    }
}
</script>
<style>
    
</style>