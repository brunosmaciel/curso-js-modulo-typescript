import isEmail from 'validator/lib/isEmail';
class FormValidation {
  readonly form: HTMLFormElement;
  readonly username: HTMLInputElement;
  readonly email: HTMLInputElement;
  readonly password: HTMLInputElement;
  readonly passwordRepeated: HTMLInputElement;
  readonly errorSpan: HTMLSpanElement;
  readonly SHOW_ERROR_CLASS: string;
  constructor() {
    this.form = document.querySelector('.form') as HTMLFormElement;
    this.username = document.querySelector('.username') as HTMLInputElement;
    this.email = document.querySelector('.email') as HTMLInputElement;
    this.password = document.querySelector('.password') as HTMLInputElement;
    this.passwordRepeated = document.querySelector('.password2') as HTMLInputElement;
    this.errorSpan = document.querySelector('.error-message') as HTMLSpanElement;
    this.SHOW_ERROR_CLASS = 'show-error-message';
  }
  check() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.cleanErrorsMessage(this.form);
      this.checkEmail(this.email);
      this.checkEqualPasswords(this.password, this.passwordRepeated);
      this.checkEmptyFields(this.username, this.email, this.password, this.passwordRepeated);
      if (this.checkSubmit(this.form)) {
        alert('Form enviado com sucesso');
      }
    });
  }
  checkEmptyFields(...inputs: HTMLInputElement[]): void {
    inputs.forEach((element) => {
      if (element.value === '') {
        this.throwErrorMessages('Campo nao pode estar vazio', element);
      }
    });
  }
  throwErrorMessages(msg: string, ...input: HTMLInputElement[]): void {
    for (const item of input) {
      const span = item.nextElementSibling as HTMLSpanElement;
      item.parentElement?.classList.add(this.SHOW_ERROR_CLASS);
      span.innerText = msg;
    }
  }
  cleanErrorsMessage(form: HTMLFormElement): void {
    const teste = form.querySelectorAll(`.${this.SHOW_ERROR_CLASS}`);
    teste.forEach((element) => {
      element.classList.remove(`${this.SHOW_ERROR_CLASS}`);
    });
  }
  checkEmail(input: HTMLInputElement): void {
    if (!isEmail(input.value)) this.throwErrorMessages('Email invalido', input);
  }
  checkEqualPasswords(password: HTMLInputElement, password2: HTMLInputElement): void {
    if (password.value !== password2.value)
      this.throwErrorMessages('Senhas nao coincidem', password, password2);
  }
  checkSubmit(form: HTMLFormElement): boolean {
    let flag = true;
    const inputs = form.querySelectorAll('.form-fields');
    inputs.forEach((input) => {
      if (input.classList.contains(this.SHOW_ERROR_CLASS)) {
        flag = false;
        console.log(flag);
      }
    });
    return flag;
  }
}
export default new FormValidation().check();
