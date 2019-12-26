<template>
  <button
    :class="[
      $b(),
      $m(type, true),
      $m(size, true),
      $m('disabled', disabled),
      $m('plain', plain),
      $m('round', round),
      $m('circle', circle)
    ]"
    :type="nativeType"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'Button',

  props: {
    plain: Boolean,

    round: Boolean,

    circle: Boolean,

    disabled: Boolean,

    type: String,

    size: String,

    nativeType: String,
  },
}
</script>
