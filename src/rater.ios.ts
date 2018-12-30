import {AppRaterBase, AppRaterConfigs, defaultConfigs} from './rater.common';
import {topmost} from 'tns-core-modules/ui/frame';

function currentViewController(): any {
    const topView = topmost();
    return (topView.currentPage.modal || topView).viewController;
}

export const appRater: AppRaterBase = {
    ios: SwiftRater,

    init(configs?: AppRaterConfigs) {
        const _configs = Object.assign({}, defaultConfigs, configs);
        SwiftRater.setDaysUntilPrompt(_configs.daysUntilPrompt);
        SwiftRater.setUsesUntilPrompt(_configs.usesUntilPrompt);
        SwiftRater.setDaysBeforeReminding(_configs.daysBeforeReminding);
        SwiftRater.setSignificantUsesUntilPrompt(_configs.significantUsesUntilPrompt);
        SwiftRater.setShowLaterButton(_configs.showLaterButton);
        SwiftRater.setDebugMode(_configs.debugMode);
        SwiftRater.appLaunched();
    },

    incrementSignificantUsageCount() {
        SwiftRater.incrementSignificantUsageCount();
    },

    setDaysBeforeReminding(days: number): AppRaterBase {
        SwiftRater.setDaysBeforeReminding(days);
        return appRater;
    },

    setDaysUntilPrompt(days: number): AppRaterBase {
        SwiftRater.setDaysUntilPrompt(days);
        return appRater;
    },

    setDebugMode(debug: boolean): AppRaterBase {
        SwiftRater.setDebugMode(debug);
        return appRater;
    },

    setSignificantUsesUntilPrompt(uses: number): AppRaterBase {
        SwiftRater.setSignificantUsesUntilPrompt(uses);
        return appRater;
    },

    setUsesUntilPrompt(uses: number): AppRaterBase {
        SwiftRater.setUsesUntilPrompt(uses);
        return appRater;
    },

    setShowLaterButton(value: boolean): AppRaterBase {
        SwiftRater.setShowLaterButton(value);
        return appRater;
    },

    setShowNeverButton(value: boolean): AppRaterBase {
        return appRater;
    },

    showRateDialogIfMeetsConditions(): boolean {
        return SwiftRater.checkWithHost(currentViewController());
    },

    showRateDialog() {
        SwiftRater.rateAppWithHost(currentViewController());
    }

};
