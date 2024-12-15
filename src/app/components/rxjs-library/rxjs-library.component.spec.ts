import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsLibraryComponent } from './rxjs-library.component';

describe('RxjsLibraryComponent', () => {
  let component: RxjsLibraryComponent;
  let fixture: ComponentFixture<RxjsLibraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RxjsLibraryComponent]
    });
    fixture = TestBed.createComponent(RxjsLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
