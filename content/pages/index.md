---
blocks:
  - style:
      alignment: 'flex-row-reverse items-center '
      padding: 'pt-60 pb-32 pr-10 pl-10 sm:pt-32 sm:pb-11 sm:pr-5 sm:pl-5'
      featureImage: '  mx-auto'
      featureContent: 'w-3/5 min-h-0 text-left sm:w-4/5 sm:min-h-0 sm:text-left'
      labelStyles: 'text-black mg-headline-small '
      headlineStyles: 'text-accent1 mg-headline-large '
      subheadStyles: text-gray mg-copy-large mb-0
      textStyles: text-black mg-copy-medium mb-0
    background:
      fillStyles: bg-accent3 opacity-100
      src: /uploads/medusa-hero.jpeg
      position: object-bottom
    label: ''
    headline: Easy to Use Decentralized Access Control
    subhead: ''
    body: ''
    buttons:
      - label: Join Medusa
        link: 'https://discord.gg/mGjVUwsVtJ'
        buttonStyle: primary
        fathomId: ''
    _template: feature
  - style:
      alignment: 'flex-col-reverse items-center '
      padding: pt-10 pb-10 pr-10 pl-10
      featureImage: '  mx-auto'
      featureContent: w-full min-h-0 text-center
      labelStyles: text-black undefined undefined
      headlineStyles: text-primary mg-headline-medium mb-0
      subheadStyles: text-black undefined undefined
      textStyles: text-black undefined undefined
    background:
      fillStyles: bg-accent1 opacity-100
    headline: Powered by Threshold Cryptography
    subhead: ''
    body: ''
    _template: feature
  - style:
      alignment: 'flex-col-reverse items-center '
      padding: 'pt-20 pb-0 pr-10 pl-10 sm:pt-10 sm:pb-0 sm:pr-5 sm:pl-5'
      featureImage: '  mx-auto'
      featureContent: 'w-3/5 min-h-0 text-center sm:w-full sm:min-h-0 sm:text-center'
      labelStyles: text-black undefined undefined
      headlineStyles: text-black undefined undefined
      subheadStyles: text-black undefined undefined
      textStyles: text-accent1 mg-copy-fancy mb-7
    background:
      fillStyles: bg-accent3 opacity-100
    headline: ''
    subhead: ''
    body: >
      Medusa provides a simple, secure, decentralized solution for access
      control. Using threshold cryptography, Medusa is a decentralized network
      enabling user-defined authorization on private data.
    buttons:
      - label: Try The Demo
        link: ''
        buttonStyle: primary
        fathomId: ''
    _template: feature
  - style:
      alignment: 'flex-col-reverse items-center '
      padding: 'pt-7 pb-10 pr-10 pl-10 sm:pt-7 sm:pb-5 sm:pr-5 sm:pl-5'
      featureImage: '  mx-auto'
      featureContent: 'w-3/5 min-h-0 text-center sm:w-full sm:min-h-0 sm:text-center'
      labelStyles: text-black undefined undefined
      headlineStyles: text-black undefined undefined
      subheadStyles: text-black undefined undefined
      textStyles: text-accent1 mg-copy-fancy mb-7
    background:
      fillStyles: bg-accent3 opacity-100
    headline: ''
    subhead: ''
    body: >
      Dapps need a simple way to manage access to private data on a public
      blockchain. With Medusa, dapps program access control rules natively on
      their platform and Medusa decrypts content for users who match the access
      control policy.
    _template: feature
  - style:
      alignment: flex-col-reverse items-center gap-6
      padding: 'pt-20 pb-0 pr-40 pl-40 sm:pt-0 sm:pb-0 sm:pr-5 sm:pl-5'
      featureContent: w-4/5 min-h-0 text-center
      labelStyles: text-black undefined undefined
      headlineStyles: text-black undefined undefined
      subheadStyles: text-black undefined undefined
      textStyles: text-accent1 mg-copy-fancy undefined
    cardStyle:
      fillStyles: ' opacity-100'
      grid: >-
        grid-cols-2 justify-center gap-28 sm:grid-cols-1 sm:justify-center
        sm:gap-4
      alignment: flex-row items-start  text-left
      image: '  object-center object-cover'
      imagePadding: pt-0 pb-0 pr-0 pl-0
      contentPadding: pt-0 pb-0 pr-0 pl-0
      borderStyles: border-white border-0
      labelStyles: text-black undefined undefined
      headlineStyles: text-accent1 mg-headline-small undefined
      subheadStyles: text-black undefined undefined
      textStyles: text-accent1 mg-copy undefined
      buttonLayout: undefined
      buttonWidth: undefined
    background:
      fillStyles: bg-accent3 opacity-100
    label: ''
    headline: ''
    subhead: ''
    body: ''
    items:
      - headline: Use Cases
        subhead: ''
        body: >
          Medusa is meant to sit below your app to delegate access to encrypted
          contents.


          * Decentralized marketplace for private data, such as content (songs,
          or videos)

          * Token-gated platforms for NFT community engagment

          * Sensitive data platform where content is protected by complex
          conditions (e.g. multisigs, staking conditions, etc)
      - headline: Developer Friendly
        subhead: ''
        body: >
          Medusa is a smart contract that anyone can use in the stack of their
          app. Developers can easily integrate Medusa with a few lines of code
          using their existing toolset.


          * Dapps interacts with the deployed Medusa contract via two methods
          (encrypt and decrypt)

          * Clients use the Typescript Medusa SDK library to locally encrypt and
          decrypt content using keys generated through a standard web3 wallet
          connection!
    _template: cards
  - style:
      alignment: 'flex-col-reverse items-center '
      padding: 'pt-20 pb-10 pr-40 pl-40 sm:pt-5 sm:pb-5 sm:pr-5 sm:pl-5'
      featureImage: '  mx-auto'
      featureContent: 'w-1/2 min-h-0 text-center sm:w-full sm:min-h-0 sm:text-center'
      labelStyles: text-black undefined undefined
      headlineStyles: text-accent1 mg-headline-small undefined
      subheadStyles: text-black undefined undefined
      textStyles: text-accent1 mg-copy mb-7
    background:
      fillStyles: bg-accent3 opacity-100
      ornaments:
        - src: /uploads/fish-close.png
          alignment: bottom
          yOffset: '-100'
    headline: Technology
    subhead: ''
    body: >
      Medusa leverages threshold cryptography to decentralize cryptographic
      operations. The medusa network reencrypts private data towards any
      recipients deemed eligible via the application's access control policy.
    buttons:
      - label: Whitepaper
        link: ''
        buttonStyle: primary
        fathomId: ''
    _template: feature
  - style:
      alignment: 'flex-row-reverse items-center '
      padding: 'pt-10 pb-10 pr-40 pl-40 sm:pt-10 sm:pb-10 sm:pr-5 sm:pl-5'
      featureImage: '  mx-auto'
      featureContent: 'w-2/5 min-h-0 text-left sm:w-full sm:min-h-0 sm:text-left'
      labelStyles: text-black undefined undefined
      headlineStyles: text-accent1 mg-headline-small undefined
      subheadStyles: text-black undefined undefined
      textStyles: text-accent1 mg-copy undefined
    background:
      fillStyles: bg-accent3 opacity-100
      ornaments:
        - src: /uploads/fish-far.png
          alignment: center
          yOffset: '250'
    headline: Roadmap
    subhead: ''
    body: >
      Currently Medusa is in an early development phase, yet we already have a
      testnet on Arbitrum and Filecoin!


      Medusa aims to deploy its tentacles on many chains, including Ethereum,
      Polygon, and Cosmos during the coming months.&#x20;
    _template: feature
  - style:
      alignment: 'flex-row items-center '
      padding: 'pt-0 pb-0 pr-40 pl-40 sm:pt-0 sm:pb-0 sm:pr-5 sm:pl-5'
      featureImage: '  mx-auto'
      featureContent: 'w-2/5 min-h-0 text-right sm:w-full sm:min-h-0 sm:text-left'
      labelStyles: text-black undefined undefined
      headlineStyles: text-black undefined undefined
      subheadStyles: text-black undefined undefined
      textStyles: text-accent1 mg-copy undefined
    background:
      fillStyles: bg-accent3 opacity-100
    headline: ''
    subhead: ''
    body: >
      The major items for 2023 are shipping mainnet on multiple production ready
      chains, transitioning from permissioned to permissionless networks and
      then servicing randomness requests.
    _template: feature
  - style:
      alignment: 'flex-col-reverse items-center '
      padding: 'pt-10 pb-0 pr-40 pl-40 sm:pt-5 sm:pb-5 sm:pr-5 sm:pl-5'
      featureImage: '  mx-auto'
      featureContent: 'w-1/2 min-h-0 text-center sm:w-full sm:min-h-0 sm:text-center'
      labelStyles: text-black undefined undefined
      headlineStyles: text-accent1 mg-headline-small undefined
      subheadStyles: text-black undefined undefined
      textStyles: text-accent1 mg-copy mb-7
    background:
      fillStyles: bg-accent3 opacity-100
    headline: Team
    subhead: ''
    body: >
      Medusa is being built by experts in threshold cyrptography, inside the
      cryptonet team at Protocol Labs, building decentralized protocol for the
      future of web3.
    _template: feature
  - style:
      alignment: 'flex-col-reverse items-center '
      padding: 'pt-0 pb-20 pr-10 pl-10 sm:pt-0 sm:pb-20 sm:pr-5 sm:pl-5'
      featureImage: '  mx-auto'
      featureContent: 'w-1/2 min-h-0 text-center sm:w-full sm:min-h-0 sm:text-center'
      labelStyles: text-black undefined undefined
      headlineStyles: text-accent1 mg-headline-small undefined
      subheadStyles: text-black undefined undefined
      textStyles: text-accent1 mg-copy-fancy mb-7
    background:
      fillStyles: bg-accent3 opacity-100
    headline: Interested In Opportunities?
    subhead: ''
    body: ''
    buttons:
      - label: Developers Documentation
        link: 'https://docs.medusanet.xyz/'
        buttonStyle: primary
        fathomId: ''
    _template: feature
  - style:
      alignment: flex-col-reverse items-start gap-6
      padding: pt-10 pb-10 pr-40 pl-40
      featureContent: w-full min-h-0 text-center
      labelStyles: text-black undefined undefined
      headlineStyles: text-primary mg-headline-medium undefined
      subheadStyles: text-black undefined undefined
      textStyles: text-black undefined undefined
    cardStyle:
      fillStyles: ' opacity-100'
      grid: grid-cols-3 items-start gap-6
      alignment: flex-row items-start  undefined
      image: ' hpx-120 undefined undefined'
      imagePadding: pt-0 pb-0 pr-0 pl-0
      contentPadding: pt-2 pb-2 pr-2 pl-2
      borderStyles: border-white border-0
      labelStyles: text-black undefined undefined
      headlineStyles: text-black undefined undefined
      subheadStyles: text-black undefined undefined
      textStyles: text-black undefined undefined
      buttonLayout: undefined
      buttonWidth: undefined
    background:
      fillStyles: bg-accent1 opacity-100
    label: ''
    headline: Connect With Us
    subhead: ''
    body: ''
    items:
      - image:
          src: /uploads/discord.svg
        headline: ''
        subhead: ''
        body: ''
        link: 'https://discord.gg/mGjVUwsVtJ'
      - image:
          src: /uploads/github.svg
        headline: ''
        subhead: ''
        body: ''
        link: 'https://github.com/medusa-network'
      - image:
          src: /uploads/bookmark.svg
        headline: ''
        subhead: ''
        body: ''
    _template: cards
backgroundColor: accent3
meta:
  title: Microgen
  description: ''
---

