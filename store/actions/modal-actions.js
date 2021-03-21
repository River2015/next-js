import { ACTIONS } from './action-types';

export const setEditModalVisibility = (isEditModalVisible) => ({
    type: ACTIONS.SET_EDIT_MODAL_VISIBILITY,
    isEditModalVisible
});

export const setDeleteModalVisibility = (isDeleteModalVisible) => ({
    type: ACTIONS.SET_DELETE_MODAL_VISIBILITY,
    isDeleteModalVisible
});

export const setAddModalVisibility = (isAddModalVisible) => ({
    type: ACTIONS.SET_ADD_MODAL_VISIBILITY,
    isAddModalVisible
});
