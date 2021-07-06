import TopHeader from "@/components/TopHeader.vue";
import { shallowMount } from "@vue/test-utils";
describe("topHeader.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(TopHeader, {
      methods: { setupFireBase: () => {} },
    });
  });

  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
