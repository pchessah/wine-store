import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IProducts } from "../interfaces/iproducts"

@Injectable({
  providedIn: 'root'
})
export class MockServerService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const products = [
      {
        id: 1, name: "Kayak", category: "Watersports",
        description: "A boat for one person", price: 275, imgUrl: "https://images.pexels.com/photos/2404667/pexels-photo-2404667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },
      {
        id: 2, name: "Lifejacket", category: "Watersports",
        description: "Protective and fashionable", price: 48.95, imgUrl: "https://images.pexels.com/photos/5302571/pexels-photo-5302571.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },
      {
        id: 3, name: "Soccer Ball", category: "Soccer",
        description: "FIFA-approved size and weight", price: 19.50, imgUrl: "https://images.pexels.com/photos/364308/pexels-photo-364308.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      },
      {
        id: 4, name: "Corner Flags", category: "Soccer",
        description: "Give your playing field a professional touch",
        price: 34.95, imgUrl: "https://images.pexels.com/photos/47343/the-ball-stadion-horn-corner-47343.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },
      {
        id: 5, name: "Stadium", category: "Soccer",
        description: "Flat-packed 35,000-seat stadium", price: 79500, imgUrl: "https://images.pexels.com/photos/46792/the-ball-stadion-football-the-pitch-46792.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },
      {
        id: 6, name: "Thinking Cap", category: "Chess",
        description: "Improve brain efficiency by 75%", price: 16, imgUrl: "https://images.pexels.com/photos/954254/pexels-photo-954254.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      },
      {
        id: 7, name: "Unsteady Chair", category: "Chess",
        description: "Secretly give your opponent a disadvantage",
        price: 29.95, imgUrl: "https://images.pexels.com/photos/116910/pexels-photo-116910.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },
      {
        id: 8, name: "Human Chess Board", category: "Chess",
        description: "A fun game for the family", price: 75, imgUrl: "https://images.pexels.com/photos/4114601/pexels-photo-4114601.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      },
      {
        id: 9, name: "Bling Bling King", category: "Chess",
        description: "Gold-plated, diamond-studded King", price: 1200,  imgUrl: "https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      }
    ]

    const cart = [];

    return { products, cart }
  }
}
