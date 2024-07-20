import {
  MESSAGE_REQUEST,
  MESSAGE_SUCCESS,
  MESSAGE_FAIL,
  CONTACT_SUCCESS,
  SAVE_MESSAGES_SUCCESS,
  DELETE_MESSAGES_SUCCESS
} from "../constants/constant";

// REDUCER FUNCTION FOR USERS HOOK

export function messengerReducer(
  state = {
    contacts:[
      {
        img: "https://i.pinimg.com/474x/98/13/56/981356b662516b7165e0b39e9199d1ef.jpg",
        name: "Harry Potter",
        msg: "Love you!!",
      },
      {
        img: "https://i.pinimg.com/736x/29/3b/22/293b22cd7972ed55d34e48e90d5c23e1.jpg",
        name: "Hermoiny",
        msg: "Lets chat!!",
      },
      {
        img: "https://cdn.staticneo.com/w/harrypotter/thumb/Ginny_weasley.jpg/200px-Ginny_weasley.jpg",
        name: "Gini",
        msg: "Lets study together!!",
      },
      {
        img: "https://hamariweb.com/profiles/images/profile/3006-414.jpg",
        name: "Bilal Abbas",
        msg: "Please reply me!!",
      },
      {
        img: "https://i.pinimg.com/736x/ab/b8/8f/abb88fe4cc8e13fe7d49f1c56be8eccd.jpg",
        name: "Chris Evens",
        msg: "Cutie lets talk!!",
      },
    ],
    contact: {
      img: "https://i.pinimg.com/474x/98/13/56/981356b662516b7165e0b39e9199d1ef.jpg",
      name: "Harry Potter",
    },
    messagesArray:[]
  },
  action
) {
  // WHEN DISPATCH FUNCTION IS CALLED IT WILL CREATE ACTION OBJ

  switch (action.type) {
    case MESSAGE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case MESSAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        isSend: action.isSend,
      };
    case MESSAGE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CONTACT_SUCCESS:
      return {
        ...state,
        contact: action.contact,
      };

      case SAVE_MESSAGES_SUCCESS:
      return {
        ...state,
        messagesArray: [...state.messagesArray,action.messages],
      };

      case DELETE_MESSAGES_SUCCESS:
      return {
        ...state,
        messagesArray: action.messages,
      };
    default:
      return state;
  }
}
