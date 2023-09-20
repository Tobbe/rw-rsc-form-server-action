# Redwood RSC Demo 5

Repo demonstrating the RedwoodJS React Server Components implementation

This demo shows using `action` on a `<form>` element to trigger a server
action

## How to run

Add your OpenAI API Key to `.env`. The variable name should be
`OPENAI_API_KEY`. Make sure you have credits on your OpenAI account
or you won't be able to use their API

`yarn install`

`yarn rw build -v && yarn rw serve`

## What to do

1. A server action (`onSend`) is passed from the main server function into
   the client component that renders the form. It's called from within the
   `action` callback. Try sending a message and you'll notice you get a
   message back from the server without any `onSubmit` handler like you would
   have needed without server action support.
2. Looking in `chat.ts` you can see how easy it is to fetch data from an
   external API and return that to the client
