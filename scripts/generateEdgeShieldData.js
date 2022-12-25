const fetch = require('node-fetch')
const fs = require('fs')
const path = require('path')

const ADDON_ID = 'lbmcfpombfmfhgheofkfhmhnmcbomjdd'
const GET_ADDON_ANALYTICS = `https://microsoftedge.microsoft.com/addons/getproductdetailsbycrxid/${ADDON_ID}`
const PATH_TO_SHIELD_CONFIG = path.resolve(__dirname, '../docs/edge_addon_analytics_for_shield.json')
const shieldConfig = require(PATH_TO_SHIELD_CONFIG)

const run = async () => {
  const response = await fetch(GET_ADDON_ANALYTICS)
  const data = await response.json()

  const updatedShieldConfig = { ...shieldConfig, message: data.activeInstallCount.toString() }
  fs.writeFileSync(PATH_TO_SHIELD_CONFIG, JSON.stringify(updatedShieldConfig))
}

run()
