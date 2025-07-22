const baseEsiUrl: string | undefined = process.env.AUTH_ENDPOINT

export function buildEsiAuthUrl(clientID: string, callbackUrl: string, state: string, scope: string): string {

  if (typeof baseEsiUrl !== "string") {
    throw new Error("Base ESI URL is required!")
  }
  const params = new URLSearchParams({
    response_type: 'code',
    redirect_uri: callbackUrl,
    client_id: clientID,
    scope: scope,
    state: state,
  })
  const esiAuthUrl = `${baseEsiUrl}?${params.toString()}`
  return esiAuthUrl
}
