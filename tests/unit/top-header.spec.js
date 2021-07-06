import TopHeader from "@/components/TopHeader.vue";
import { shallowMount } from "@vue/test-utils";
import flushPromises from "flush-promises";

const $router = {
  replace: jest.fn(),
};

jest.mock("firebase/app", () => ({
  auth() {
    return {
      onAuthStateChanged(fnc) {
        return fnc(true);
      },
      signOut: () => Promise.resolve(),
    };
  },
}));

describe("topHeader.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(TopHeader, {
      //methods: { setupFirebase: () => {} },
      mocks: {
        $router,
      },
    });
  });

  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("does h1 exists", () => {
    expect(wrapper.find("h1").text()).toBe("Logged in");
  });

  it("user is logged in after setting firebase mock", () => {
    expect(wrapper.vm.$data.loggedIn).toBe(true);
  });

  it("on signout route to correct place", async () => {
    wrapper.find("button").trigger("click");
    await flushPromises();
    expect($router.replace).lastCalledWith({ name: "login" });
  });
});
