import Flags from 'assets/Flags'
import I18n from 'I18n'

const imgSource = () => {
  return I18n.t('Settings.MainScreen.languageChosen') === 'Русский'
    ? Flags[1].url
    : I18n.t('Settings.MainScreen.languageChosen') === 'English'
    ? Flags[2].url
    : Flags[0].url
}

export const config = [
  {
    id: 1,
    title: `language`,
    route: 'SettingsLanguage',
  },
  {
    id: 2,
    title: `currency`,
    route: 'SettingsCurrency',
  },
  {
    id: 3,
    title: `region`,
    route: 'SettingsRegion',
  },
  {
    id: 4,
    title: `account`,
  },
  {
    id: 5,
    title: `support`,
  },
  {
    id: 6,
    title: `contacts`,
    titleRight: `+7 747 554-45-55`,
  },
  {
    id: 7,
    title: `privacy`,
  },
  {
    id: 8,
    title: `terms`,
  },
]
