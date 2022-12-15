export default class Token {

    private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkRlc2lnbiBQYXR0ZXJucyIsImlhdCI6MTUxNjIzOTAyMn0.hz4iARK7Abhe2JnFArUljPriX7V_d2kfVhxMP4yIGJA'

    getToken(): string {
        return this.token
    }
}