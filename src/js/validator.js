export default class validator {
  constructor(userName) {
    this.userName = userName;
  }

  validateUsername() {
    if (/^[\d\-_]/.test(this.userName)) {
      throw new Error('Имя не должно начинаться цифрами, символами подчёркивания или тире.');
    }
    if (/[\d\-_]$/.test(this.userName)) {
      throw new Error('Имя не должно заканчиваться цифрами, символами подчёркивания или тире.');
    }
    if (/\d{4}/.test(this.userName)) {
      throw new Error('Имя не должно содержать подряд более трёх цифр.');
    }
    if ( !/[a-z]/.test(this.userName)) {
      throw new Error('Имя может содержать только латинские буквы, цифры, подчеркивания и тире.');
    }

    return this.userName;
  }
}