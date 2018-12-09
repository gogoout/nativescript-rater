declare module hotchemi {
	export module android {
		export module rate {
			export class AppRate {
				public static class: java.lang.Class<hotchemi.android.rate.AppRate>;
				public setShowLaterButton(param0: boolean): hotchemi.android.rate.AppRate;
				public isDebug(): boolean;
				public setDebug(param0: boolean): hotchemi.android.rate.AppRate;
				public setInstallDays(param0: number): hotchemi.android.rate.AppRate;
				public setShowNeverButton(param0: boolean): hotchemi.android.rate.AppRate;
				public setTextLater(param0: number): hotchemi.android.rate.AppRate;
				public clearSettingsParam(): hotchemi.android.rate.AppRate;
				public setLaunchTimes(param0: number): hotchemi.android.rate.AppRate;
				public monitor(): void;
				public static showRateDialogIfMeetsConditions(param0: globalAndroid.app.Activity): boolean;
				public setAgreeShowDialog(param0: boolean): hotchemi.android.rate.AppRate;
				public setView(param0: globalAndroid.view.View): hotchemi.android.rate.AppRate;
				public setTitle(param0: string): hotchemi.android.rate.AppRate;
				public setMessage(param0: number): hotchemi.android.rate.AppRate;
				public setTextRateNow(param0: number): hotchemi.android.rate.AppRate;
				public setTextNever(param0: number): hotchemi.android.rate.AppRate;
				public setShowTitle(param0: boolean): hotchemi.android.rate.AppRate;
				public setTextRateNow(param0: string): hotchemi.android.rate.AppRate;
				public setStoreType(param0: hotchemi.android.rate.StoreType): hotchemi.android.rate.AppRate;
				public clearAgreeShowDialog(): hotchemi.android.rate.AppRate;
				public setTitle(param0: number): hotchemi.android.rate.AppRate;
				public setMessage(param0: string): hotchemi.android.rate.AppRate;
				public setOnClickButtonListener(param0: hotchemi.android.rate.OnClickButtonListener): hotchemi.android.rate.AppRate;
				public setRemindInterval(param0: number): hotchemi.android.rate.AppRate;
				public setTextNever(param0: string): hotchemi.android.rate.AppRate;
				public showRateDialog(param0: globalAndroid.app.Activity): void;
				public setTextLater(param0: string): hotchemi.android.rate.AppRate;
				public setCancelable(param0: boolean): hotchemi.android.rate.AppRate;
				public static with(param0: globalAndroid.content.Context): hotchemi.android.rate.AppRate;
				public shouldShowRateDialog(): boolean;
			}
		}
	}
}

declare module hotchemi {
	export module android {
		export module rate {
			export class BuildConfig {
				public static class: java.lang.Class<hotchemi.android.rate.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module hotchemi {
	export module android {
		export module rate {
			export class DialogManager {
				public static class: java.lang.Class<hotchemi.android.rate.DialogManager>;
			}
		}
	}
}

declare module hotchemi {
	export module android {
		export module rate {
			export class DialogOptions {
				public static class: java.lang.Class<hotchemi.android.rate.DialogOptions>;
				public setTitleText(param0: string): void;
				public getStoreType(): hotchemi.android.rate.StoreType;
				public getView(): globalAndroid.view.View;
				public setView(param0: globalAndroid.view.View): void;
				public setTextNeutralResId(param0: number): void;
				public setTitleResId(param0: number): void;
				public getPositiveText(param0: globalAndroid.content.Context): string;
				public setNeutralText(param0: string): void;
				public setMessageResId(param0: number): void;
				public getTextPositiveResId(): number;
				public setStoreType(param0: hotchemi.android.rate.StoreType): void;
				public getTextNegativeResId(): number;
				public getTextNeutralResId(): number;
				public getNeutralText(param0: globalAndroid.content.Context): string;
				public setNegativeText(param0: string): void;
				public shouldShowNeutralButton(): boolean;
				public getListener(): hotchemi.android.rate.OnClickButtonListener;
				public setShowNeutralButton(param0: boolean): void;
				public getTitleText(param0: globalAndroid.content.Context): string;
				public getCancelable(): boolean;
				public setPositiveText(param0: string): void;
				public getNegativeText(param0: globalAndroid.content.Context): string;
				public setTextPositiveResId(param0: number): void;
				public setCancelable(param0: boolean): void;
				public setShowNegativeButton(param0: boolean): void;
				public getMessageText(param0: globalAndroid.content.Context): string;
				public setListener(param0: hotchemi.android.rate.OnClickButtonListener): void;
				public shouldShowTitle(): boolean;
				public setShowTitle(param0: boolean): void;
				public setTextNegativeResId(param0: number): void;
				public setMessageText(param0: string): void;
				public shouldShowNegativeButton(): boolean;
				public getMessageResId(): number;
				public getTitleResId(): number;
			}
		}
	}
}

declare module hotchemi {
	export module android {
		export module rate {
			export class IntentHelper {
				public static class: java.lang.Class<hotchemi.android.rate.IntentHelper>;
			}
		}
	}
}

declare module hotchemi {
	export module android {
		export module rate {
			export class OnClickButtonListener {
				public static class: java.lang.Class<hotchemi.android.rate.OnClickButtonListener>;
				/**
				 * Constructs a new instance of the hotchemi.android.rate.OnClickButtonListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onClickButton(param0: number): void;
				});
				public constructor();
				public onClickButton(param0: number): void;
			}
		}
	}
}

declare module hotchemi {
	export module android {
		export module rate {
			export class PreferenceHelper {
				public static class: java.lang.Class<hotchemi.android.rate.PreferenceHelper>;
			}
		}
	}
}

declare module hotchemi {
	export module android {
		export module rate {
			export class StoreType {
				public static class: java.lang.Class<hotchemi.android.rate.StoreType>;
				public static GOOGLEPLAY: hotchemi.android.rate.StoreType;
				public static AMAZON: hotchemi.android.rate.StoreType;
				public static values(): native.Array<hotchemi.android.rate.StoreType>;
				public static valueOf(param0: string): hotchemi.android.rate.StoreType;
			}
		}
	}
}

declare module hotchemi {
	export module android {
		export module rate {
			export class UriHelper {
				public static class: java.lang.Class<hotchemi.android.rate.UriHelper>;
			}
		}
	}
}

declare module hotchemi {
	export module android {
		export module rate {
			export class Utils {
				public static class: java.lang.Class<hotchemi.android.rate.Utils>;
			}
		}
	}
}

//Generics information:

