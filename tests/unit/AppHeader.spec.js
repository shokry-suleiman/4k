import { shallowMount } from '@vue/test-utils'
import AppHeader from '@/components/AppHeader.vue'

describe('AppHeader.vue', () => {
  it('Hide Search Input', () => {
    const isActive = false
    const wrapper = shallowMount(AppHeader, {
      propsData: { isActive }
    })
    expect(wrapper.vm.$options.name).toMatch('AppHeader')

  })
})
