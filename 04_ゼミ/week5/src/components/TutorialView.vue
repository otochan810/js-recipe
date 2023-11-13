<template>
  <div class="tutorial">
    <div>
      <h1>
        <TutorialIcon />WebExpertコース Vue CLI チュートリアル<TutorialIcon />
      </h1>
      <p>
        Vue
        CLIでの開発は、今までの開発と異なる部分が数点ありますが、より便利に開発できます。<br />
        このTutorialコンポーネントを参考にして、いくつかのアプリを.vueファイルで開発してみましょう!
      </p>
    </div>
  </div>
</template>

<script>
import TutorialIcon from "@/components/TutorialIcon.vue"
export default {
  components: {
    TutorialIcon,
  },
}
</script>

<style scoped>
.tutorial {
  text-align: center;
}
</style>
