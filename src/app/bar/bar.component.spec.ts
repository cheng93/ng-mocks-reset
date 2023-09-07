import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarComponent } from './bar.component';
import {
  MockBuilder,
  MockedComponentFixture,
  MockRender,
  ngMocks,
} from 'ng-mocks';
import { FooComponent } from '../foo/foo.component';

describe('BarComponent', () => {
  beforeEach(() => MockBuilder(BarComponent));

  let fixture: MockedComponentFixture;

  beforeEach(() => {
    fixture = MockRender(BarComponent);
  });

  it('should find foo', () => {
    const foo = ngMocks.find(FooComponent);
    expect(foo).toBeTruthy();
  });
});
