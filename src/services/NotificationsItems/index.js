import { MockNotificationItems } from 'services/MockModels'

export default class GetNotificationsItems {
  getNotifications(userRole) {
    const type = userRole == 0 ? 'seller' : 'buyer'
    return MockNotificationItems[type]
  }
}
