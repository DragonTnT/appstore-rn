import React, { useState } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import {
    Text,
    Image,
} from 'react-native';
import App from '../../App';
import Today from '../today/Today'
import Updates from '../updates/Updates'

const Tabbar = () => {

    const [selectedTab,setSelectedTab] = useState('Today');

    const tabItems = [
        {
            title: 'Today',
            image: require('./image/tabbar_today.png'),
            view: <Today />
        },
        {
            title: 'Games',
            image: require('./image/tabbar_games.png'),
            view: <Text>haha</Text>
        },
        {
            title: 'Updates',
            image: require('./image/tabbar_updates.png'),
            view: <Updates />
        },
        {
            title: 'Search',
            image: require('./image/tabbar_search.png'),
            view: <Text>hehe</Text>
        },
    ];

    return (
        <TabNavigator>
            {
                tabItems.map((item) => {
                    return (
                        <TabNavigator.Item
                            selected={item.title===selectedTab}
                            title={item.title}
                            renderIcon={() => <Image source={item.image} />}
                            onPress={() => {setSelectedTab(item.title)}}>
                            {item.view}
                        </TabNavigator.Item>
                    );
                })
            }
        </TabNavigator>
    );
}

export default Tabbar;