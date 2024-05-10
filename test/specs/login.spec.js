import { driver, $, expect } from '@wdio/globals'

describe('FITUR LOGIN', function () {
	it('sebagai user saya ingin membuka halaman login', async function () {
		// selector pakai accessibility id
		await $('~View menu').click()

		// selector pakai xpath dengan elemen utama tidak memiliki id unique
		// pilih elemen bapak terdekat yang memiliki id unique
		// pilih anak dari bapak tersebut dengan menggunakan order selector dari xpath []
		// await $('//android.view.ViewGroup[@resource-id="com.saucelabs.mydemoapp.android:id/header"]/android.widget.ImageView[2]').click()

		await driver.pause(500)

		// scroll ke bawah
		await driver
			.action('pointer')
			.move({ y: 850, x: 250 })
			.down()
			.pause(100)
			.move({ y: 500, x: 250, duration: 200 })
			.up()
			.perform()

		// pilih berdasarkan text nya pakai UiSelector
		// await $(`android=new UiSelector().text("Log In")`).click()

		// pilih berdasarkan text nya pakai XPath
		await $('//*[@text="Log In"]').click()

		const loginPageTitle = await $('id=com.saucelabs.mydemoapp.android:id/loginTV')
		await expect(loginPageTitle).toHaveText('Login')
	})

	it('login menggunakan username dan password yang valid', async function () {
		await $('id=com.saucelabs.mydemoapp.android:id/nameET').setValue('bod@example.com')
		await $('id=com.saucelabs.mydemoapp.android:id/passwordET').setValue('10203040')
		await $('id=com.saucelabs.mydemoapp.android:id/loginBtn').click()

		const productPageTitle = await $('id=com.saucelabs.mydemoapp.android:id/productTV')
		await expect(productPageTitle).toHaveText('Products')
	})
})