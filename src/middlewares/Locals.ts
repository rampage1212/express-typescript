/**
 * Define App Locals
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

class Locals {
	public static init (_express): void {
		const name = process.env.APP_NAME || 'NodeTS Dashboard'
		const url = process.env.APP_URL || `http://localhost:${process.env.PORT}`
		const year = (new Date()).getFullYear()
		const copyright = `Copyright ${year} ${name} | All Rights Reserved`
		const company = process.env.COMPANY_NAME || 'GeekyAnts'

		_express.locals.app = {
			name,
			company,
			url,
			copyright
		}

		return _express
	}
}

export default Locals
