import {AppRaterBase} from './rater.common';
import {topmost} from 'tns-core-modules/ui/frame';

function currentViewController(): any {
    const topView = topmost();
    return (topView.currentPage.modal || topView).viewController;
}

export const appRater: AppRaterBase = {
    ios: SwiftRater,

    appLaunched() {
        SwiftRater.appLaunched()
    },

    incrementSignificantUsageCount(): AppRaterBase {
        SwiftRater.incrementSignificantUsageCount();
        return appRater;
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
        SwiftRater.setShowLog(debug);
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

    showRateDialogIfMeetsConditions() {
        SwiftRater.checkWithHost(this.currentViewController);
    },

    setShowLaterButton(value: boolean): AppRaterBase {
        SwiftRater.setShowLaterButton(value);
        return appRater;
    },

    setShowNeverButton(value: boolean): AppRaterBase {
        return appRater;
    }

};
