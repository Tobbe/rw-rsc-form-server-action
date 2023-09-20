'use server'

export async function onSend(formData: FormData) {
  console.log('message', formData.get('message'))

  const words = await fetch(
    'https://random-word-api.herokuapp.com/word?number=5'
  ).then((res) => res.json())

  return { messages: [formData.get('message'), words.join(' ')] }
}
