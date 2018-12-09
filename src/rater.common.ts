export interface AppRaterBase {
    ios?: any;

    android?: any;

    setDaysUntilPrompt(days: number): AppRaterBase;

    setUsesUntilPrompt(uses: number): AppRaterBase;

    setSignificantUsesUntilPrompt(uses: number): AppRaterBase;

    incrementSignificantUsageCount(): AppRaterBase;

    setDaysBeforeReminding(days: number): AppRaterBase;

    setDebugMode(debug: boolean): AppRaterBase;

    setShowLaterButton(value: boolean): AppRaterBase;

    setShowNeverButton(value: boolean): AppRaterBase;

    appLaunched();

    showRateDialogIfMeetsConditions();

    showRateDialog();
}