import About from '@/views/About.vue';
import { shallowMount } from '@vue/test-utils';

describe('About.vue', () => {
  test('renders inner text', () => {
    const wrapper = shallowMount(About);
    // Assertion (testing the text inside)

    expect(wrapper.text()).toContain('LeMusica');
  });
});
