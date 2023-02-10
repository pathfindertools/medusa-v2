---
blocks:
  - style:
      alignment: 'flex-row-reverse items-center '
      padding: 'pt-64 pb-24 pr-10 pl-10 sm:pt-32 sm:pb-11 sm:pr-5 sm:pl-5'
      featureImage: '  mx-auto'
      featureContent: 'w-2/3 min-h-0 text-left sm:w-4/5 sm:min-h-0 sm:text-left'
      labelStyles: 'text-black mg-headline-small '
      headlineStyles: text-accent1 mg-headline-xl mb-20
      subheadStyles: text-gray mg-copy-large mb-0
      textStyles: text-accent1 mg-copy mb-14
    background:
      fillStyles: bg-accent3 opacity-100
      src: /uploads/hero.jpg
      position: object-bottom
    label: ''
    headline: Easy to Use Decentralized Access Control
    subhead: ''
    body: ''
    buttons:
      - label: Join Medusa
        link: 'https://t.me/medusanet'
        buttonStyle: primary
        fathomId: ''
    _template: feature
  - style:
      alignment: 'flex-col-reverse items-center '
      padding: pt-0 pb-0 pr-0 pl-0
      featureContent: w-full min-h-0 text-left
      labelStyles: text-black undefined mb-0
      headlineStyles: text-black undefined mb-0
      subheadStyles: text-black undefined mb-0
      textStyles: text-black undefined mb-0
    cardStyle:
      fillStyles: ' opacity-100'
      grid: grid-cols-1 items-start gap-6
      alignment: flex-row items-start  text-center
      image: '  object-center object-cover'
      imagePadding: pt-0 pb-0 pr-0 pl-0
      contentPadding: pt-16 pb-10 pr-5 pl-5
      borderStyles: border-white border-0
      labelStyles: text-black undefined undefined
      headlineStyles: text-accent3 mg-headline-large mb-0
      subheadStyles: text-black undefined undefined
      textStyles: text-black undefined undefined
      buttonLayout: undefined
      buttonWidth: undefined
    background:
      fillStyles: ' opacity-100'
    label: ''
    headline: ''
    subhead: ''
    body: ''
    items:
      - headline: Powered by Threshold Cryptography
        subhead: ''
        body: ''
    _template: cards
  - style:
      alignment: 'flex-col-reverse items-center '
      padding: 'pt-10 pb-0 pr-10 pl-10 sm:pt-10 sm:pb-0 sm:pr-5 sm:pl-5'
      featureImage: '  mx-auto'
      featureContent: 'w-3/5 min-h-0 text-center sm:w-full sm:min-h-0 sm:text-center'
      labelStyles: text-black undefined undefined
      headlineStyles: text-black undefined undefined
      subheadStyles: text-black undefined undefined
      textStyles: text-accent1 mg-copy-fancy mb-3.5
    background:
      fillStyles: ' opacity-100'
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
      padding: 'pt-7 pb-0 pr-10 pl-10 sm:pt-7 sm:pb-0 sm:pr-5 sm:pl-5'
      featureImage: '  mx-auto'
      featureContent: 'w-3/5 min-h-0 text-center sm:w-full sm:min-h-0 sm:text-center'
      labelStyles: text-black undefined undefined
      headlineStyles: text-black undefined undefined
      subheadStyles: text-black undefined undefined
      textStyles: text-accent1 mg-copy-fancy mb-7
    background:
      fillStyles: ' opacity-100'
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
      padding: 'pt-0 pb-0 pr-40 pl-40 sm:pt-0 sm:pb-0 sm:pr-5 sm:pl-5'
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
      fillStyles: ' opacity-100'
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
      padding: 'pt-10 pb-10 pr-40 pl-40 sm:pt-5 sm:pb-5 sm:pr-5 sm:pl-5'
      featureImage: '  mx-auto'
      featureContent: 'w-1/2 min-h-0 text-center sm:w-full sm:min-h-0 sm:text-center'
      labelStyles: text-black undefined undefined
      headlineStyles: text-accent1 mg-headline-small undefined
      subheadStyles: text-black undefined undefined
      textStyles: text-accent1 mg-copy mb-7
    background:
      fillStyles: ' opacity-100'
      ornaments:
        - src: /uploads/fish-close.webp
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
      padding: 'pt-10 pb-0 pr-40 pl-40 sm:pt-10 sm:pb-0 sm:pr-5 sm:pl-5'
      featureImage: '  mx-auto'
      featureContent: 'w-2/5 min-h-0 text-left sm:w-full sm:min-h-0 sm:text-left'
      labelStyles: text-black undefined undefined
      headlineStyles: text-accent1 mg-headline-small undefined
      subheadStyles: text-black undefined undefined
      textStyles: text-accent1 mg-copy undefined
    background:
      fillStyles: ' opacity-100'
      ornaments:
        - src: /uploads/fish-far.webp
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
      padding: 'undefined pb-16 pr-24 pl-24 undefined sm:pb-16 sm:pr-0 sm:pl-2.5'
      headlineStyles: 'text-accent1 mg-copy '
      timelineStyles: text-accent1 mg-copy-small mb-0
      textStyles: 'text-accent1 mg-headline-small '
    background:
      fillStyles: ' opacity-100'
    events:
      - BuilderNet
      - 'Multichains (EVM, Cosmos) Q1 2013'
      - Permissioned Network
      - Mainnet Release Q2 2023
      - Permissionless Network Q3 2023
      - Randomness Generation Q4 2023
    _template: timeline
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
      fillStyles: ' opacity-100'
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
      textStyles: text-accent1 mg-copy mb-3.5
    background:
      fillStyles: ' opacity-100'
    headline: Team
    subhead: ''
    body: >
      Medusa is being built by experts in threshold cyrptography, inside the
      cryptonet team at Protocol Labs. We build decentralized protocols for the
      future of the Web.
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
      fillStyles: ' opacity-100'
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
      alignment: flex-col-reverse items-center gap-6
      padding: 'pt-10 pb-10 pr-40 pl-40 sm:pt-10 sm:pb-10 sm:pr-10 sm:pl-10'
      featureContent: w-full min-h-0 text-center
      labelStyles: text-black undefined undefined
      headlineStyles: text-primary mg-headline-medium undefined
      subheadStyles: text-black undefined undefined
      textStyles: text-black undefined undefined
    cardStyle:
      fillStyles: ' opacity-100'
      grid: 'grid-cols-3 items-start gap-4 sm:grid-cols-3 items-start sm:gap-4'
      alignment: flex-col items-center  text-center
      image: ' hpx-120 object-center object-fill sm:wpx-80 sm:hpx- sm:object-center sm:object-cover'
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
          src: /uploads/telegram.svg
        body: ''
        link: 'https://t.me/medusanet'
    _template: cards
backgroundColor: primary
meta:
  title: Medusa
  description: >-
    Medusa provides a simple, secure, decentralized solution for access control.
    Using threshold cryptography, Medusa is a decentralized network enabling
    user-defined authorization on private data.
---

