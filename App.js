import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'antd-mobile';
import { StackNavigator } from 'react-navigation';

import CutscenesScreen from './screens/CutscenesScreen';
import NewCutscenesScreen from './screens/NewCutscenesScreen';
import DetailScreen from './screens/DetailScreen';

// Grimoire
import CardMenuScreen from './screens/Grimoire/CardMenuScreen';
import EnemiesMainScreen from './screens/Grimoire/EnemiesMainScreen';
import PlacesMainScreen from './screens/Grimoire/PlacesMainScreen';
import ActivitiesMainScreen from './screens/Grimoire/ActivitiesMainScreen';

import GrimoireScreen from './screens/Grimoire/GrimoireScreen';
import GuardianScreen from './screens/Grimoire/GuardianScreen';
import ClassesScreen from './screens/Grimoire/ClassesScreen';
import RacesScreen from './screens/Grimoire/RacesScreen';
import GhostScreen from './screens/Grimoire/GhostScreen';
import MovementScreen from './screens/Grimoire/MovementScreen';
import SubclassesScreen from './screens/Grimoire/SubclassesScreen';
import MeleeScreen from './screens/Grimoire/MeleeScreen';
import GrenadeScreen from './screens/Grimoire/GrenadeScreen';
import SuperScreen from './screens/Grimoire/SuperScreen';

import InventoryScreen from './screens/Grimoire/InventoryScreen';
import PrimaryWeaponsScreen from './screens/Grimoire/inventory/PrimaryWeaponsScreen';
import SpecialWeaponsScreen from './screens/Grimoire/inventory/SpecialWeaponsScreen';
import HeavyWeaponsScreen from './screens/Grimoire/inventory/HeavyWeaponsScreen';
import DamageTypesScreen from './screens/Grimoire/inventory/DamageTypesScreen';
import GuardianVehiclesScreen from './screens/Grimoire/inventory/GuardianVehiclesScreen';
import EconomyScreen from './screens/Grimoire/inventory/EconomyScreen';

import AlliesMainScreen from './screens/Grimoire/allies/AlliesMainScreen';
import TravelerScreen from './screens/Grimoire/allies/TravelerScreen';

import GuardiansCardScreen from './screens/Grimoire/GuardiansCardScreen';
import GrimoireCardComponent from './screens/Grimoire/GrimoireCardComponent';

import MainScreen from './screens/MainScreen';

export default class App extends React.Component {
	render() {
		return (
			// <View style={styles.container}>
			// 	<Button>Antd Button</Button>
			// 	<Text>Open up App.js to start working on your app!</Text>
			// 	<Text>Changes you make will automatically reload.</Text>
			// 	<Text>Shake your phone to open the developer menu.</Text>
			// </View>
			<AppStackNavigator />
		);
	}
}

const AppStackNavigator = StackNavigator(
	{
		MainScreen: {
			screen: MainScreen,
			navigationOptions: {
				headerTitle: 'Main'
			}
		},
		GrimoireScreen: {
			screen: GrimoireScreen,
			navigationOptions: {
				headerTitle: 'Grimoire'
			}
		},
		GuardianScreen: {
			screen: GuardianScreen,
			navigationOptions: {
				headerTitle: 'Guardian'
			}
		},
		ClassesScreen: {
			screen: ClassesScreen,
			navigationOptions: {
				headerTitle: 'Classes'
			}
		},
		RacesScreen: {
			screen: RacesScreen,
			navigationOptions: {
				headerTitle: 'Races'
			}
    },
    GhostScreen: {
			screen: GhostScreen,
			navigationOptions: {
				headerTitle: 'Races'
			}
		},
		GuardiansCardScreen: {
			screen: GuardiansCardScreen,
			navigationOptions: {
				headerTitle: 'Guardians Card'
			}
    },
    SubclassesScreen: {
			screen: SubclassesScreen,
			navigationOptions: {
				headerTitle: 'Sub-Classes Card'
			}
    },
    MeleeScreen: {
			screen: MeleeScreen,
			navigationOptions: {
				headerTitle: 'Melee Abilities Card'
			}
    },
    GrenadeScreen: {
			screen: GrenadeScreen,
			navigationOptions: {
				headerTitle: 'Grenade Abilities Card'
			}
    },
    MovementScreen: {
			screen: MovementScreen,
			navigationOptions: {
				headerTitle: 'Movement Mode Card'
			}
    },
    SuperScreen: {
			screen: SuperScreen,
			navigationOptions: {
				headerTitle: 'Super Abilities Card'
			}
		},
		GrimoireCardComponent: {
			screen: GrimoireCardComponent,
    },

    InventoryScreen: {
      screen: InventoryScreen,
      navigationOptions: {
        headerTitle: "Inventory"
      }
    },
    PrimaryWeaponsScreen: {
      screen: PrimaryWeaponsScreen,
      navigationOptions: {
        headerTitle: "Primary Weapons"
      }
    },
    SpecialWeaponsScreen: {
      screen: SpecialWeaponsScreen,
      navigationOptions: {
        headerTitle: "Special Weapons"
      }
    },
    HeavyWeaponsScreen: {
      screen: HeavyWeaponsScreen,
      navigationOptions: {
        headerTitle: "Heavy Weapons"
      }
    },
    DamageTypesScreen: {
      screen: DamageTypesScreen,
      navigationOptions: {
        headerTitle: "Damage Types"
      }
    },
    GuardianVehiclesScreen: {
      screen: GuardianVehiclesScreen,
      navigationOptions: {
        headerTitle: "Guardian Vehicles"
      }
    },
    EconomyScreen: {
      screen: EconomyScreen,
      navigationOptions: {
        headerTitle: "Economy"
      }
    },
    AlliesMainScreen: {
      screen: AlliesMainScreen,
      navigationOptions: {
        headerTitle: "Allies"
      }
    },
    TravelerScreen: {
      screen: TravelerScreen,
      navigationOptions: {
        headerTitle: "Traveler"
      }
    },
    CardMenuScreen: {
      screen: CardMenuScreen
    },
    EnemiesMainScreen: {
      screen: EnemiesMainScreen,
      navigationOptions: {
        headerTitle: "Enemies"
      }
    },
    PlacesMainScreen: {
      screen: PlacesMainScreen,
      navigationOptions: {
        headerTitle: "Places"
      }
    },
    ActivitiesMainScreen: {
      screen: ActivitiesMainScreen,
      navigationOptions: {
        headerTitle: "Activities"
      }
		},
		CutscenesScreen: {
			screen: CutscenesScreen,
			navigationOptions: {
				headerTitle: "Cutscenes"
			}
		},
		NewCutscenesScreen: {
			screen: NewCutscenesScreen,
			navigationOptions: {
				headerTitle: "Cutscenes"
			}
    },
    DetailScreen: {
      screen: DetailScreen,
      navigationOptions: {
        headerTitle: "Details"
      }
    }
	},
	{
		initialRouteName: 'MainScreen'
	},
	{
		animationEnabled: true,
		swipeEnabled: true
	}
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
