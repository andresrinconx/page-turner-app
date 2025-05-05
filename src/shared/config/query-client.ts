/**
 * query-client.ts
 * Query client
 *
 * Created by Andres Rincon on 21/4/25.
 */

import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export default queryClient;
