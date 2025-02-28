import { IConversationOption, IAReceivedMessage } from '@rongcloud/imlib-next';
import { IService } from '@rongcloud/imkit';
import { Random as R } from "mockjs";
import { currentUserInfo } from "./context";

const service: IService = {
  getUserProfile: (userId: string) => {
    const userInfo = {
      id: userId,
      name: userId,
      portraitUri: R.image("60x60"),
      displayName: userId,
    }
    currentUserInfo.value = userInfo
    return Promise.resolve(userInfo)
  },
  getConversationProfile: (conversations: IConversationOption[]) => {
    return Promise.resolve(conversations.map(item => ({
      ...item,
      id: item.targetId,
      name: item.targetId,
      portraitUri: R.image("60x60"),
      displayName: item.targetId
    })))
  },
  getGroupMembers: (conversation: IConversationOption) => {
    return Promise.resolve([{
      id: `group_${conversation.targetId}`,
      name: `name_${conversation.targetId}`,
      portraitUri: R.image("60x60"),
      groupNickname: `groupNickname_${conversation.targetId}`
    }])
  }
}

const customMessage = {
  userMessage: {
    'kit:person': (message: IAReceivedMessage) => {
      return `
        <div class="kit-person-message">
          <div onclick="alert('点击')">这是一条自定义消息 ${JSON.stringify(message.content)}</div>
        </div>
      `
    }
  },
  notifyMessage: {
    
  },
  lastMessage: {
    'kit:person': (message: IAReceivedMessage) => {
      const content = message.content;
      return `[自定义消息]`;
    },
  }
}

export {
  service,
  customMessage
}