export class House {
  constructor(d) {
    this.id = d.id
    this.bedrooms = d.bedrooms
    this.bathrooms = d.bathrooms
    this.levels = d.levels
    this.imgUrl = d.imgUrl
    this.year = d.year
    this.price = d.price
    this.description = d.description

    this.creatorId = d.creatorId

    this.creator = d.creator
  }
}