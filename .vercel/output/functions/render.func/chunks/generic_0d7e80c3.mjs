export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/generic_ea15520a.mjs').then(n => n.a);

export { page };
