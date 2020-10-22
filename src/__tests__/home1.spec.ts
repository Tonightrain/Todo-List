import {shallowMount} from '@vue/test-utils'
import home1 from "../view/home1.vue";
import TodoAdd from "../components/TodoAdd.vue";
import Todolist from "../components/Todolist.vue";
import Footer from "../components/Footer.vue";

describe('home1.vue', () => {
    test('should render home1', () => {
        const wrapper = shallowMount(home1, {
            components: {
                TodoAdd,
                Todolist,
                Footer,
            }
        })

        expect(wrapper.find(".title").text()).toBe("todos")
        expect(wrapper.findComponent(TodoAdd).exists()).toBe(true)
        expect(wrapper.findComponent(Todolist).exists()).toBe(true)
        expect(wrapper.findComponent(Footer).exists()).toBe(true)
    })
})
