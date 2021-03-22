import { ACTIONS } from '../actions/action-types'

export const initialState = {
    isDelete: false,
    isEdit: false,
    isAdd: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.SET_DELETE_MODAL_VISIBILITY:
            return {
                ...state,
                isDelete: action.isDeleteModalVisible
            };
        case ACTIONS.SET_EDIT_MODAL_VISIBILITY:
            return {
                ...state,
                isEdit: action.isEditModalVisible,
            };
        case ACTIONS.SET_ADD_MODAL_VISIBILITY:
            return {
                ...state,
                isAdd: action.isAddModalVisible,
            };
        default:
            return state;
    }
}
export default reducer;
