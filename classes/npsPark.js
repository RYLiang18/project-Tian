export default class npsPark {
    constructor(name, lat, long) {
        this.name = name;
        this.lat = parseFloat(lat);
        this.long = parseFloat(long);
    }
}