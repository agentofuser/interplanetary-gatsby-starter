# 🛰 Interplanetary Gatsby Starter

## Effortless blogging on the Decentralized Web

Hi! I'm @agentofuser and this is my first Gatsby starter. It's based on my IPFS+Gatsby blog at https://interplanetarygatsby.com, where I write about things I'm learning in the decentralized publishing space.

The goal of this starter is to provide a full-featured, good-looking default blog to get you writing on the DWeb as effortlessly as possible, without leaving your browser or installing anything, and without any prior knowledge of either Gatsby, IPFS, or even programming.

We're not 100% there yet, but here is how you can get your first dwebsite up:

## From CodeSandbox to IPFS

1. Open this starter on [CodeSandbox](https://codesandbox.io/s/github/agentofuser/interplanetary-gatsby-starter)
1. Click the Fork button on the top-right corner
1. Wait for the website preview to show up
1. Sign up for a free account at [pinata.cloud](https://pinata.cloud)
1. Go to your [Pinata account page](https://pinata.cloud/account)
1. Copy the PINATA API KEY and the PINATA SECRET API KEY
1. Go back to the CodeSandbox tab
1. Open the Server Control Panel sidebar (third from the top)
1. Scroll down to "Secret Keys"
1. Add two secret keys (note the double `_` on the key name):
1. - Name: `IPFS_DEPLOY_PINATA__API_KEY`
   - Value: paste the api key here
   - Click "Save Secret"
1. - Name: `IPFS_DEPLOY_PINATA__SECRET_API_KEY`
   - Value: paste the secret api key here
   - Click "Save Secret"
1. Scroll up to "Run Scripts", still on the Server Control Panel sidebar
1. Click `yarn stage`
1. Wait and watch as a bunch of output spills out in the terminal

At the end of it, if everything went well, you should see something like this:

```text
✔ 📌 It's pinned to Pinata now with hash:
ℹ 🔗 QmdJiFJHmW4DRjbgntS6wnaWbLpcCaw5gLeV8TiAEmj3Je
```

Your hash might be different.

Now you can see your website by copying that hash to the end of `https://gateway.pinata.cloud/ipfs/`. In my case, it's:

https://gateway.pinata.cloud/ipfs/QmdJiFJHmW4DRjbgntS6wnaWbLpcCaw5gLeV8TiAEmj3Je

You can send that to a friend and they'll be able to see your website both via the HTTPS gateway and via the peer-to-peer network if they have IPFS installed.

## Please give me feedback! :)

Everything worked for you? Awesome! Please ping me on twitter at [@agentofuser](https://twitter.com/agentofuser) and let me know. I'd love to hear that!

Also, if you had any trouble, I'll be happy to help you figure it out.

Cheers!
