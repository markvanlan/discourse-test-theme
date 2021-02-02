import { withPluginApi } from "discourse/lib/plugin-api";
import loadScript from "discourse/lib/load-script";

export default {
  name: "test1",

  initialize(container) {
    withPluginApi("0.8.36", (api) => {

      console.log(this)
        // loadScript(settings.theme_uploads.videojs).then(() => {
        // })
    })
  }
}
