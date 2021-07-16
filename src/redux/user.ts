// Declare Action type for typescript
const CREATE_USER = 'user/CREATE_USER' as const;
const REMOVE_USER = 'user/REMOVE_USER' as const;
const UPDATE_EMAIL = 'user/UPDATE_EMAIL' as const;
const REMOVE_EMAIL = 'user/REMOVE_EMAIL' as const;
const UPDATE_ROOMID = 'user/UPDATE_ROOMID' as const;
const REMOVE_ROOMID = 'user/REMOVE_ROOMID' as const;
const UPDATE_ISINVITED = 'user/UPDATE_ISINVITED' as const;
const REMOVE_ISINVITED = 'user/REMOVE_ISINVITED' as const;
const UPDATE_ISSENDER = 'user/UPDATE_ISSENDER' as const;
const REMOVE_ISSENDER = 'user/UPDATE_ISSENDER' as const;
const UPDATE_INVITEREMAIL = 'user/UPDATE_INVITEREMAIL' as const;
const REMOVE_INVITEREMAIL = 'user/REMOVE_INVITEREMAIL' as const;

// Declare Action type for Redux
interface actionType {
  type: string;
  payload?: any;
}

export const createUser = (user: UserState): actionType => ({
  type: CREATE_USER,
  payload: user,
});
export const removeUser = (): actionType => ({type: REMOVE_USER});

export const updateEmail = (email: string): actionType => ({
  type: UPDATE_EMAIL,
  payload: email,
});
export const removeEmail = (): actionType => ({type: REMOVE_EMAIL});

export const updateRoomID = (roomID: string): actionType => ({
  type: UPDATE_ROOMID,
  payload: roomID,
});
export const removeRoomID = (): actionType => ({type: REMOVE_ROOMID});

export const updateIsInvited = (isInvited: boolean): actionType => ({
  type: UPDATE_ISINVITED,
  payload: isInvited,
});
export const removeIsInvited = (): actionType => ({type: REMOVE_ISINVITED});

export const updateIsSender = (isSender: boolean): actionType => ({
  type: UPDATE_ISSENDER,
  payload: isSender,
});
export const removeIsSender = (): actionType => ({type: REMOVE_ISSENDER});

export const updateInviterEmail = (inviterEmail: string): actionType => ({
  type: UPDATE_INVITEREMAIL,
  payload: inviterEmail,
});
export const removeInviterEmail = (): actionType => ({
  type: REMOVE_INVITEREMAIL,
});

// Declare Reducers
type UserAction = ReturnType<typeof createUser> | ReturnType<typeof removeUser>;

export type UserState = {
  email: string;
  roomID: string;
  isInvited: boolean;
  isSender: boolean;
  inviterEmail: string;
};

const initialState: UserState = {
  email: '',
  roomID: 0,
  isInvited: false,
  isSender: false,
  inviterEmail: '',
};

function user(state: UserState = initialState, action: UserAction): UserState {
  switch (action.type) {
    case CREATE_USER:
      return {
        email: action.payload.email,
        roomID: action.payload.roomID,
        isInvited: action.payload.isInvited,
        isSender: action.payload.isSender,
        inviterEmail: action.payload.inviterEmail,
      };
    case REMOVE_USER:
      return {
        email: '',
        roomID: '',
        isInvited: false,
        isSender: false,
        inviterEmail: '',
      };
    case UPDATE_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case REMOVE_EMAIL:
      return {
        ...state,
        email: '',
      };
    case UPDATE_ROOMID:
      return {
        ...state,
        roomID: action.payload,
      };
    case REMOVE_ROOMID:
      return {
        ...state,
        roomID: '',
      };
    case UPDATE_ISINVITED:
      return {
        ...state,
        isInvited: action.payload,
      };
    case REMOVE_ISINVITED:
      return {
        ...state,
        isInvited: false,
      };
    case UPDATE_ISSENDER:
      return {
        ...state,
        isSender: action.payload,
      };
    case REMOVE_ISSENDER:
      return {
        ...state,
        isSender: false,
      };
    case UPDATE_INVITEREMAIL:
      return {
        ...state,
        inviterEmail: action.payload,
      };
    case REMOVE_INVITEREMAIL:
      return {
        ...state,
        inviterEmail: '',
      };
    default:
      return state;
  }
}

export default user;
