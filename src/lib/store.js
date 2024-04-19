// src/lib/store.js

import { writable } from 'svelte/store';

// 초기 상태를 설정하여 writable store를 생성합니다.
export const myStore = writable({ nickname: '' });
export const searchQuery = writable({query: ''});
