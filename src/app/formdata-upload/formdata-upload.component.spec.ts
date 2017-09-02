import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormdataUploadComponent } from './formdata-upload.component';

describe('FormdataUploadComponent', () => {
  let component: FormdataUploadComponent;
  let fixture: ComponentFixture<FormdataUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormdataUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormdataUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
