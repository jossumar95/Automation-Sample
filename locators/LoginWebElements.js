export const LOGIN_PAGE_ELEMENTS = {
  emailInput: 'input[name="email"]',
  passwordInput: 'input[name="password"]',
  signInButton: (page) => page.getByRole('button', { name: 'Sign in' }),
  loginButton:   (page) => page.getByRole('button', { name: 'Login / Sign Up' }),
  errorMessage: (page) => page.getByText('Invalid email or password')
};