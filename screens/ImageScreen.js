import * as FileSystem from "expo-file-system";
import React, { useCallback, useState } from "react";
import { Image, ScrollView } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

export default function ImagesScreen() {
  const [imagesURI, setImagesURI] = useState([]);
  useFocusEffect(
    useCallback(() => {
      (async () => {
        const images = await FileSystem.readDirectoryAsync(FileSystem.cacheDirectory);
        setImagesURI(images);
      })();
    }, [])
  );

  console.log("VERIFICATION DU REMPLISSAGE : imagesURI => length = ", imagesURI.length);

  return imagesURI.length > 0 ? (
    <Image
      style={{
        flex: 1,
        resizeMode: "cover",
        height: 500,
      }}
      source={{
        uri: FileSystem.cacheDirectory + imagesURI[0],
      }}
    />
  ) : null;
}
