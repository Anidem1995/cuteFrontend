export class Property {
    idProperty: number;
    address: string;
    latitude: number;
    longitude: number;
    numberOfBaths: number;
    numberOfRooms: number;
    garage: number;
    surfaceInSquareMeters: number;
    description: string;
    monthlyRent: number;

    constructor(
        idProperty: number,
        address: string, 
        latitude: number, 
        longitude: number, 
        numberOfBaths: number,
        numberOfRooms: number,
        garage: number,
        surfaceInSquareMeters: number, 
        description: string,
        monthlyRent: number) {
            this.idProperty = idProperty;
            this.address = address;
            this.latitude = latitude;
            this.longitude = longitude;
            this.numberOfBaths = numberOfBaths;
            this.numberOfRooms = numberOfRooms;
            this.garage = garage;
            this.surfaceInSquareMeters = surfaceInSquareMeters;
            this.description = description;
            this.monthlyRent = monthlyRent;
        }
}
