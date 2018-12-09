import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import {HelloWorldModel} from './main-view-model';
import {appRater} from 'nativescript-rater';

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    let page = <pages.Page>args.object;
    page.bindingContext = new HelloWorldModel();

    appRater
        .setDaysUntilPrompt(1)
        .setUsesUntilPrompt(1)
        .setSignificantUsesUntilPrompt(1)
        .setShowLaterButton(true)
        .setShowNeverButton(false)
        // show every time when called `showRateDialogIfMeetsConditions`
        .setDebugMode(false)
        .appLaunched();

}

export function onCheck() {
    appRater.showRateDialogIfMeetsConditions();
}

export function onShow() {
    appRater.showRateDialog();
}

