import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooComponent } from './foo.component';
import {
  MockBuilder,
  MockedComponentFixture,
  MockRender,
  ngMocks,
} from 'ng-mocks';

for (let i = 0; i < 1000; i++) {
  describe(`FooComponent ${i}`, () => {
    beforeEach(() => MockBuilder(FooComponent));

    let fixture: MockedComponentFixture;

    beforeEach(() => {
      fixture = MockRender(FooComponent);
    });

    it('should find foo', () => {
      const foo = ngMocks.find(FooComponent);
      expect(foo).toBeTruthy();
    });
  });
}
