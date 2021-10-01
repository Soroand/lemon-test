import React, { useContext, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { AuthScreens } from 'views/Auth'
import { AppContext } from 'context/App'
import MainRoutes from 'views/Main'
import { observer } from 'mobx-react'
import Loading from 'views/Loading'

const Stack = createStackNavigator()

const Routes = observer(() => {
  const [isLoading, setIsloading] = useState(true)
  const {
    store: {
      auth,
      productsStore,
      popularItems,
      lotRequests,
      favoriteItems,
      tutorial,
    },
    repositories: { asyncStorage },
    services: { products, popular, lotRequest, favorite },
  } = useContext(AppContext)
  console.log(auth?.lang, auth?.currency)

  const initialAuthLang = async () => {
    auth.updateLang(await asyncStorage.getItem('language'))
  }
  const initialAuthCurr = async () => {
    auth.updateCurrency(await asyncStorage.getItem('currency'))
  }
  const initialUserRole = async () => {
    auth.setUserRole(await asyncStorage.getItem('role', auth))
  }
  const initialToken = async () => {
    auth.setUserToken(await asyncStorage.getItem('token'))
  }
  const initialUserName = async () => {
    auth.onUserNameChange(await asyncStorage.getItem('userName'))
  }
  const initialUserLastName = async () => {
    auth.onUserLastNameChange(await asyncStorage.getItem('lastName'))
  }
  const initialPhoneNumber = async () => {
    auth.onUserPhoneNumberChange(await asyncStorage.getItem('phoneNumber'))
  }
  const initialProducts = () => {
    tutorial.setSearchCategory(products.getProducts()[2])
    productsStore.updateProducts(products.getProducts())
  }
  const initialPopularItems = () => {
    popularItems.updatePopular(popular.getPopular())
  }
  const initialLotRequests = () => {
    lotRequests.updateRequests(lotRequest.getRequests())
  }
  const initialFavoriteItems = () => {
    favoriteItems.updateFavorite(favorite.getFavorite())
  }
  const checkCanShowTutorial = async () => {
    await tutorial.checkCanStart()
  }

  useEffect(() => {
    checkCanShowTutorial()
    initialUserName()
    initialUserLastName()
    initialPhoneNumber()
    initialAuthLang()
    initialAuthCurr()
    initialUserRole()
    initialProducts()
    initialPopularItems()
    initialFavoriteItems()
    initialLotRequests()
    initialToken().then(() => {
      setTimeout(() => {
        setIsloading(false)
      }, 1000)
    })

    return () => setTimeout()
  }, [])

  return !isLoading ? (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {auth.token === null && (
          <Stack.Screen name="AuthScreens" component={AuthScreens} />
        )}
        <Stack.Screen name="MainRoutes" component={MainRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <Loading />
  )
})

export default Routes
