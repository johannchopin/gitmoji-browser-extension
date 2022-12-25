import fetch from 'node-fetch'

const ADDON_ID = 'lbmcfpombfmfhgheofkfhmhnmcbomjdd'
const GET_ADDON_ANALYTICS = `https://microsoftedge.microsoft.com/addons/getproductdetailsbycrxid/${ADDON_ID}`

const run = async () => {
  const response = await fetch('https://github.com/')
  const data = await response.json()
}

run()
