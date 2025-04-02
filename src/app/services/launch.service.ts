/**
 * @author: Jam Furaque
 *  Maybe this is me catching missions for the first time,
 *  Wondering how we ever pulled data in real time.
 *  So here's a service, with HTTP by my side —
 *  Back to the launches, back to the sky
 * 
 *  Oh sorry, I'm listening to Back to December by Taylor Swift HAHAHAHA
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Launch } from '../interfaces/launch.interface';


@Injectable({
  providedIn: 'root'
})
export class LaunchService {

  private apiURL = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) {}

  getLaunches(): Observable<Launch[]> {
    return this.http.get<Launch[]>(this.apiURL);
  }
}
