import React, { useContext, useState } from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { AppContext } from 'context/App'
import { H, P } from 'atoms/TextElements'
import I18n from 'i18n-js'
import TextInput from 'atoms/TextInput'
import PriceSymbolComponent from 'atoms/PriceSymbolComponent'
import { AccentButton } from 'atoms/Buttons'
import { useNavigation } from '@react-navigation/native'
import { observer } from 'mobx-react'
import SelectDropdown from 'atoms/SelectDropdown'
import { Alert } from 'react-native'

const AddLotStepOneForm = () => {
  const {
    store: { addLot },
  } = useContext(AppContext)
  const [category, setCategory] = useState(addLot.category)
  const [subCategory, setSubCategory] = useState(addLot.subCategory)
  const [sort, setSort] = useState(addLot.title)
  const [price, setPrice] = useState(addLot.price)
  const [description, setDescription] = useState(addLot.description)
  const [disabled, setDisabled] = useState(true)
  const navigation = useNavigation()

  return (
    <>
      {/* TITLE */}
      <H type="h2" marginT="25@ms">
        {I18n.t('CreateLot.StepOne.title')}
      </H>

      {/* CATEGORY */}
      <SelectDropdown
        title={I18n.t('CreateLot.StepOne.productCategory')}
        data={addLot.categoriesMock}
        value={category}
        placeholder={I18n.t('CreateLot.StepOne.placeholderOne')}
        setValue={setCategory}
        customPlaceholderStyles={{ opacity: 0.3 }}
        dropdownBtnStyle={{ borderWidth: 0 }}
      />

      {/* SUB CATEGORY */}
      <SelectDropdown
        title={I18n.t('CreateLot.StepOne.productSubcategory')}
        data={addLot.subCategoriesMock}
        value={subCategory}
        placeholder={I18n.t('CreateLot.StepOne.placeholderTwo')}
        setValue={setSubCategory}
        customPlaceholderStyles={{ opacity: 0.3 }}
        dropdownBtnStyle={{ borderWidth: 0 }}
      />

      {/* PRODUCT TYPE */}
      <P textColor="#242E29" marginT="20@ms" textSize="13@ms">
        {I18n.t('CreateLot.StepOne.productType')}
      </P>
      <TextInput
        placeholder={I18n.t('CreateLot.StepOne.productTypePlaceholder')}
        type="company"
        value={() => sort}
        onChange={setSort}
      />
      <P textSize="12@ms" marginT="10@ms">
        {I18n.t('CreateLot.StepOne.productDescUnderline')}
      </P>

      {/* PRICE */}
      <P marginT="20@ms" textColor="#242E29">
        {I18n.t('CreateLot.StepOne.priceTitle')} (
        <PriceSymbolComponent textSize="16@ms" /> / 1{' '}
        {I18n.t('CreateLot.StepOne.weightTitle')})
      </P>
      <TextInput
        placeholder={I18n.t('CreateLot.StepOne.pricePlaceholder')}
        type="money"
        value={() => price}
        onChange={setPrice}
      />
      <P textColor="#242E29" marginT="20@ms" textSize="13@ms">
        {I18n.t('CreateLot.StepOne.messageTitle')}
      </P>
      <TextInput
        multi={true}
        numberOfLines={5}
        customStyles={{ height: 100 }}
        placeholder=" "
        type="description"
        value={() => description}
        onChange={setDescription}
      />
      <AccentButton
        onPress={() => {
          {
            category?.trim() &&
            subCategory?.trim() &&
            sort?.trim() &&
            price?.trim() &&
            description?.trim()
              ? (addLot.stepOneHandler(
                  category,
                  subCategory,
                  sort,
                  price,
                  description
                ),
                navigation.navigate('AddLotStepTwo'))
              : Alert.alert(
                  I18n.t('CreateLot.StepOne.Error.title'),
                  I18n.t('CreateLot.StepOne.Error.message')
                )
          }
        }}
        textColor="#242E29"
      >
        {I18n.t('CreateLot.StepOne.buttonText')}
      </AccentButton>
    </>
  )
}

export default observer(AddLotStepOneForm)

const styles = ScaledSheet.create({})
