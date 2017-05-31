import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';



(performance as any).mark('ionic:main.js-app-bootstrap-start');



platformBrowserDynamic().bootstrapModule(AppModule).then(() => {




  (performance as any).measure('ionic:main.js-app-bootstrap', 'ionic:main.js-app-bootstrap-start');




  (performance as any).mark('ionic:main.js-post-bootstrap-start');



});
