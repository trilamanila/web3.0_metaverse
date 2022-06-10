import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '6i5ouhkw',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skidLMIwsHfIsaCGWfYDOwLbcJVtaFIghgcxp8Mv3GREdx6ZqQRceRiAkebEtiBtWJAQXijsTcsU8IifE837a0re19CPuZtb0vRU2cqFGwu779EHE4tNJBxBthxXEnAjgdmiBiW3TId0trqVRCWx1t65qkSwwBZoIn9vjUrHrVWu6OWbs9sj',
  useCdn: false,
})
