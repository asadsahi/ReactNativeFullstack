
import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Platform,
  Image,
  TouchableHighlight,
} from 'react-native';

import { Text, Card, Divider, Icon } from 'react-native-elements';

const iOS_fonts = [
  'Academy Engraved LET',
  'AcademyEngravedLetPlain',
  'Al Nile',
  'AlNile-Bold',
  'American Typewriter',
  'AmericanTypewriter-Bold',
  'AmericanTypewriter-Condensed',
  'AmericanTypewriter-CondensedBold',
  'AmericanTypewriter-CondensedLight',
  'AmericanTypewriter-Light',
  'Apple Color Emoji',
  'AppleColorEmoji',
  'Apple SD Gothic Neo',
  'AppleSDGothicNeo-Bold',
  'AppleSDGothicNeo-Light',
  'AppleSDGothicNeo-Medium',
  'AppleSDGothicNeo-Regular',
  'AppleSDGothicNeo-SemiBold',
  'AppleSDGothicNeo-Thin',
  'AppleSDGothicNeo-UltraLight',
  'Arial',
  'Arial Hebrew',
  'Arial Rounded MT Bold',
  'Arial-BoldItalicMT',
  'Arial-BoldMT',
  'Arial-ItalicMT',
  'ArialHebrew',
  'ArialHebrew-Bold',
  'ArialHebrew-Light',
  'ArialMT',
  'ArialRoundedMTBold',
  'Avenir',
  'Avenir-Black',
  'Avenir-BlackOblique',
  'Avenir-Book',
  'Avenir-BookOblique',
  'Avenir-Heavy',
  'Avenir-HeavyOblique',
  'Avenir-Light',
  'Avenir-LightOblique',
  'Avenir-Medium',
  'Avenir-MediumOblique',
  'Avenir-Oblique',
  'Avenir-Roman',
  'Avenir Next',
  'Avenir Next Condensed',
  'AvenirNext-Bold',
  'AvenirNext-BoldItalic',
  'AvenirNext-DemiBold',
  'AvenirNext-DemiBoldItalic',
  'AvenirNext-Heavy',
  'AvenirNext-HeavyItalic',
  'AvenirNext-Italic',
  'AvenirNext-Medium',
  'AvenirNext-MediumItalic',
  'AvenirNext-Regular',
  'AvenirNext-UltraLight',
  'AvenirNext-UltraLightItalic',
  'AvenirNextCondensed-Bold',
  'AvenirNextCondensed-BoldItalic',
  'AvenirNextCondensed-DemiBold',
  'AvenirNextCondensed-DemiBoldItalic',
  'AvenirNextCondensed-Heavy',
  'AvenirNextCondensed-HeavyItalic',
  'AvenirNextCondensed-Italic',
  'AvenirNextCondensed-Medium',
  'AvenirNextCondensed-MediumItalic',
  'AvenirNextCondensed-Regular',
  'AvenirNextCondensed-UltraLight',
  'AvenirNextCondensed-UltraLightItalic',
  'Bangla Sangam MN',
  'Baskerville',
  'Baskerville-Bold',
  'Baskerville-BoldItalic',
  'Baskerville-Italic',
  'Baskerville-SemiBold',
  'Baskerville-SemiBoldItalic',
  'Bodoni 72',
  'Bodoni 72 Oldstyle',
  'Bodoni 72 Smallcaps',
  'Bodoni Ornaments',
  'BodoniOrnamentsITCTT',
  'BodoniSvtyTwoITCTT-Bold',
  'BodoniSvtyTwoITCTT-Book',
  'BodoniSvtyTwoITCTT-BookIta',
  'BodoniSvtyTwoOSITCTT-Bold',
  'BodoniSvtyTwoOSITCTT-Book',
  'BodoniSvtyTwoSCITCTT-Book',
  'Bradley Hand',
  'BradleyHandITCTT-Bold',
  'Chalkboard SE',
  'ChalkboardSE-Bold',
  'ChalkboardSE-Light',
  'ChalkboardSE-Regular',
  'Chalkduster',
  'Cochin',
  'Cochin-Bold',
  'Cochin-BoldItalic',
  'Cochin-Italic',
  'Copperplate',
  'Copperplate-Bold',
  'Copperplate-Light',
  'Courier',
  'Courier New',
  'Courier-Bold',
  'Courier-BoldOblique',
  'Courier-Oblique',
  'CourierNewPS-BoldItalicMT',
  'CourierNewPS-BoldMT',
  'CourierNewPS-ItalicMT',
  'CourierNewPSMT',
  'Damascus',
  'DamascusBold',
  'DamascusLight',
  'DamascusMedium',
  'DamascusSemiBold',
  'Devanagari Sangam MN',
  'DevanagariSangamMN',
  'DevanagariSangamMN-Bold',
  'Didot',
  'Didot-Bold',
  'Didot-Italic',
  'DiwanMishafi',
  'Euphemia UCAS',
  'EuphemiaUCAS-Bold',
  'EuphemiaUCAS-Italic',
  'Farah',
  'Futura',
  'Futura-CondensedExtraBold',
  'Futura-CondensedMedium',
  'Futura-Medium',
  'Futura-MediumItalic',
  'Geeza Pro',
  'GeezaPro-Bold',
  'Georgia',
  'Georgia-Bold',
  'Georgia-BoldItalic',
  'Georgia-Italic',
  'Gill Sans',
  'GillSans-Bold',
  'GillSans-BoldItalic',
  'GillSans-Italic',
  'GillSans-Light',
  'GillSans-LightItalic',
  'GillSans-SemiBold',
  'GillSans-SemiBoldItalic',
  'GillSans-UltraBold',
  'Gujarati Sangam MN',
  'GujaratiSangamMN',
  'GujaratiSangamMN-Bold',
  'Gurmukhi MN',
  'GurmukhiMN-Bold',
  'Heiti SC',
  'Heiti TC',
  'Helvetica',
  'Helvetica Neue',
  'Helvetica-Bold',
  'Helvetica-BoldOblique',
  'Helvetica-Light',
  'Helvetica-LightOblique',
  'Helvetica-Oblique',
  'HelveticaNeue-Bold',
  'HelveticaNeue-BoldItalic',
  'HelveticaNeue-CondensedBlack',
  'HelveticaNeue-CondensedBold',
  'HelveticaNeue-Italic',
  'HelveticaNeue-Light',
  'HelveticaNeue-LightItalic',
  'HelveticaNeue-Medium',
  'HelveticaNeue-MediumItalic',
  'HelveticaNeue-Thin',
  'HelveticaNeue-ThinItalic',
  'HelveticaNeue-UltraLight',
  'HelveticaNeue-UltraLightItalic',
  'Hiragino Mincho ProN',
  'Hiragino Sans',
  'HiraginoSans-W3',
  'HiraginoSans-W6',
  'HiraMinProN-W3',
  'HiraMinProN-W6',
  'Hoefler Text',
  'HoeflerText-Black',
  'HoeflerText-BlackItalic',
  'HoeflerText-Italic',
  'HoeflerText-Regular',
  'Kailasa',
  'Kailasa-Bold',
  'Kannada Sangam MN',
  'KannadaSangamMN',
  'KannadaSangamMN-Bold',
  'Khmer Sangam MN',
  'Kohinoor Bangla',
  'Kohinoor Devanagari',
  'Kohinoor Telugu',
  'KohinoorBangla-Light',
  'KohinoorBangla-Regular',
  'KohinoorBangla-Semibold',
  'KohinoorDevanagari-Light',
  'KohinoorDevanagari-Regular',
  'KohinoorDevanagari-Semibold',
  'KohinoorTelugu-Light',
  'KohinoorTelugu-Medium',
  'KohinoorTelugu-Regular',
  'Lao Sangam MN',
  'Malayalam Sangam MN',
  'MalayalamSangamMN',
  'MalayalamSangamMN-Bold',
  'Marker Felt',
  'MarkerFelt-Thin',
  'MarkerFelt-Wide',
  'Menlo',
  'Menlo-Bold',
  'Menlo-BoldItalic',
  'Menlo-Italic',
  'Menlo-Regular',
  'Mishafi',
  'Noteworthy',
  'Noteworthy-Bold',
  'Noteworthy-Light',
  'Optima',
  'Optima-Bold',
  'Optima-BoldItalic',
  'Optima-ExtraBlack',
  'Optima-Italic',
  'Optima-Regular',
  'Oriya Sangam MN',
  'OriyaSangamMN',
  'OriyaSangamMN-Bold',
  'Palatino',
  'Palatino-Bold',
  'Palatino-BoldItalic',
  'Palatino-Italic',
  'Palatino-Roman',
  'Papyrus',
  'Papyrus-Condensed',
  'Party LET',
  'PartyLetPlain',
  'PingFang HK',
  'PingFang SC',
  'PingFang TC',
  'PingFangHK-Light',
  'PingFangHK-Medium',
  'PingFangHK-Regular',
  'PingFangHK-Semibold',
  'PingFangHK-Thin',
  'PingFangHK-Ultralight',
  'PingFangSC-Light',
  'PingFangSC-Medium',
  'PingFangSC-Regular',
  'PingFangSC-Semibold',
  'PingFangSC-Thin',
  'PingFangSC-Ultralight',
  'PingFangTC-Light',
  'PingFangTC-Medium',
  'PingFangTC-Regular',
  'PingFangTC-Semibold',
  'PingFangTC-Thin',
  'PingFangTC-Ultralight',
  'Savoye LET',
  'SavoyeLetPlain',
  'Sinhala Sangam MN',
  'SinhalaSangamMN',
  'SinhalaSangamMN-Bold',
  'Snell Roundhand',
  'SnellRoundhand-Black',
  'SnellRoundhand-Bold',
  'Symbol',
  'Tamil Sangam MN',
  'TamilSangamMN-Bold',
  'Telugu Sangam MN',
  'Thonburi',
  'Thonburi-Bold',
  'Thonburi-Light',
  'Times New Roman',
  'TimesNewRomanPS-BoldItalicMT',
  'TimesNewRomanPS-BoldMT',
  'TimesNewRomanPS-ItalicMT',
  'TimesNewRomanPSMT',
  'Trebuchet MS',
  'Trebuchet-BoldItalic',
  'TrebuchetMS-Bold',
  'TrebuchetMS-Italic',
  'Verdana',
  'Verdana-Bold',
  'Verdana-BoldItalic',
  'Verdana-Italic',
  'Zapf Dingbats',
  'ZapfDingbatsITC',
  'Zapfino',
];

const android_fonts = [
  'normal',
  'notoserif',
  'sans-serif',
  'sans-serif-light',
  'sans-serif-thin',
  'sans-serif-condensed',
  'sans-serif-medium',
  'serif',
  'Roboto',
  'monospace',
];

class Fonts extends Component {
  render() {
    const { navigation } = this.props;

    const fonts = Platform.OS === 'ios' ? iOS_fonts : android_fonts;

    return (
      <ScrollView style={styles.container}>
        {fonts.map((font, index) => (
          <Text
            key={index}
            style={[styles.textStyle, { fontFamily: `${font}` }]}
          >
            {font}
          </Text>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    fontSize: 18,
    textAlign: 'center',
    padding: 10,
  },
});

export default Fonts;
