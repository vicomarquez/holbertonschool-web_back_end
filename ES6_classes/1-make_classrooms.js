import ClassRoom from "./0-classroom.js";

function initializeRooms() {
  const arr = [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
    ];
    return arr;
}
export default initializeRooms;
