import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'formdata-upload',
  templateUrl: './formdata-upload.component.html'
})
export class FormdataUploadComponent {
  form: FormGroup;
  loading: boolean = false;

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      avatar: null
    });
  }

  onFileChange(event) {
    if(event.target.files.length > 0) {
      let file = event.target.files[0];
      this.form.get('avatar').setValue(file);
    }
  }

  private prepareSave(): any {
    let input = new FormData();
    input.append('name', this.form.get('name').value);
    input.append('avatar', this.form.get('avatar').value);
    return input;
  }

  onSubmit() {
    const formModel = this.prepareSave();
    this.loading = true;
    // this.http.post('apiUrl', formModel)
    setTimeout(() => {
      alert('done!');
      this.loading = false;
    }, 1000);
  }

  clearFile() {
    this.form.get('avatar').setValue(null);
    this.fileInput.nativeElement.value = '';
  }

}
