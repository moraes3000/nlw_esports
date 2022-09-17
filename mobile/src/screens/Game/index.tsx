import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native'
import { TouchableOpacity, View, Image, FlatList } from 'react-native';
import { Entypo } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"

import logoImg from '../../assets/logo-nlw-esports.png'
import { Background } from '../../components/Background';
import { GameParams } from '../../@types/navigations';

import { THEME } from '../../theme';
import { styles } from './styles';
import { Heading } from '../../components/Heading';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';


export function Game() {
  const [duos, setDuos] = useState<DuoCardProps[]>([])

  const route = useRoute();
  const game = route.params as GameParams
  // console.log(game)
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }


  useEffect(() => {
    fetch(`http://192.168.1.11:3333/games/${game.id}/ads`)
      .then(response => response.json())
      // .then(data => console.log(data))
      .then(data => setDuos(data));
  }, [])

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={handleGoBack}
          >
            <Entypo
              name='chevron-thin-left'
              color={THEME.COLORS.CAPTION_300}
            />
          </TouchableOpacity>
          <Image source={logoImg} style={styles.logo} />
          <View style={styles.right}></View>
        </View>


        <Image
          source={{ uri: game.bannerUrl }}
          resizeMode='cover'
          style={styles.cover}
        />

        <Heading
          title={game.title}
          subtitle='Encontre o seu Duo'
        />
        <FlatList
          horizontal
          style={styles.containerList}
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
          data={duos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <DuoCard
              data={item}
              onConnect={() => { }}
            />
          )}
        />

      </SafeAreaView>
    </Background>
  );
}