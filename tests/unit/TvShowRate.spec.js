import { shallowMount } from '@vue/test-utils'
import TvShowRate from '@/components/TvShow.vue'

describe('TvShowRate.vue', () => {
  it('Component Created', () => {
    const wrapper = shallowMount(TvShow, {
      propsData: { rate }
    })
    expect(wrapper.vm.$options.name).toMatch('TvShowRate')

  })
})
