import { Image, StyleSheet, Platform, View, ActivityIndicator } from 'react-native';
import { AppButton } from '@/components/AppButton'
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from "@/components/ui/IconSymbol"
import { ExternalLink } from '@/components/ExternalLink'
import { useState } from 'react'
import { useQuote } from "@/hooks/useQuotes"

export default function HomeScreen() {
  const { quote, loading, error, getQuote } = useQuote();
  
  if(loading) {
    return (
    <ThemedView style={styles.loadingContainer}>
      <ActivityIndicator color="#0af2a7" size="large" />
    </ThemedView>
    )
  }
  
  return (
    <ParallaxScrollView
      bgImageUrl={quote?.image}
      headerImage={
        <Image
          source={{ uri: quote?.image }}
          style={styles.image}
        />
      }>
      <ThemedView style={styles.container}>
        <ThemedText type="title">
          <View style={styles.quoteIcon}>
            <IconSymbol name="quote.fill" color="#0af2a7" size={34} />
          </View>
          {quote?.quote}
        </ThemedText>
        <ThemedText style={styles.advice}>{quote?.advice}</ThemedText>
      </ThemedView>
      <ThemedView style={styles.buttonContainer}>
        <AppButton buttonStyles={styles.readButton}>
         Read More
       </AppButton>
       <AppButton onPress={() => getQuote()} buttonStyles={styles.nextButton}>
         Got It!
       </AppButton>
      </ThemedView>
      <ThemedView style={{
        marginTop: 20,
        marginBottom: 20
      }}>
        <ThemedText style={{
          fontSize: 13,
          color: "#c5c5c5"
        }}>App made with 💙 by <ExternalLink style={{
          color: "#0af2a7",
          fontSize: 13
        }} href="https://janlibydelacosta.vercel.app">libyzxy0</ExternalLink>.</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
    marginBottom: 8,
    flex: 1,
    alignItems: "center",
  },
  image: {
    height: 178,
    width: 290,
    borderRadius: 20,
    borderColor: "#0af2a7",
    borderWidth: 1.5
  },
  advice: {
    marginTop: 20
  },
  quoteIcon: {
    transform: [{ scaleX: -1 }]
  },
  nextButton: {
    width: 130,
    padding: 11,
    marginTop: 15,
    margin: 5
  },
  readButton: {
    width: 130,
    padding: 11,
    marginTop: 15,
    backgroundColor: "transparent",
    borderWidth: 1.5,
    borderColor: "#0af2a7",
    margin: 5,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center'
  }
});
