import { createStore, useStore as baseUseStore, createLogger } from "vuex";
import tabs from "@/store/modules/tabs";

export const key = Symbol("store");

const debug = process.env.NODE_ENV !== "production";

export const store = createStore({
  modules: { tabs },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});

// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key);
}
