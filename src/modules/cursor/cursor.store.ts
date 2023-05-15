import { writable, type Writable } from 'svelte/store';

import type { CursorStyleT } from './cursor.types';

export const cursorStyle: Writable<CursorStyleT> = writable('default');
