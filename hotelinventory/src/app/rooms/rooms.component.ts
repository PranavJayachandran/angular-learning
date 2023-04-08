import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  hotelName="Love"
  rooms:Room={
    totalRooms:20,
    availableRooms:10,
    bookedRooms:5
  }
  roomList: RoomList[]=[];

  constructor(){

  }
  ngOnInit():void{
    this.roomList=[
      {
        roomType:"Delux Room",
        amenities:"Air Conditioner, Free Wifi, TV, Bathroom",
        price:500,
        photos:"https://my.alfred.edu/zoom/_images/fall-drone-shot.jpg",
        checkinTime:new Date("11-April-2023"),
        checkoutTime:new Date("15-April-2023"),
        roomNumber:1
      },
      {
        roomType:"Delux Room",
        amenities:"Air Conditioner, Free Wifi, TV, Bathroom",
        price:2000,
        photos:"https://my.alfred.edu/zoom/_images/fall-drone-shot.jpg",
        checkinTime:new Date("11-April-2023"),
        checkoutTime:new Date("15-April-2023"),
        roomNumber:2
      },
      {
        roomType:"Private Suite",
        amenities:"Air Conditioner, Free Wifi, TV, Bathroom",
        price:100,
        photos:"https://my.alfred.edu/zoom/_images/fall-drone-shot.jpg",
        checkinTime:new Date("11-April-2023"),
        checkoutTime:new Date("15-April-2023"),
        roomNumber:3
      }
    ]
  }
}
