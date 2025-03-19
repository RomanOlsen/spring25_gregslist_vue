import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { House } from "@/models/House.js"
import { AppState } from "@/AppState.js"

class HouseService {
  async getHouses() {
    const response = await api.get('api/houses')
    logger.log(response.data)
    const houses = response.data.map(pojo => new House(pojo))
    AppState.houses = houses
  }

async createHouse(houseValues){
  const response = await api.post('api/houses', houseValues)
  logger.log(response.data)
  AppState.houses.push(new House(response.data))
}

  async deleteHouse(){
    // const response = await api.delete()
  }
}

export const houseService = new HouseService()