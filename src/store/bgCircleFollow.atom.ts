// atom for fix circle bg blurry to element of dom

import { atom } from 'jotai';

const bgElementFixedAtom = atom<string | null>(null);

export default bgElementFixedAtom;
