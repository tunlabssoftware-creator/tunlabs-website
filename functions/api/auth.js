export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const redirectUrl = new URL('https://github.com/login/oauth/authorize');
  redirectUrl.searchParams.set('client_id', env.GITHUB_CLIENT_ID);
  redirectUrl.searchParams.set('redirect_uri', `${url.origin}/api/callback`);
  redirectUrl.searchParams.set('scope', 'repo,user');
  return Response.redirect(redirectUrl.toString(), 302);
}