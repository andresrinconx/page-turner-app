/**
 * large-secure-store.ts
 * Large secure store service
 *
 * Created by Andres Rincon on 21/4/25.
 */

import * as SecureStore from "expo-secure-store";

export const expoSecureStoreAdapter = {
  getItem: (key: string) => {
    return SecureStore.getItemAsync(key);
  },
  setItem: (key: string, value: string) => {
    return SecureStore.setItemAsync(key, value);
  },
  removeItem: (key: string) => {
    return SecureStore.deleteItemAsync(key);
  },
};
