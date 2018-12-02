// Supported font types
// export type IconType =
//   | 'material'
//   | 'material-community'
//   | 'simple-line-icon'
//   | 'zocial'
//   | 'font-awesome'
//   | 'octicon'
//   | 'ionicon'
//   | 'foundation'
//   | 'evilicon'
//   | 'entypo'
//   | string;

const Routes = [
    { route: 'Expo', description: 'Expo', icon: 'lab-flask', iconType: 'entypo' },
    { route: 'Navigation', description: 'Navigation', icon: 'credit-card-multiple', iconType: 'material-community' },
    { route: 'NativeElements', description: 'Native Elements', icon: 'react', iconType: 'material-community' },
    { route: 'Animations', description: 'Animations', icon: 'animation', iconType: 'material-community' },
    { route: 'Todo', description: 'Todo', icon: 'tasklist', iconType: 'octicon' },
    { route: 'Flatlist', description: 'Flatlist', icon: 'list-unordered', iconType: 'octicon' },
    { route: 'Camera', description: 'Camera', icon: 'camera' },
    { route: 'BarcodeScanner', description: 'Barcode scanner', icon: 'barcode-scan' },
    { route: 'AudioVideo', description: 'Audio Video', icon: 'audio-video' },
    { route: 'Brightness', description: 'Brightness', icon: 'brightness-6' },
];

export default Routes;