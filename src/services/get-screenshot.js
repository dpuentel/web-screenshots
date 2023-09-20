import { chromium } from 'playwright'

export const getScreenshot = async ({ url, width, height }) => {
  console.log(`Generating screenshot for ${url}`)
  const urlTrimmed = url
    .replace('https://', '')
    .replace('https%3A%2F%2F', '')
    .replace('http://', '')
    .replace('http%3A%2F%2F', '')

  try {
    const secureUrl = generateSecureUrl({ url: urlTrimmed })
    console.log(`Generating screenshot for ${secureUrl}`)
    return await generateScreenshot({ url: secureUrl, width, height })
  } catch (error) {
    console.error(`Error generating screenshot for secure ${urlTrimmed}`, error)
    const insecureUrl = generateInsecureUrl({ url: urlTrimmed })
    console.log(`Generating screenshot for ${insecureUrl}`)
    return await generateScreenshot({ url: insecureUrl, width, height })
  }
}

const generateSecureUrl = ({ url }) => {
  const secureUrl = new URL(`https://${url}`)
  return secureUrl.toString()
}

const generateInsecureUrl = ({ url }) => {
  const insecureUrl = new URL(`http://${url}`)
  return insecureUrl.toString()
}

const generateScreenshot = async ({ url, width, height }) => {
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.goto(url)
  await page.setViewportSize({ width, height })
  const screenshotBuffer = await page.screenshot()
  await browser.close()
  return screenshotBuffer
}
