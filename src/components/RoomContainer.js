// import React from "react";
// import RoomsFilter from "./RoomFilter";
// import RoomsList from "./RoomList";
// import { withRoomConsumer } from "../Context";
// import Loading from "./Loading";

// function RoomContainer({ context }) {
//   const { loading, sortedRooms, rooms } = context;
//   if (loading) {
//     return <Loading />;
//   }
//   return (
//     <>
//       <RoomsFilter rooms={rooms} />
//       <RoomsList rooms={sortedRooms} />
//     </>
//   );
// }

// export default withRoomConsumer(RoomContainer);


import React from 'react'
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import {RoomConsumer} from '../Context';
import Loading from './Loading';


export default function RoomContainer() {
    
    return (
            <RoomConsumer>
              {value => {
                const { loading, sortedRooms, rooms } = value;
                if (loading) {
                  return <Loading />;
                }
                return (
                  <div>
                    <RoomFilter rooms={rooms} />
                    <RoomList rooms={sortedRooms} />
                  </div>
                );
              }}
            </RoomConsumer>
          );
}