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
}

export const houseService = new HouseService()