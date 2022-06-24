import React, { useState } from 'react'
import { Text, View, TouchableOpacity, Image, Modal } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';
import styles from '../styles/Profilepic';
import colors from '../utils/color';
import initialState from './initialState';

const Profilepic = ({ navigation }) => {
    const imgdata = 'https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=';
    const [imageSource, setImageSource] = useState(imgdata);
    const [imageSourceErr, setImageSourceErr] = useState('');
    const [model, setModel] = useState(false);

    const validation = (values) => {
        setImageSource(values);
        setImageSourceErr('');
    }

    function selectImage() {
        ImagePicker.openPicker({
            compressImageMaxWidth: 300,
            compressImageMaxHeight: 400,
            compressImageQuality: 0.7,
            cropping: true,
            cropperCircleOverlay: true,
            freeStyleCropEnabled: true,
            avoidEmptySpaceAroundImage: true,
            includeBase64: true,
            mediaType: 'photo',
        }).then(image => {
            validation(image.path);
        });
        setModel(false);
    }
    function selectCamera() {
        ImagePicker.openCamera({
            cropping: true,
            compressImageMaxWidth: 300,
            compressImageMaxHeight: 400,
            compressImageQuality: 0.7,
            cropperCircleOverlay: true,
            freeStyleCropEnabled: true,
            includeBase64: true,
        }).then(image => {
            validation(image.path);
        });
        setModel(false);
    }

    const onSubmit = () => {
        if (imageSource === imgdata) {
            setImageSourceErr('Image is Required!')
        } else {
            initialState.Img = imageSource
            navigation.navigate('Diabetes');
        }
    }

    return (
        <View style={styles.head}>
            <Modal transparent={true} visible={model}>
                <View style={styles.topContainer}>
                    <View style={styles.modelContainer}>
                        <Text style={{ fontSize: 17, color: colors.black }}>
                            Select File from
                        </Text>
                        <TouchableOpacity
                            onPress={async () => await selectImage()}
                            style={{ backgroundColor: 'white', justifyContent: 'center' }}>
                            <Text style={styles.titleTxt}>Choose Image</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={async () => await selectCamera()}
                            style={{ backgroundColor: 'white', justifyContent: 'center' }}>
                            <Text style={styles.titleTxt}>Capture Image</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setModel(!model)}
                            style={{ backgroundColor: 'white', justifyContent: 'center' }}>
                            <Text style={styles.titleTxt}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity onPress={() => setModel(true)}>
                <Image source={{ uri: imageSource }} style={styles.image} />
            </TouchableOpacity>
            <View style={styles.condition2}>
                {imageSourceErr !== '' && (
                    <Text style={styles.condition}>{imageSourceErr}</Text>
                )}
            </View>
            <TouchableOpacity style={styles.btn} onPress={() => onSubmit()}>
                <Text style={styles.font}>GO</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Profilepic

