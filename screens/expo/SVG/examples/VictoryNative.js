import React, { Component } from 'react';
import { Dimensions, Text, View } from 'react-native';
import { VictoryArea, VictoryChart, VictoryStack } from 'victory-native';
import { Svg } from 'expo';

const { Text: RNSVGText } = Svg;

class VictoryChartExample extends Component {
  static title = 'VictoryChart';

  render() {
    return (
      <View>
        <VictoryChart>
          <VictoryStack>
            <VictoryArea
              data={[
                { x: 'a', y: 2 },
                { x: 'b', y: 3 },
                { x: 'c', y: 5 },
                { x: 'd', y: 4 },
                { x: 'e', y: 7 },
              ]}
            />
            <VictoryArea
              data={[
                { x: 'a', y: 1 },
                { x: 'b', y: 4 },
                { x: 'c', y: 5 },
                { x: 'd', y: 7 },
                { x: 'e', y: 5 },
              ]}
            />
            <VictoryArea
              data={[
                { x: 'a', y: 3 },
                { x: 'b', y: 2 },
                { x: 'c', y: 6 },
                { x: 'd', y: 2 },
                { x: 'e', y: 6 },
              ]}
            />
            <VictoryArea
              data={[
                { x: 'a', y: 2 },
                { x: 'b', y: 3 },
                { x: 'c', y: 3 },
                { x: 'd', y: 4 },
                { x: 'e', y: 7 },
              ]}
            />
          </VictoryStack>
        </VictoryChart>
        <Svg width={Dimensions.get('window').width} height={50}>
          <RNSVGText
            fill="#fff"
            stroke="#000"
            fontSize={15}
            fontFamily={Font.processFontFamily('space-mono')}
            x={25}
            y={15}>
            drawn with victory-native
          </RNSVGText>
        </Svg>
      </View>
    );
  }
}

const icon = <Text>VN</Text>;

const samples = [VictoryChartExample];

export { icon, samples };
