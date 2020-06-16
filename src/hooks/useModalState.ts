import {useState, useEffect} from 'react';

// Temporary fix for form sheet modal bug
// https://github.com/facebook/react-native/issues/26892#issuecomment-575891577
const useModalState = (initialState: boolean): [boolean, (modalState: boolean) => void] => {
    const [modalVisible, setModalVisible] = useState(initialState);
    const [forceModalVisible, setForceModalVisible] = useState(false);

    const setModal = (modalState: boolean) => {
        if (modalState && modalVisible) {
            setForceModalVisible(true);
        }

        setModalVisible(modalState);
    }

    useEffect(() => {
        if(forceModalVisible) {
            if (modalVisible) {
                setModalVisible(false);
            } else {
                setForceModalVisible(false);
                setModalVisible(true);
            }
        }
    }, [forceModalVisible, modalVisible]);

    return [modalVisible, setModal];
}

export default useModalState;
