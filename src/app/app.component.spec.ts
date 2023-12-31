import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import {
  MockBuilder,
  MockRender,
  MockedComponentFixture,
  ngMocks,
} from 'ng-mocks';
import { FooComponent } from './foo/foo.component';
import { AppModule } from './app.module';

for (let i = 0; i < 1000; i++) {
  describe(`AppComponent ${i}`, () => {
    beforeEach(() => MockBuilder(AppComponent, AppModule));

    let fixture: MockedComponentFixture;

    beforeEach(() => {
      fixture = MockRender(AppComponent);
    });

    it('should find foo', () => {
      const foo = ngMocks.find(FooComponent);
      expect(foo).toBeTruthy();
    });
  });
}
