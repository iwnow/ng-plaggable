import * as ngCore from '@angular/core';
import * as ngCommon from '@angular/common';
import * as rxjsAll from 'rxjs';
import * as ops from 'rxjs/operators';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

((global: any) => {
  global.exports = {};
  global.require = function(moduleName: string) {
    if (moduleName.includes('.')) {
      return moduleName.split('.').reduce((acc, cur) => acc && acc[cur], global);
    }
    return global[moduleName];
  };
  global.vendor = {
    ng: {
      core: ngCore,
      common: ngCommon,
    },
    rxjs: {
      ...rxjsAll,
      operators: ops,
    }
  };
})(window);

if (environment.production) {
  ngCore.enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
