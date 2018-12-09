import * as application from 'tns-core-modules/application';
import {appRater} from 'nativescript-rater';

appRater
    .setDaysUntilPrompt(1)
    .setUsesUntilPrompt(1)
    .setSignificantUsesUntilPrompt(1)
    .setShowLaterButton(true)
    .setShowNeverButton(false)
    // show every time when called `showRateDialogIfMeetsConditions`
    .setDebugMode(false)
    .appLaunched();

application.start({ moduleName: "main-page" });
