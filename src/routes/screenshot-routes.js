import { Router } from 'express'
import { ScreenshotGenerator } from '../controllers/screenshot-controller.js'

export const createScreenshotRouter = () => {
  const screenshotRouter = Router()

  const screenshotGenerator = new ScreenshotGenerator()

  screenshotRouter.get('/:url', screenshotGenerator.generate)

  return screenshotRouter
}
