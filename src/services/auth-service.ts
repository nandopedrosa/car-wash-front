class AuthService {
  private _isAuthenticated: boolean = true

  get isAuthenticated() {
    return this._isAuthenticated === true
  }
}

const UseAuthService = () => new AuthService()

export { UseAuthService }
