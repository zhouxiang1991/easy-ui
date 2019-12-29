<template>
  <div>
    <b-button
      plain
      round
      disabled
    >
      测试按钮
    </b-button>

    <b-button

      type="text"
    >
      测试按钮
    </b-button>

    <b-button
      plain
      round
      type="warning"
    >
      测试按钮
    </b-button>

    <b-button
      plain
      round
      disabled

      type="danger"
    >
      测试按钮
    </b-button>

    <b-button
      round
      size="mini"

      type="success"
    >
      测试按钮
    </b-button>
  </div>
</template>

<script>
import BButton from '../packages/button/index.js'

export default {
  name: 'App',

  components: { BButton },
}
</script>
