import * as application from 'tns-core-modules/application';
import {appRater} from 'nativescript-rater';

appRater.init();

application.start({ moduleName: "main-page" });
