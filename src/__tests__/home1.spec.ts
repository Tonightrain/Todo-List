import { shallowMount } from '@vue/test-utils'
import home1 from "@/view/home1.vue";

describe('HelloWorld.vue', () => {
    test('renders props.msg when passed', () => {
        const msg = 'new message'
        const wrapper = shallowMount(home1, {
            propsData: { msg }
        })
        expect(wrapper.text()).toMatch(msg)
    })
})
