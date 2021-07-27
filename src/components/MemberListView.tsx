import React, {useState} from 'react';
import {FlatList, Image, TouchableOpacity} from 'react-native';
import useView from '../hooks/useView';
import ClickedMemberHighlight from './ClickedMemberHighlight';
import MemberListImg from './MemberListImg';

function MemberListView(): JSX.Element {
  // const [selectedId, setSelectedId] = useState(null);
  {console.log('엄마')}
  const profile = [
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
    const {onUpdateClickedUserId} = useView();
    return (
      <>
        <TouchableOpacity
          onPress={() => {
            onUpdateClickedUserId(item.id);
          }}
          style={{
            height: 76,
            width: 76,
            marginLeft: 10,
            borderRadius: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* <Image
          {...console.log('이미지')}
            source={src}
            style={[
              {
                width: 70,
                height: 70,
                borderRadius: 40,
                zIndex: 2,
              },
            ]}
          /> */}
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
    <FlatList
      style={{height: 100, flexGrow: 0}}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={profile}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      // extraData={selectedId}
    />
  );
}

export default React.memo(MemberListView);
