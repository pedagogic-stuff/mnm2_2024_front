import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ resolve, event }) => {

  // Apply CORS header for API routes
  if (event.url.pathname.startsWith('/objets3d')) {
    // Required for CORS to work
    if(event.request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Methods': 'GET, PATCH, OPTIONS',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
        }
      });
    }
  }

  const response = await resolve(event);
  if (event.url.pathname.startsWith('/objets3d')) {
        response.headers.append('Access-Control-Allow-Origin', `*`);
  }

  response.headers.append('Access-Control-Allow-Origin', `*`);

  console.log('RESPONSE: ', response.headers)
  return response;
};

