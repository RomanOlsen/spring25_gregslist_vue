import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"

class HouseService{
  async getHouses(){
    const response = await api.get('api/houses')
    logger.log(response.data)
  }
}

export const houseService = new HouseService()