import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Character } from 'src/app/models/character';
import { ApiRequestService } from 'src/app/services/api-request.service';

@Component({
  selector: 'app-characters-details',
  templateUrl: './characters-details.component.html',
  styleUrls: ['./characters-details.component.scss']
})
export class CharactersDetailsComponent implements OnInit {
character$: Observable<AxiosResponse< Character>>;

  constructor(private route: ActivatedRoute, private apiRequest: ApiRequestService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      
      const id= params['id'];
      console.log(id);
      this.character$ = this.apiRequest.getDetails(id)
      console.log(this.character$);
    })
  }

}
