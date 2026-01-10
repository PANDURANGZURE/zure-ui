// mdx-components.js
import { useMDXComponents as getThemeComponents } from 'nextra/mdx-components'

// This MUST be a named export exactly called 'useMDXComponents'
export function useMDXComponents(components) {
  return getThemeComponents(components)
}