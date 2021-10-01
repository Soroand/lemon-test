import { MockTrendsItems } from 'services/MockModels'

export default class GetTrends {
  getTrends(type) {
    return MockTrendsItems[type]
  }
}
