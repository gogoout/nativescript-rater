﻿import * as application from 'tns-core-modules/application';
import {appRater} from 'nativescript-rater';

appRater.init({
    debugMode: true
});

application.run({ moduleName: "app-root" });
