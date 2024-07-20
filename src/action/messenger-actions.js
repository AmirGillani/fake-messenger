import {
  MESSAGE_REQUEST,
  MESSAGE_SUCCESS,
  CONTACT_SUCCESS,
  SAVE_MESSAGES_SUCCESS,
  DELETE_MESSAGES_SUCCESS,
  } from "../constants/constant";
  
  // METHOD WILL BE CALLED IN PAGES
  
  export const sendMessage = (isSend) => async (dispatch) => {

      dispatch({ type: MESSAGE_REQUEST });
    
      // ELSE PUT THESE PRODUCTS IN STATE
  
      dispatch({
        type: MESSAGE_SUCCESS,
        isSend: isSend,
      });
   
  };

  export const changeContact = (contact) => async (dispatch) => {
  
    // ELSE PUT THESE PRODUCTS IN STATE

    dispatch({
      type: CONTACT_SUCCESS,
      contact: contact,
    });
 
    };


    export const saveMessages = (messages) => async (dispatch) => {
  
      // ELSE PUT THESE PRODUCTS IN STATE
  
      dispatch({
        type: SAVE_MESSAGES_SUCCESS,
        messages: messages,
      });
   
      };

      export const deleteMessage = (messages) => async (dispatch) => {
  
        // ELSE PUT THESE PRODUCTS IN STATE
    
        dispatch({
          type: DELETE_MESSAGES_SUCCESS,
          messages: messages,
        });
     
        };

  