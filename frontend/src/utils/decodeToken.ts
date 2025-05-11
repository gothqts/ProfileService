interface TokenPayload {
  sub: string;
  iat: number;
  exp: number
  role: string
}

export const decode = (token: string | null): TokenPayload | null => {
  if (token===null){
    return null
  }
  const tokenParts = token.split('.')
  if (tokenParts.length < 3) {
    return null // Некорректный токен
  }

  const payload = tokenParts[1]
  const decodedPayload = atob(payload)
  return JSON.parse(decodedPayload)
}






