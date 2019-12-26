module.exports = {
  plugins: ['stylelint-scss'],
  extends: ['stylelint-config-vue'],
  rules: {
    'block-closing-brace-newline-after': null,
    'at-rule-empty-line-before': null,
    'prettier/prettier': null,
    'at-rule-no-unknown': null,
    'declaration-colon-newline-after': null,
    'selector-pseudo-class-no-unknown': null,
  },
}
