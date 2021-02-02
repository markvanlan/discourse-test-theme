import { withPluginApi } from "discourse/lib/plugin-api";
import loadScript from "discourse/lib/load-script";

export default {
  name: "test1",

  initialize(container) {
    withPluginApi("0.8.36", (api) => {
      api.onPageChange(console.log(settings));
        // loadScript(settings.theme_uploads.videojs).then(() => {
        // })
    })
  }
}
