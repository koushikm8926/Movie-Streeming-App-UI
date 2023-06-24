import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ImageBackground } from 'react-native'

const Home = () => {
  const [background,setBackground] = useState({
    uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9',
    name: 'Avengers: End Game',
    stat: '2019 ‧ Action/Sci-fi ‧ 3h 2m',
    desc: 'After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.'
  })

  return (
   <ScrollView>
    <View style={styles.carouselContentContainer}>
      <View style={{...StyleSheet.absoluteFill,backgroundColor:'#f0f0f0'}}>
        <ImageBackground source={{uri:background.uri}} style={styles.ImageBg} />
      </View>
    </View>
   </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  carouselContentContainer:{
    flex:1,
    backgroundColor:'#000',
    alignItems:'center',
    height:740,
    paddingHorizontal:14,
  }, 
  ImageBg:{
    flex:1,
    height:null,width:null, opacity:1,justifyContent:'flex-start'
  }
})