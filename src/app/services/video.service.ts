import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private baseUrl = environment.apiVimpUrl;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  public create(video: any): Observable<any> {
    const videoUrl = this.baseUrl + 'video';

    const getFormData = Object.keys(video).reduce((formData, key) => {
      formData.append(key, video[key]);
      return formData;
    }, new FormData());

    return this.http.post<any>(videoUrl, getFormData);
  }
}
