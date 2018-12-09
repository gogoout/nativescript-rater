
declare class SwiftRater extends NSObject {

	static alloc(): SwiftRater; // inherited from NSObject

	static appLaunched(): void;

	static checkWithHost(host: UIViewController): boolean;

	static incrementSignificantUsageCount(): void;

	static new(): SwiftRater; // inherited from NSObject

	static rateApp(): void;

	static reset(): void;

	static setAlertCancelTitle(value: string): void;

	static setAlertMessage(value: string): void;

	static setAlertRateLaterTitle(value: string): void;

	static setAlertRateTitle(value: string): void;

	static setAlertTitle(value: string): void;

	static setAppName(value: string): void;

	static setDaysBeforeReminding(newValue: number): void;

	static setDaysUntilPrompt(newValue: number): void;

	static setDebugMode(newValue: boolean): void;

	static setResetWhenAppUpdated(value: boolean): void;

	static setShared(value: SwiftRater): void;

	static setShowLaterButton(value: boolean): void;

	static setShowLog(value: boolean): void;

	static setSignificantUsesUntilPrompt(newValue: number): void;

	static setUseStoreKitIfAvailable(value: boolean): void;

	static setUsesUntilPrompt(newValue: number): void;

	readonly SwiftRaterErrorDomain: string;

	static alertCancelTitle: string;

	static alertMessage: string;

	static alertRateLaterTitle: string;

	static alertRateTitle: string;

	static alertTitle: string;

	static appName: string;

	static daysBeforeReminding: number;

	static daysUntilPrompt: number;

	static debugMode: boolean;

	static readonly isRateDone: boolean;

	static resetWhenAppUpdated: boolean;

	static shared: SwiftRater;

	static showLaterButton: boolean;

	static showLog: boolean;

	static significantUsesUntilPrompt: number;

	static useStoreKitIfAvailable: boolean;

	static usesUntilPrompt: number;
}

declare var SwiftRaterVersionNumber: number;

declare var SwiftRaterVersionNumberVar: number;

declare var SwiftRaterVersionString: interop.Reference<number>;

declare var SwiftRaterVersionStringVar: interop.Reference<number>;
