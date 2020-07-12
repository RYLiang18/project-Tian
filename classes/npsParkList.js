export default class npsParkLists {
    constructor() {
        this.parkList = []
    }

    push(park) {
        this.parkList.push(park)
    }

    getNames() {
        names = [];
        this.parkList.forEach(park => {
            names.push(park.name)
        })
        return names;
    }

    getCoords() {
        coords = [];
        this.parkList.forEach(park => {
            coords.push({
                latitude: park.lat,
                longitude: park.long
            })
        })
        return coords
    }
}