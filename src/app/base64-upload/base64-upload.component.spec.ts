import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Base64UploadComponent } from './base64-upload.component';

describe('Base64UploadComponent', () => {
  let component: Base64UploadComponent;
  let fixture: ComponentFixture<Base64UploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Base64UploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Base64UploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
