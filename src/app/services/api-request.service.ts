import { Injectable } from '@angular/core';
import Axios from  'axios-observable';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {
  API_KEY = 'https://rickandmortyapi.com/api/character/';

  constructor() { }


  getAllCharacters(query='', page = 1){
    const filter = `${this.API_KEY}/?name=${query}&page=${page}`;
    return Axios.get<Character[]>(filter);
  }
    
  getDetails(id:number){
    return Axios.get<Character>(`${this.API_KEY}/${id}`);
  }
}
