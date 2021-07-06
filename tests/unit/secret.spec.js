import Secret from "@/views/Secret.vue";
import { shallowMount } from "@vue/test-utils";
import flushPromises from "flush-promises";

// const $router = {
//   replace: jest.fn(),
// };

const $axios = {
  get: () => Promise.resolve({ data: [{ char_id: 1, name: 1234 }] }),
};

jest.mock("firebase/app", () => ({
  auth() {
    return {
      currentUser: {
        getIdToken: () => "name",
      },
    };
  },
}));

describe("Secret.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Secret, {
      mocks: {
        $axios,
      },
    });
  });

  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("successfully sends data on mount when promise resolves correctly", async () => {
    await flushPromises();
    const mySecrets = wrapper.find("h5");
    expect(mySecrets.text()).toBe("1234");
  });
});
