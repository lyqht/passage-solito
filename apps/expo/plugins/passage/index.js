const { AndroidConfig, withPlugins, withStringsXml, withAndroidManifest } = require('expo/config-plugins')

function withPassageStrings(config, { PassageAppID, PassageAuthOrigin, AssetStatements, PassageLanguage, UsePassageStore }) {
  configWithStringsAppended = withStringsXml(config, config => {
    config.modResults = setStrings(config.modResults, PassageAppID, 'passage_app_id');
    config.modResults = setStrings(config.modResults, PassageAuthOrigin, 'passage_auth_origin');
    config.modResults = setStrings(config.modResults, AssetStatements, 'asset_statements');
    config.modResults = setStrings(config.modResults, PassageLanguage, 'passage_language');
    config.modResults = setStrings(config.modResults, UsePassageStore, 'use_passage_store');
    return config;
  });
  return withPlugins(configWithStringsAppended, [addAndroidManifestConfig]);
}

function setStrings(strings, value, name) {
  // Helper to add string.xml JSON items or overwrite existing items with the same name.
  return AndroidConfig.Strings.setStringItem(
    [
      // XML represented as JSON
      // <string name="expo_custom_value" translatable="false">value</string>
      { $: { name, translatable: "false" }, _: value },
    ],
    strings
  );
}

async function setCustomConfigAsync(config, androidManifest) {
  const { addMetaDataItemToMainApplication, getMainApplicationOrThrow } = AndroidConfig.Manifest;

  // Get the <application /> tag and assert if it doesn't exist.
  const mainApplication = getMainApplicationOrThrow(androidManifest);
  addMetaDataItemToMainApplication(mainApplication, 'asset_statements', '@string/asset_statements');

  // TODO: Add magic link app links (optional) based on https://github.com/passageidentity/example-android/blob/main/app/src/main/AndroidManifest.xml
  // const activityList = mainApplication.activity;
  // const activityToAdd = {
  //   $: {
  //     "android:name": ".NavigationViewActivity",
  //     "android:label": "@string/app_name",
  //     "android:configChanges":
  //       "keyboard|keyboardHidden|orientation|screenSize|uiMode",
  //     "android:windowSoftInputMode": "adjustResize",
  //     "android:theme": "@style/Theme.App.SplashScreen",
  //     "android:exported": "true",
  //     "android:screenOrientation": "portrait",
  //   },
  // };
  // activityList.push(activityToAdd);

  return androidManifest;
}

function addAndroidManifestConfig(config) {
  return withAndroidManifest(config, async (cfg) => {
    cfg.modResults = await setCustomConfigAsync(cfg, cfg.modResults);
    return cfg;
  });
}


module.exports = withPassageStrings;
