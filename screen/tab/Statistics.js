import {StyleSheet, Text, View} from 'react-native';
import {useAppContext} from '../../store/context';

const Statistics = () => {
  const {moodHistory} = useAppContext();
  console.log(moodHistory);
  return (
    <View>
      <Text>Statistics</Text>
    </View>
  );
};

export default Statistics;

const styles = StyleSheet.create({});
