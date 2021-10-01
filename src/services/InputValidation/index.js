export default class InputValidation {
  validateNameField(data) {
    return data.replace(/['0-9']/g, '')
  }
  validatePhoneField(data) {
    return data.replace(/\D/g, '')
  }
  validatePasswordField(data) {
    console.log(data)
    return data.replace(/[а-яА-ЯёЁ]/g, '')
  }
}
