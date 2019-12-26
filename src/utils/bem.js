import {
  COMPONENT_PREFIX,
  ELEMENT_SEPARATOR,
  HYPHEN,
  MODIFIER_SEPARATOR,
} from '../constant/bem'

export function b () {
  const block = this.$options?._parentVnode?.componentOptions?.Ctor?.extendOptions?.name

  if (block) {
    return COMPONENT_PREFIX + HYPHEN + block.toLowerCase()
  }

  return ''
}

export function e (elementName) {
  if (!elementName) {
    return ''
  }

  return this::b() + ELEMENT_SEPARATOR + elementName
}

export function m (elementName, modifierName, value) {
  if (arguments.length === 2) {
    value = modifierName
    modifierName = elementName

    if (modifierName && value) {
      return this::b() + MODIFIER_SEPARATOR + modifierName
    }
  } else if (elementName && modifierName && value) {
    return this::e(elementName) + MODIFIER_SEPARATOR + modifierName
  }

  return ''
}
