/* eslint-disable prefer-destructuring */
import { Freshchat, FreshchatUser } from 'react-native-freshchat-sdk';

import { updateUserCustomized } from '../graphql/mutationsCustomized';

import { maskRemoveService } from './maskService';
import { Mutation } from './udnaAPIService';

const FreshchatUserPropertiesService = (user) => {
  const freshchatUser = new FreshchatUser();
  const nameArray = user.name.split(' ');
  freshchatUser.firstName = nameArray[0];
  freshchatUser.lastName = nameArray[nameArray.length - 1];
  freshchatUser.email = user.email;
  freshchatUser.phoneCountryCode = '+55';
  freshchatUser.phone = maskRemoveService(user.cellphone);
  Freshchat.setUser(freshchatUser, (error) => {
    console.log(error);
  });
};

const FreshChatIdentifyService = (user) => {
  Freshchat.identifyUser(maskRemoveService(user.cpf), user.restoreId, (error) => {
    console.log(error);
  });

  Freshchat.addEventListener(
    Freshchat.EVENT_USER_RESTORE_ID_GENERATED,
    () => {
      Freshchat.getUser(async (userChat) => {
        const { restoreId } = userChat;
        const { externalId } = userChat;
        await Mutation(updateUserCustomized, { input: { id: externalId, restoreId } });
        console.log(`externalId: ${externalId}`);
        console.log(`restoreId: ${restoreId}`);
      });
    },
  );
};

export { FreshchatUserPropertiesService, FreshChatIdentifyService };
