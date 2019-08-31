import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, FormGroup } from '@angular/forms';
import { VideoService } from 'src/app/services/video.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-video',
  templateUrl: './new-video.component.html',
  styleUrls: ['./new-video.component.scss']
})
export class NewVideoComponent implements OnInit {

  file;
  videoForm: FormGroup;
  createVideoSpinnerName = 'createVideo';

  formarts = ['jpg', 'png'];

  get nameFile(): string {
    return this.file ? this.file.name : '';
  }

  get fileFormat(): string {
    return this.nameFile ? this.nameFile.split('.').pop() : '';
  }

  constructor(
    private videoService: VideoService,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
    private _snackBar: MatSnackBar,
    ) {
    this.createForm();
  }

  public createForm() {
    this.videoForm = this.formBuilder.group({
      name: ['', Validators.required],
      nameUrl: ['', Validators.required],
      videoUrl: ['', Validators.required],
      description: [''],
      duration: ['', Validators.required],
      file: [''],
    });
  }

  private fileFormatValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value) {
      return {'fileFormat': false};
    }
    return {'fileFormat': true};
  }

  ngOnInit() {
  }

  fileChange($event) {
    this.file = $event.target.files[0];
  }

  onSubmit() {
    this.videoForm.value.file = this.file;
    this.spinner.show(this.createVideoSpinnerName);
    this.videoService.create(this.videoForm.value)
      .subscribe(
        (res) => {
          this.spinner.hide(this.createVideoSpinnerName);
          this._snackBar.open('Successfully created video');
          this.file = null;
          this.createForm();
        },
        (err) => {
          this.spinner.hide(this.createVideoSpinnerName);
          let msgError = '';

          if (err.error.errors) {
            msgError = err.error.errors.map((e) => `- ${e.msg}\n`)
                            .reduce((s1, s2) => {
                              return s1 + s2;
                            });
          }
          this._snackBar.open('Could not execute this command\n' + msgError);
        },
        () => { this.spinner.hide(this.createVideoSpinnerName); }
      );
  }

}
