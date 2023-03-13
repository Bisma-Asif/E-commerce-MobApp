import React, { useState, useEffect } from 'react'
import { View,ActivityIndicator,Text,TextInput,TouchableOpacity,ScrollView } from 'react-native'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Brand } from '@/Components'
import { useTheme } from '@/Hooks'
import { useLazyFetchOneQuery } from '@/Services/modules/users'
import { changeTheme } from '@/Store/Theme'
import { Colors } from '@/Theme/Variables'
import { navigate } from '@/Navigators/utils'
const GetStarted = () => {
  
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout } = useTheme()
  const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] = useLazyFetchOneQuery()

  const [userId, setUserId] = useState('9')

  useEffect(() => {
    fetchOne(userId)
  }, [fetchOne, userId])

  const onChangeTheme = ({ theme, darkMode }) => {
    dispatch(changeTheme({ theme, darkMode }))
  }

  return (
    <ScrollView
      style={Layout.fill}
      contentContainerStyle={[
        Layout.fill,
        Layout.justifyContentAround,
        Gutters.smallHPadding,
      ]}
    >

      <View style={[[Layout.colCenter, Gutters.smallHPadding]]}>
        <Brand />
        <Text style={[ Fonts.textCenter, Fonts.grntitleSmall]}>
          SAYLANI WELFARE
        </Text>
        <Text style={[ Fonts.textCenter, Fonts.blutextRegular]}>
          ONLINE MARKET PLACE
        </Text>
     </View>
    
       

      <TouchableOpacity
        style={[Common.button.rounded, Gutters.regularBMargin,{width:'70%',alignSelf:'center'}]}
        onPress={() => navigate('MainApp')}
      >
        <Text style={Fonts.CustomtitleSmall}>Get Started</Text>
      </TouchableOpacity>



    </ScrollView>
  )
}

export default GetStarted
