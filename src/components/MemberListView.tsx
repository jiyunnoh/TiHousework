import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import useView from '../hooks/useView';
import ClickedMemberHighlight from './ClickedMemberHighlight';
import MemberListImg from './MemberListImg';

function MemberListView(): JSX.Element {
  // const [selectedId, setSelectedId] = useState(null);
  const profile = [
    {
      id: '0',
      name: 'Home',
      src: require('../img/cannotFind.png'),
    },
    {
      id: '1',
      name: 'Jiyun',
      src: require('../img/jiyun.jpg'),
    },
    {
      id: '2',
      name: 'Michael',
      src: require('../img/mike.jpg'),
    },
    {
      id: '3',
      name: 'Yunho',
      src: require('../img/logojiyun.png'),
    },
    {
      id: '4',
      name: 'Jack',
      src: require('../img/welcome.jpeg'),
    },
    {
      id: '5',
      name: 'Sam',
      src: require('../img/11.jpeg'),
    },
  ];
  const Item = ({item, src}) => {
    const {onUpdateClickedUserId, onUpdateClickedUserName} = useView();

    return (
      <>
        <TouchableOpacity
          onPress={() => {
            onUpdateClickedUserId(item.id);
            onUpdateClickedUserName(item.name);
          }}
          style={{
            height: 74,
            width: 74,
            marginLeft: 10,
            borderRadius: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <MemberListImg src={src} />
          <ClickedMemberHighlight item={item} />
        </TouchableOpacity>
      </>
    );
  };
  const renderItem = ({item}) => {
    return <Item item={item} src={item.src} />;
  };

  return (
    <>
      <FlatList
        style={{
          height: 90,
          flexGrow: 0,
          borderBottomWidth: 1,
          borderColor: '#484848',
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={profile}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        // extraData={selectedId}
      />
    </>
  );
}

export default MemberListView;
