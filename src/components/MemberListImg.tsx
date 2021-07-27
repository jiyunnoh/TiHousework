import React from 'react';
import {Image} from 'react-native';

function MemberListImg({src}): JSX.Element {
  return (
    <>
      <Image
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
      />
    </>
  );
}

export default React.memo(MemberListImg);
