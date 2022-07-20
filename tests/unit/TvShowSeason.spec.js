import { shallowMount } from '@vue/test-utils'
import TvShowSeason from '@/components/TvShow.vue'

describe('TvShowSeason.vue', () => {
  it('Component Created', () => {
    const wrapper = shallowMount(TvShow, {
      propsData: { season }
    })
    expect(wrapper.vm.$options.name).toMatch('TvShowSeason')

  })
})
