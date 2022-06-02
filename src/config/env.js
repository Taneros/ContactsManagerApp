import { DEV_BACKEND_URL, PROD_BACKEND_URL } from '@env'

const devEnvVars = {
  DEV_BACKEND_URL,
}

const prodEnvVars = {
  PROD_BACKEND_URL,
}

export default __DEV__ ? devEnvVars : prodEnvVars
