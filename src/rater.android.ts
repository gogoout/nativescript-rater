import {AppRaterBase, AppRaterConfigs, defaultConfigs} from './rater.common';
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

    init(configs?: AppRaterConfigs) {
        getAppRater().then(rater => {
            const _configs = Object.assign({}, defaultConfigs, configs);
            appRater.android = rater;
            rater.setInstallDays(_configs.daysUntilPrompt);
            rater.setLaunchTimes(_configs.usesUntilPrompt);
            rater.setRemindInterval(_configs.daysBeforeReminding);
            rater.setShowLaterButton(_configs.showLaterButton);
            rater.setShowNeverButton(_configs.showNeverButton);
            rater.monitor();
        });
    },

    incrementSignificantUsageCount(): void {
    },

    setDaysBeforeReminding(days: number): AppRaterBase {
        getAppRater().then(rater => {
            rater.setRemindInterval(days);
        });
        return appRater;
    },

    setDaysUntilPrompt(days: number): AppRaterBase {
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
        getAppRater().then(rater => {
            rater.setLaunchTimes(uses);
        });
        return appRater;
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
    },

    showRateDialogIfMeetsConditions(): boolean {
        if (_appRater) {
            const result = _appRater.isDebug() || _appRater.shouldShowRateDialog();
            if (result) {
                _appRater.showRateDialog(application.android.foregroundActivity);
            }
            return result;
        }
        return false;
    },

    showRateDialog() {
        if (_appRater) {
            _appRater.showRateDialog(application.android.foregroundActivity);
        }
    },
};

