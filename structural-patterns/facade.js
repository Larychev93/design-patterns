// TODO facade pattern
/**
 * @ Описание Фасад
 * Предоставляет единую точку входа к подсистеме, тем самым упрощая использование и понимание
 * Пример я хочу нанять команду для разработки, мне нужны фронты, беки, нативщики, я выбираю к-во и качество, получаю инвойс)
 */
class BoardRent {
  rentBoard() {
    return 15
  }

  rentEquipment() {
    return 20
  }
}

class SkiResortTicketSystem {
  buyOneDayTicket() {
    return 115;
  }

  buyHalfDayTicket() {
    return 75
  }
}

class HotelBookingSystem {
  bookRoom(quality) {
    switch (quality) {
      case 3:
        return 250;

      case 4:
        return 400;

      case 5:
        return 900;

      default:
        throw new Error('Quality rating should be in range [3, 5]')
    }
  }
}

class SkiHolidayFacade {
  constructor() {
    this.boardRent = new BoardRent();
    this.skiPassTicketSystem = new SkiResortTicketSystem();
    this.hotelBookingSystem = new HotelBookingSystem();
  }

  highLevelRest() {
    const fullRentEquipment = this.boardRent.rentBoard() + this.boardRent.rentEquipment();
    const fullDayPass = this.skiPassTicketSystem.buyOneDayTicket();
    const topRoomRent = this.hotelBookingSystem.bookRoom(5);

    return fullRentEquipment + fullDayPass + topRoomRent
  }

  lowLevelRest() {
    const halfDayPass = this.skiPassTicketSystem.buyHalfDayTicket();
    const lowLevelRoomRent = this.hotelBookingSystem.bookRoom(3);

    return halfDayPass + lowLevelRoomRent;
  }
}

const lowLevelRest = new SkiHolidayFacade().lowLevelRest();
const highLevelRest = new SkiHolidayFacade().highLevelRest();

console.log(`Low level rest: ${lowLevelRest}`);
console.log(`High level rest: ${highLevelRest}`);
