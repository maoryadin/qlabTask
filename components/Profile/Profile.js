import React from 'react';
import { 
        View, 
        Text, 
        Image, 
        ScrollView, 
        SafeAreaView, 
        Dimensions, 
        TouchableOpacity ,
        Platform
} from 'react-native';

import profileHeader from '../../assets/profile/profileHeader.png';
import ProfileRow from './ProfileRow/ProfileRow';
import profilePicture from '../../assets/profile/profilePicture.png';
import Gender from './Gender/Gender'
import Label from './ProfileRow/Label';
import { colors, fonts } from '../../assets/theme';
import Map from '../MapView'
const {height,width} = Dimensions.get('window');

const ProfileHeader = () => {
    return (
        <View 
            style={{
                backgroundColor: colors.cream,
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 30,
            }}>
            <Image 
                source={profileHeader} 
                style={{
                }} 
            />
        </View>
    );
};

const ProfilePicture = () => {
    return (
        <View 
            style={{
                marginBottom: 16,
            }}>
            <Label 
            value={'Profile Picture'}
            style={{
                fontSize: fonts.smallTitle.fontSize,
                lineHeight: fonts.smallTitle.lineHeight,
                fontWeight: fonts.smallTitle.fontWeight,
                color: colors.black,
                fontFamily: fonts.smallTitle.fontFamily,

            }}
            />
            <Image 
                source={profilePicture} 
                style={{
                    marginTop: 8,
                }} 
            />
        </View>
    );
};

const CloseProfileButton = ({ onClose }) => {
    return (
        <TouchableOpacity 
            onPress={onClose} 
            style={{
                backgroundColor: colors.brown,
                padding: 10,
                borderRadius: 5,
                marginTop: 20,
                alignSelf: 'center',
            }}>
            <Text 
                style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 16,
                }}>
                Close Profile
            </Text>
        </TouchableOpacity>
    );
};

export const Profile = ({ rowData, onClose }) => {
    return (
        <SafeAreaView>
            <ScrollView  
                style={{
                    width: width,
                }} 
                contentContainerStyle={{
                }}>
                <ProfileHeader />
                <View 
                    style={{
                        backgroundColor: 'white',
                        width: '100%',
                        paddingHorizontal: 30,
                    }}>
                    <View 
                        style={{
                            marginTop: 28,
                        }}>
                        <Text 
                            style={{
                                fontSize: fonts.mainHeading.fontSize,
                                lineHeight: fonts.mainHeading.lineHeight,
                                fontWeight: fonts.mainHeading.fontWeight,
                                fontWeight: fonts.mainHeading.fontWeight,
                                fontFamily: fonts.mainHeading.fontFamily,
                                color: colors.brown,
                                marginBottom: 20,
                            }}>
                            My Profile
                        </Text>
                    </View>
                    <ProfilePicture />
                    <ProfileRow label="First Name" value={rowData.firstName} /> 
                    <ProfileRow label="Last Name" value={rowData.lastName} />
                    <ProfileRow label="Email" value={rowData.email} />
                    <ProfileRow label="Phone" value={rowData.phone} />
                    <Gender gender={rowData.gender}/>
                    {
                        (Platform.OS === 'ios') ?
                            <Map lat={rowData.latitude} long={rowData.longitude} />
                        : null
                        
                    }
                </View>
            </ScrollView>
            <CloseProfileButton onClose={onClose} />

        </SafeAreaView>
    );
};
