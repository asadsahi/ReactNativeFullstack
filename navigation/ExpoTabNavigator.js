import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import { Colors, Layout } from '../constants';

import BarCodeScannerScreen from '../screens/expo/BarCodeScannerScreen';
import BlurViewScreen from '../screens/expo/BlurViewScreen';
import DocumentPickerScreen from '../screens/expo/DocumentPickerScreen';
import ExpoComponentsScreen from '../screens/expo/ExpoComponentsScreen';
import ExpoApisScreen from '../screens/expo/ExpoApisScreen';
import FileSystemScreen from '../screens/expo/FileSystemScreen';
import FontScreen from '../screens/expo/FontScreen';
import GifScreen from '../screens/expo/GifScreen';
import CalendarsScreen from '../screens/expo/CalendarsScreen';
import ConstantsScreen from '../screens/expo/ConstantsScreen';
import ContactsScreen from '../screens/expo/Contacts/ContactsScreen';
import ContactDetailScreen from '../screens/expo/Contacts/ContactDetailScreen';
import EventsScreen from '../screens/expo/EventsScreen';
import AuthSessionScreen from '../screens/expo/AuthSessionScreen';
import FacebookLoginScreen from '../screens/expo/FacebookLoginScreen';
import GestureHandlerPinchScreen from '../screens/expo/GestureHandlerPinchScreen';
import GestureHandlerListScreen from '../screens/expo/GestureHandlerListScreen';
import GestureHandlerSwipeableScreen from '../screens/expo/GestureHandlerSwipeableScreen';
import GoogleScreen from '../screens/expo/GoogleScreen';
import GoogleSignInScreen from '../screens/expo/GoogleSignInScreen';
import RemindersScreen from '../screens/expo/RemindersScreen';
import SensorScreen from '../screens/expo/SensorScreen';
import GeocodingScreen from '../screens/expo/GeocodingScreen';
import GLScreen from '../screens/expo/GL/GLScreen';
import GLScreens from '../screens/expo/GL/GLScreens';
import ImageManipulatorScreen from '../screens/expo/ImageManipulatorScreen';
import ImagePickerScreen from '../screens/expo/ImagePickerScreen';
import ImagePreviewScreen from '../screens/expo/Reanimated/ImagePreviewScreen';
import IntentLauncherScreen from '../screens/expo/IntentLauncherScreen';
import LinearGradientScreen from '../screens/expo/LinearGradientScreen';
import LocalAuthenticationScreen from '../screens/expo/LocalAuthenticationScreen';
import KeepAwakeScreen from '../screens/expo/KeepAwakeScreen';
import FacebookAdsScreen from '../screens/expo/FacebookAdsScreen';
import MailComposerScreen from '../screens/expo/MailComposerScreen';
import ReactNativeCoreScreen from '../screens/expo/ReactNativeCoreScreen';
import TextToSpeechScreen from '../screens/expo/TextToSpeechScreen';
import ScreenOrientationScreen from '../screens/expo/ScreenOrientationScreen';
import SecureStoreScreen from '../screens/expo/SecureStoreScreen';
import SVGScreen from '../screens/expo/SVG/SVGScreen';
import SVGExampleScreen from '../screens/expo/SVG/SVGExampleScreen';
import LocationScreen from '../screens/expo/LocationScreen';
import LottieScreen from '../screens/expo/LottieScreen';
import MapsScreen from '../screens/expo/MapsScreen';
import NotificationScreen from '../screens/expo/NotificationScreen';
import PedometerScreen from '../screens/expo/PedometerScreen';
import MediaLibraryScreens from '../screens/expo/MediaLibrary/MediaLibraryScreens';
import BasicMaskScreen from '../screens/expo/BasicMaskScreen';
import MaskGLScreen from '../screens/expo/MaskGLScreen';
import AdMobScreen from '../screens/expo/AdMobScreen';
import UtilScreen from '../screens/expo/UtilScreen';
import VideoScreen from '../screens/expo/VideoScreen';
import WebBrowserScreen from '../screens/expo/WebBrowserScreen';
import PrintScreen from '../screens/expo/PrintScreen';
import LocalizationScreen from '../screens/expo/LocalizationScreen';
import HapticScreen from '../screens/expo/HapticScreen';
import StoreReview from '../screens/expo/StoreReview';
import BranchScreen from '../screens/expo/BranchScreen';
import SMSScreen from '../screens/expo/SMSScreen';
import ScreensScreen from '../screens/expo/Screens';
import PermissionsScreen from '../screens/expo/PermissionsScreen';
import ViewShotScreen from '../screens/expo/ViewShotScreen';

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#fff',
    },
    headerTitle: {
        color: '#000000',
    },
    card: {
        backgroundColor: '#fafafa',
    },
});

const StackConfig = {
    cardStyle: styles.card,
    headerTransitionPreset: 'uikit',
    defaultNavigationOptions: () => ({
        headerStyle: styles.header,
        headerTintColor: Colors.tintColor,
        headerTitleStyle: styles.headerTitle,
        headerPressColorAndroid: Colors.tintColor,
    }),
};

