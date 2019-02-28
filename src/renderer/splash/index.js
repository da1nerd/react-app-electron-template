import { getWindowId } from '../../common/windows'

require('./splash.css')

if (getWindowId() === 'splash') {
  // TRICKY: the main window also gets the splash chunk. So for now we check if we are in the right window.

  // Do stuff for the splash screen
}
