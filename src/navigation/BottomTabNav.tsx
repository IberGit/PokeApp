import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PokedexStack from './Stacks/PokedexStack';
import Settings from '@screens/Settings';

const Tab = createBottomTabNavigator();

export default function BottomTabNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={PokedexStack}
        options={{
          tabBarLabel: 'Pokédex',
        }}
      />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
