export interface AppRaterConfigs {
    daysUntilPrompt?: number;

    usesUntilPrompt?: number;

    daysBeforeReminding?: number;

    significantUsesUntilPrompt?: number;

    showLaterButton?: boolean;

    showNeverButton?: boolean;

    debugMode?: boolean;
}


export const defaultConfigs: AppRaterConfigs = {
    daysUntilPrompt: 7,
    usesUntilPrompt: 3,
    daysBeforeReminding: 5,
    significantUsesUntilPrompt: 0,
    showLaterButton: true,
    showNeverButton: true,
    debugMode: false
};

export interface AppRaterBase {
    ios?: any;

    android?: any;

    init(configs?: AppRaterConfigs): void

    incrementSignificantUsageCount(): void;

    showRateDialogIfMeetsConditions(): boolean;

    showRateDialog(): void;

    setDaysUntilPrompt(days: number): AppRaterBase;

    setUsesUntilPrompt(uses: number): AppRaterBase;

    setSignificantUsesUntilPrompt(uses: number): AppRaterBase;

    setDaysBeforeReminding(days: number): AppRaterBase;

    setDebugMode(debug: boolean): AppRaterBase;

    setShowLaterButton(value: boolean): AppRaterBase;

    setShowNeverButton(value: boolean): AppRaterBase;
}