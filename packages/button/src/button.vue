<template>
  <button
    :class="[
      $b(),
      $m(type, true),
      $m(size, true),
      $s('disabled', disabled),
      $s('plain', plain),
      $s('round', round)
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

    disabled: Boolean,

    type: String,

    size: String,

    nativeType: String,
  },
}
</script>
