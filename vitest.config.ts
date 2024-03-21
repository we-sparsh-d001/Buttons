// @ts-ignore
import { defineVitestConfig } from '@nuxt/test-utils/config'
// @ts-ignore
export default defineVitestConfig({
    test: {
        globals:true,
        environment:'nuxt',
        environmentOptions: {
            nuxt: {
                mock: {
                    intersectionObserver: true,
                    indexedDb: true,
                }
            }
        }
    }
})