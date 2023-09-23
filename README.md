# Redwood RSC Demo 5

Repo demonstrating the RedwoodJS React Server Components implementation

This demo shows using `action` on a `<form>` element to trigger a server
action

## How to run

### GitPod

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/from-referrer/)

### Locally

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

## List of Redwood RSC demos

 1. https://github.com/Tobbe/rw-rsc-client-counter
 2. https://github.com/Tobbe/rw-rsc-suspense
 3. https://github.com/Tobbe/rw-rsc-server-mutation
 4. https://github.com/Tobbe/rw-rsc-rsf-return-value
 5. https://github.com/Tobbe/rw-rsc-form-server-action
 6. https://github.com/Tobbe/rw-rsc-ai-jsx