const ExpoComponentsStackNavigator = createStackNavigator(
    {
        ExpoComponents: { screen: ExpoComponentsScreen },
        AdMob: { screen: AdMobScreen },
        BarCodeScanner: { screen: BarCodeScannerScreen },
        BlurView: { screen: BlurViewScreen },
        GL: { screen: GLScreen },
        ...GLScreens,
        GestureHandlerPinch: { screen: GestureHandlerPinchScreen },
        GestureHandlerList: { screen: GestureHandlerListScreen },
        GestureHandlerSwipeable: { screen: GestureHandlerSwipeableScreen },
        ImagePreview: { screen: ImagePreviewScreen },
        Gif: { screen: GifScreen },
        FacebookAds: { screen: FacebookAdsScreen },
        SVG: { screen: SVGScreen },
        SVGExample: { screen: SVGExampleScreen },
        LinearGradient: { screen: LinearGradientScreen },
        Lottie: { screen: LottieScreen },
        Maps: { screen: MapsScreen },
        Video: { screen: VideoScreen },
        Screens: { screen: ScreensScreen },
    },
    StackConfig
);

const ExpoApisStackNavigator = createStackNavigator(
    {
        ExpoApis: { screen: ExpoApisScreen },
        AuthSession: { screen: AuthSessionScreen },
        Branch: { screen: BranchScreen },
        DocumentPicker: { screen: DocumentPickerScreen },
        Localization: { screen: LocalizationScreen },
        FacebookLogin: { screen: FacebookLoginScreen },
        FileSystem: { screen: FileSystemScreen },
        Font: { screen: FontScreen },
        Google: GoogleScreen,
        GoogleSignIn: GoogleSignInScreen,
        Haptic: { screen: HapticScreen },
        Calendars: { screen: CalendarsScreen },
        Constants: { screen: ConstantsScreen },
        Contacts: ContactsScreen,
        ContactDetail: ContactDetailScreen,
        Events: { screen: EventsScreen },
        Geocoding: { screen: GeocodingScreen },
        ImageManipulator: { screen: ImageManipulatorScreen },
        ImagePicker: { screen: ImagePickerScreen },
        IntentLauncher: { screen: IntentLauncherScreen },
        KeepAwake: { screen: KeepAwakeScreen },
        MailComposer: { screen: MailComposerScreen },
        ...MediaLibraryScreens,
        Notification: { screen: NotificationScreen },
        LocalAuthentication: { screen: LocalAuthenticationScreen },
        Location: { screen: LocationScreen },
        Pedometer: { screen: PedometerScreen },
        Permissions: PermissionsScreen,
        Print: { screen: PrintScreen },
        Reminders: { screen: RemindersScreen },
        ScreenOrientation: { screen: ScreenOrientationScreen },
        SecureStore: { screen: SecureStoreScreen },
        Sensor: { screen: SensorScreen },
        SMS: { screen: SMSScreen },
        StoreReview: { screen: StoreReview },
        TextToSpeech: { screen: TextToSpeechScreen },
        Util: { screen: UtilScreen },
        WebBrowser: { screen: WebBrowserScreen },
        ViewShot: { screen: ViewShotScreen },
    },
    StackConfig
);

const ReactNativeCoreStackNavigator = createStackNavigator(
    {
        ReactNativeCore: { screen: ReactNativeCoreScreen },
        BasicMaskExample: { screen: BasicMaskScreen },
        GLMaskExample: { screen: MaskGLScreen },
    },
    StackConfig
);

class TabIcon extends React.PureComponent {
    render() {
        let baseSize = this.props.size || 27;
        return (
            <MaterialIcons
                name={this.props.name}
                size={Platform.OS === 'android' ? baseSize - 2 : baseSize}
                color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
            />
        );
    }
}

const createTabNavigator =
    Platform.OS === 'android' ? createMaterialBottomTabNavigator : createBottomTabNavigator;

const ExpoTabNavigator = createTabNavigator(
    {
        ExpoApis: ExpoApisStackNavigator,
        ExpoComponents: ExpoComponentsStackNavigator,
        ReactNativeCore: ReactNativeCoreStackNavigator,
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            let tabBarLabel;
            const { routeName } = navigation.state;
            if (routeName === 'ReactNativeCore') {
                tabBarLabel = Layout.isSmallDevice ? 'RN Core' : 'React Native Core';
            } else if (routeName === 'ExpoComponents') {
                tabBarLabel = Layout.isSmallDevice ? 'Components' : 'Expo Components';
            } else if (routeName === 'ExpoApis') {
                tabBarLabel = Layout.isSmallDevice ? 'APIs' : 'Expo APIs';
            }

            return {
                header: null,
                tabBarLabel,
                tabBarIcon: ({ focused }) => {
                    const { routeName } = navigation.state;
                    if (routeName === 'ReactNativeCore') {
                        return <TabIcon name="group-work" focused={focused} />;
                    } else if (routeName === 'ExpoComponents') {
                        return <TabIcon name="filter" focused={focused} size={25} />;
                    } else if (routeName === 'ExpoApis') {
                        return <TabIcon name="functions" focused={focused} size={28} />;
                    }
                },
            };
        },
        /* Below applies to material bottom tab navigator */
        activeTintColor: Colors.tabIconSelected,
        inactiveTintColor: Colors.tabIconDefault,
        shifting: true,
        barStyle: {
            backgroundColor: '#fff',
            borderTopWidth: StyleSheet.hairlineWidth,
            borderTopColor: Colors.tabIconDefault,
        },
        /* Below applies to bottom tab navigator */
        tabBarOptions: {
            style: styles.tabBar,
            labelStyle: styles.tabBarLabel,
            activeTintColor: Colors.tabIconSelected,
            inactiveTintColor: Colors.tabIconDefault,
        },
    }
);

export default ExpoTabNavigator;
