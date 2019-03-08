const path = require('path');
const {app} = require('electron');
// import settings from 'electron-settings';
const {
  createWindow,
  defineWindow,
  getWindow
} = require('./electronWindows');

const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';
const MAIN_WINDOW_ID = 'main';

/**
 * Creates a window for the main application.
 * @returns {Window}
 */
function createMainWindow() {
  const windowOptions = {
    width: 980,
    minWidth: 980,
    height: 580,
    minHeight: 580,
    show: false,
    center: true,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true
    },
    title: app.getName()
  };
  return createWindow(MAIN_WINDOW_ID, windowOptions);
}

/**
 * Creates a window for the splash screen.
 * This uses a dedicated webpack entry point so it loads fast.
 * @returns {Electron.BrowserWindow}
 */
function createSplashWindow() {
  const windowOptions = {
    width: 400,
    height: 200,
    resizable: false,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true
    },
    frame: false,
    show: true,
    center: true,
    title: app.name
  };
  const window = defineWindow('splash', windowOptions);

  if (IS_DEVELOPMENT) {
    window.loadURL('http://localhost:3000/splash.html');
  } else {
    window.loadURL(`file://${path.join(__dirname, '/splash.html')}`);
  }

  return window;
}

// prevent multiple instances of the main window
app.requestSingleInstanceLock();

app.on('second-instance', () => {
  const window = getWindow(MAIN_WINDOW_ID);
  if (window) {
    if (window.isMinimized()) {
      window.restore();
    }
    window.focus();
  }
});

// quit application when all windows are closed
app.on('window-all-closed', () => {
  // on macOS it is common for applications to stay open until the user explicitly quits
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // on macOS it is common to re-create a window even after all windows have been closed
  const window = getWindow(MAIN_WINDOW_ID);
  if (window === null) {
    createMainWindow();
  }
});

// create main BrowserWindow with a splash screen when electron is ready
app.on('ready', () => {
  const splashWindow = createSplashWindow();
  const mainWindow = createMainWindow();
  mainWindow.once('ready-to-show', () => {
    setTimeout(() => {
      splashWindow.hide();
      mainWindow.show();
    }, 300);
  });
});
