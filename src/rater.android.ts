import {AppRaterBase} from './rater.common';
import * as application from 'tns-core-modules/application';

let _appRater: hotchemi.android.rate.AppRate;

function getAppRater(): Promise<hotchemi.android.rate.AppRate> {
    // lazy load context
    return new Promise<hotchemi.android.rate.AppRate>((resolve, reject) => {
        if (_appRater) {
            return resolve(_appRater);
        }
        else {
            const onLaunch = () => {
                application.off(application.launchEvent, onLaunch);
                _appRater = hotchemi.android.rate.AppRate.with(application.android.context);
                return resolve(_appRater)
            };

            application.on(application.launchEvent, onLaunch);
        }
    });
}

export const appRater: AppRaterBase = {

    android: getAppRater(),

    appLaunched() {
        getAppRater().then(rater => {
            rater.monitor();
        });
        return appRater;
    },

    incrementSignificantUsageCount(): AppRaterBase {
        return appRater;
    },

    setDaysBeforeReminding(days: number): AppRaterBase {
        days += 1;
        getAppRater().then(rater => {
            rater.setRemindInterval(days);
        });
        return appRater;
    },

    setDaysUntilPrompt(days: number): AppRaterBase {
        days += 1;
        getAppRater().then(rater => {
            rater.setInstallDays(days);
        });
        return appRater;
    },

    setDebugMode(debug: boolean): AppRaterBase {
        getAppRater().then(rater => {
            rater.setDebug(debug);
        });
        return appRater;
    },

    setSignificantUsesUntilPrompt(uses: number): AppRaterBase {
        return appRater;
    },

    setUsesUntilPrompt(uses: number): AppRaterBase {
        uses += 1;
        getAppRater().then(rater => {
            rater.setLaunchTimes(uses);
        });
        return appRater;
    },

    showRateDialogIfMeetsConditions() {
        getAppRater().then(rater => {
            if (rater.isDebug() || rater.shouldShowRateDialog()) {
                rater.showRateDialog(application.android.currentContext);
            }
        });
    },

    showRateDialog() {
        getAppRater().then(rater => {
            rater.showRateDialog(application.android.currentContext);
        });
    },

    setShowLaterButton(value: boolean): AppRaterBase {
        getAppRater().then(rater => {
            rater.setShowLaterButton(value);
        });
        return appRater;
    },

    setShowNeverButton(value: boolean): AppRaterBase {
        getAppRater().then(rater => {
            rater.setShowNeverButton(value);
        });
        return appRater;
    }
};

