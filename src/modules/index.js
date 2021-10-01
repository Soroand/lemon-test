import { NetAPI, LocalAPI, AsyncStorage } from 'repositories'
import {
  HttpClient,
  LocalClient,
  InputValidation,
  GetProducts,
  GetPopularItems,
  GetFavoriteItems,
  GetLotRequests,
  GetMyLots,
  PhotoHandler,
  MyLotFilter,
  GetNotificationsItems,
  GetTrendsItems,
  Dates,
  SellerReplies,
  CurrencyWeightConverter,
  WordEnding,
  GetCurrency,
} from 'services'
import Auth from '../store/auth'
import Regions from '../store/regions'
import Registration from '../store/registration'
import Products from '../store/products'
import PopularItems from '../store/popularItems'
import LotRequests from '../store/lotRequests'
import MyLots from '../store/myLots'
import Profile from '../store/profile'
import Lot from '../store/addLot'
import FavoriteItems from '../store/favoriteItems'
import NotificationItems from '../store/notifications'
import TrendsItems from '../store/trendsItems'
import MyRepliesItems from '../store/myReplies'
import TutorialStore from '../store/tutorial'
import FilterSearch from '../store/filterSearch'

const services = {
  httpClient: HttpClient,
  localClient: new LocalClient(),
  inputValidation: new InputValidation(),
  products: new GetProducts(),
  popular: new GetPopularItems(),
  favorite: new GetFavoriteItems(),
  lotRequest: new GetLotRequests(),
  lots: new GetMyLots(),
  photoHandler: new PhotoHandler(),
  myLotFilter: new MyLotFilter(),
  notifications: new GetNotificationsItems(),
  trends: new GetTrendsItems(),
  dates: new Dates(),
  sellerReplies: new SellerReplies(),
  currencyWeightConverter: new CurrencyWeightConverter(),
  wordEnding: new WordEnding(),
  getCurrency: new GetCurrency(),
}

const repositories = {
  http: new NetAPI(services.httpClient),
  local: new LocalAPI(services.localClient),
  asyncStorage: new AsyncStorage(),
}

const store = {
  auth: new Auth(),
  profile: new Profile(),
  regions: new Regions(),
  registration: new Registration(),
  productsStore: new Products(),
  popularItems: new PopularItems(),
  lotRequests: new LotRequests(),
  myLots: new MyLots(),
  addLot: new Lot(),
  favoriteItems: new FavoriteItems(),
  notificationsItems: new NotificationItems(),
  trendsItems: new TrendsItems(),
  myRepliesItems: new MyRepliesItems(),
  tutorial: new TutorialStore(repositories.asyncStorage),
  filterSearch: new FilterSearch(),
}

export default {
  services,
  repositories,
  store,
}
