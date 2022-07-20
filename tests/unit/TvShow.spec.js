import { shallowMount } from '@vue/test-utils'
import TvShow from '@/components/TvShow.vue'

describe('TvShow.vue', () => {
  it('Component Created', () => {
    const wrapper = shallowMount(TvShow)
    expect(wrapper.vm.$options.name).toMatch('TvShow')

  })
})
