/**
 * index files are useful for aggregating all of a directory's exported things
 * into a central location, for ease of importing elsewhere
 *
 * in other files, rather than saying...
 *  `import {a} from 'routes/a`
 *  `import {b} from 'routes/b`
 * we can export `a` and `b` from 'routes/index.ts'
 *
 * then, we can simply `import {a,b} from 'routes'
 */
import { TestRouter } from "./test";

export const Routes = [TestRouter]; //aggregating our routes into a single array
