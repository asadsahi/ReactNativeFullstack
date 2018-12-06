import React, { Component } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import { Colors, Layout } from '../../constants';

import BarCodeScannerScreen from './BarCodeScannerScreen';
import BlurViewScreen from './BlurViewScreen';
import DocumentPickerScreen from './DocumentPickerScreen';
import ExpoComponentsScreen from './ExpoComponentsScreen';
import ExpoApisScreen from './ExpoApisScreen';
import FileSystemScreen from './FileSystemScreen';
import FontScreen from './FontScreen';
import GifScreen from './GifScreen';
import CalendarsScreen from './CalendarsScreen';
import ConstantsScreen from './ConstantsScreen';
import ContactsScreen from './Contacts/ContactsScreen';
import ContactDetailScreen from './Contacts/ContactDetailScreen';
import EventsScreen from './EventsScreen';
import AuthSessionScreen from './AuthSessionScreen';
import FacebookLoginScreen from './FacebookLoginScreen';
import GestureHandlerPinchScreen from './GestureHandlerPinchScreen';
import GestureHandlerListScreen from './GestureHandlerListScreen';
import GestureHandlerSwipeableScreen from './GestureHandlerSwipeableScreen';
import GoogleScreen from './GoogleScreen';
import GoogleSignInScreen from './GoogleSignInScreen';
import RemindersScreen from './RemindersScreen';
import SensorScreen from './SensorScreen';
import GeocodingScreen from './GeocodingScreen';
import GLScreen from './GL/GLScreen';
import GLScreens from './GL/GLScreens';
import ImageManipulatorScreen from './ImageManipulatorScreen';
import ImagePickerScreen from './ImagePickerScreen';
import ImagePreviewScreen from './Reanimated/ImagePreviewScreen';
import IntentLauncherScreen from './IntentLauncherScreen';
import LinearGradientScreen from './LinearGradientScreen';
import LocalAuthenticationScreen from './LocalAuthenticationScreen';
import KeepAwakeScreen from './KeepAwakeScreen';
import FacebookAdsScreen from './FacebookAdsScreen';
import MailComposerScreen from './MailComposerScreen';
import ReactNativeCoreScreen from './ReactNativeCoreScreen';
import TextToSpeechScreen from './TextToSpeechScreen';
import ScreenOrientationScreen from './ScreenOrientationScreen';
import SecureStoreScreen from './SecureStoreScreen';
import SVGScreen from './SVG/SVGScreen';
import SVGExampleScreen from './SVG/SVGExampleScreen';
import LocationScreen from './LocationScreen';
import LottieScreen from './LottieScreen';
import MapsScreen from './MapsScreen';
import NotificationScreen from './NotificationScreen';
import PedometerScreen from './PedometerScreen';
import MediaLibraryScreens from './MediaLibrary/MediaLibraryScreens';
import BasicMaskScreen from './BasicMaskScreen';
import MaskGLScreen from './MaskGLScreen';
import AdMobScreen from './AdMobScreen';
import UtilScreen from './UtilScreen';
import VideoScreen from './VideoScreen';
import WebBrowserScreen from './WebBrowserScreen';
import PrintScreen from './PrintScreen';
import LocalizationScreen from './LocalizationScreen';
import HapticScreen from './HapticScreen';
import StoreReview from './StoreReview';
import BranchScreen from './BranchScreen';
import SMSScreen from './SMSScreen';
import ScreensScreen from './Screens';
import PermissionsScreen from './PermissionsScreen';
import ViewShotScreen from './ViewShotScreen';
import SqliteTodo from './SqliteTodo';

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
        SqliteTodo: { screen: SqliteTodo },
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
