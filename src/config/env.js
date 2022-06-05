import { DEV_BACKEND_URL, PROD_BACKEND_URL } from '@env'

const devEnvVars = {
  BACKEND_URL: DEV_BACKEND_URL,
}

const prodEnvVars = {
  BACKEND_URL: PROD_BACKEND_URL,
}

export default __DEV__ ? devEnvVars : prodEnvVars
