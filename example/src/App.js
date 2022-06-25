import * as React from 'react';

import { ScrollView, StyleSheet } from 'react-native';
import { WebpImageView } from 'webp-image';

export default function App() {
  return (
    <ScrollView style={styles.container} horizontal>
      <WebpImageView
        uri="https://pris-media.s3.ap-southeast-1.amazonaws.com/images/f06eb142-483b-4983-a5cf-e1e87b7b9860.webp"
        style={styles.box}
      />
      <WebpImageView
        uri="https://pris-media.s3.ap-southeast-1.amazonaws.com/images/59a44373-0b6f-4109-93b8-1250c229abb3.webp"
        style={styles.box}
      />
      <WebpImageView
        uri="https://pris-media.s3.ap-southeast-1.amazonaws.com/images/aac2ae0b-aade-44da-a4f8-e22adbce479c.webp"
        style={styles.box}
      />
      <WebpImageView
        uri="https://pris-media.s3.ap-southeast-1.amazonaws.com/images/70f91048-7505-4b33-8aec-45d22512a586.webp"
        style={styles.box}
      />
      <WebpImageView
        uri="https://pris-media.s3.ap-southeast-1.amazonaws.com/images/9351047a-06ba-4725-a1b8-294de8ca9532.webp"
        style={styles.box}
      />
      <WebpImageView
        uri="https://pris-media.s3.ap-southeast-1.amazonaws.com/images/fa31c37f-4519-4210-93ba-2bc8eccb6c2e.webp"
        style={styles.box}
      />
      <WebpImageView
        uri="https://pris-media.s3.ap-southeast-1.amazonaws.com/images/209f69bd-e97b-437b-982f-8ac6d5551622.webp"
        style={styles.box}
      />
      <WebpImageView
        uri="https://pris-media.s3.ap-southeast-1.amazonaws.com/images/7d4f060f-ef33-4f33-b26e-ba480d8f1120.webp"
        style={styles.box}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    paddingHorizontal: 12,
  },
  box: {
    width: 90,
    height: 90,
    marginVertical: 20,
    overflow: 'hidden',
  },
});
