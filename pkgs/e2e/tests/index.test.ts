import { test, expect, Page } from '@playwright/test'

let page: Page

// register a new user
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage()
  await page.goto('http://localhost:1337/admin')
  await page.waitForURL('**/admin/auth/register-admin')

  await page.locator('input[name="firstname"]').fill('Karam')

  await page.locator('input[name="lastname"]').fill('Barakat')

  await page.locator('input[name="email"]').fill('k@g.com')

  await page.locator('input[name="password"]').fill('-yVnuT59GKk$r7U')

  await page.locator('input[name="confirmPassword"]').fill('-yVnuT59GKk$r7U')

  await page.getByRole('button', { name: "Let's start" }).click()
})

test('strapi working', async () => {
  await page.goto('http://localhost:1337/admin')

  await page.waitForURL('**/admin')

  await page.goto('http://localhost:1337/admin/settings/webhooks')

  await page.getByRole('link', { name: 'Create new webhook' }).click()

  await page.locator('input[name="name"]').fill('next')

  await page
    .locator('input[name="url"]')
    .fill('http://localhost:3000/api/revalidate')

  await page.getByLabel('Key').click()
  await page.getByRole('option', { name: 'Authorization', exact: true }).click()

  await page.getByLabel('Value').fill('Bearer 353fc98a19e44da9acf61d71b11895f9')

  await page
    .getByRole('cell', { name: /Entry/ })
    .getByRole('checkbox', { name: 'Select all entries' })
    .check()

  await page
    .getByRole('cell', { name: /Media/ })
    .getByRole('checkbox', { name: 'Select all entries' })
    .check()

  await page.getByRole('button', { name: 'Save' }).click()
  await page.getByRole('button', { name: 'Trigger' }).click()
  await page.getByText('Error 522').click()
  await page.getByText('test success').click()
})

test.skip('check if tag was validated', () => {})
