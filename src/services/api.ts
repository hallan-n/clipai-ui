export async function signIn(payload: {
  user: string
  password: string
}) {
  const res = await fetch('http://localhost:8000/sign_in', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  return res.json()
}