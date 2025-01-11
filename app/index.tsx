import { Image, StyleSheet, Platform, View } from 'react-native';
import { AppButton } from '@/components/AppButton'
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from "@/components/ui/IconSymbol"
import { ExternalLink } from '@/components/ExternalLink'
import { useState } from 'react'
export default function HomeScreen() {
  const [quote, setQoute] = useState("You don't have to be great to start, but you have to start to be great.");
  return (
    <ParallaxScrollView
      bgImageUrl={`https://image.pollinations.ai/prompt/${encodeURIComponent(quote)}`}
      headerImage={
        <Image
          source={{ uri: `https://image.pollinations.ai/prompt/${encodeURIComponent(quote)}`}}
          style={styles.image}
        />
      }>
      <ThemedView style={styles.container}>
        <ThemedText type="title">
          <View style={styles.quoteIcon}>
            <IconSymbol name="quote.fill" color="#0af2a7" size={34} />
          </View>
          {quote}
        </ThemedText>
        <ThemedText style={styles.advice}>To overcome feelings of tiredness and lack of motivation, start by taking care of your physical and mental well-being. Establish a consistent routine that includes time for rest, exercise, and activities that bring you joy and relaxation. By prioritizing self-care and taking small actions towards your goals, you'll be able to build momentum and develop the habits necessary to achieve greatness.</ThemedText>
      </ThemedView>
      <ThemedView style={styles.buttonContainer}>
        <AppButton buttonStyles={styles.readButton}>
         Read More
       </AppButton>
       <AppButton buttonStyles={styles.nextButton}>
         Got It!
       </AppButton>
      </ThemedView>
      <ThemedView style={{
        marginTop: 20
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
    borderWidth: 2
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
  }
});
