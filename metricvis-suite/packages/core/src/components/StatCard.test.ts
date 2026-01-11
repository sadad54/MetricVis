import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import StatCard from './StatCard.vue'

describe('StatCard', () => {
  it('renders the title and value correctly', () => {
    const wrapper = mount(StatCard, {
      props: {
        title: 'Test Revenue',
        value: '$500'
      }
    })

    expect(wrapper.text()).toContain('Test Revenue')
    expect(wrapper.text()).toContain('$500')
  })

  it('applies the correct class for upward trends', () => {
    const wrapper = mount(StatCard, {
      props: { title: 'X', value: '1', trend: 'up', percentage: 10 }
    })

    const badge = wrapper.find('.mv-up')
    expect(badge.exists()).toBe(true)
  })
})