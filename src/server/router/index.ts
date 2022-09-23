// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { guestbookRouter } from "./guestbook";
import { exampleRouter } from "./example";
import { protectedExampleRouter } from "./protected-example-router";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("example.", exampleRouter)
  .merge("guestbook.", guestbookRouter)
  .merge("auth.", protectedExampleRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
