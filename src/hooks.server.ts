import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ resolve, event }) => {


    // Required for CORS to work
    if(event.request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Methods': 'GET, PATCH, OPTIONS',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      });
    }

  const response = await resolve(event);
  response.headers.append('Access-Control-Allow-Origin', `*`);
  return response;
};

