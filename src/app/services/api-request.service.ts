import { Injectable } from '@angular/core';
import Axios from  'axios-observable';
import { environment } from 'src/environments/environment';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {
  API_KEY = 'https://rickandmortyapi.com/api/character';

  constructor() { }


  getAllCharacters(query='', page = 200){
    const filter = `${this.API_KEY}/?name=${query}&page=${page}`;
    return Axios.get<Character[]>(filter);
  }
    
  getDetails(id: number) {
    console.log(`${this.API_KEY}/${id}`)
    return Axios.get<Character>(`${this.API_KEY}/${id}`)

  }

  getCharacter
}
