import { getScreenshot } from '../services/get-screenshot.js'

const DEFAULT_WIDTH = 1280
const DEFAULT_HEIGHT = 720

export class ScreenshotGenerator {
  async generate (req, res) {
    try {
      const { url } = req.params

      if (!url) {
        res.status(400).send('Missing url parameter')
      }

      const width = parseInt(req.query.width, 10) || DEFAULT_WIDTH
      const height = parseInt(req.query.height, 10) || DEFAULT_HEIGHT

      const screenshotBuffer = await getScreenshot({ url, width, height })
      res.set('Content-Type', 'image/png')
      res.send(screenshotBuffer)
    } catch (error) {
      console.error(error)
      res.status(500).send('Error generating screenshot')
    }
  }
}
