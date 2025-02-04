import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function ImageCarousel({ images }: { images: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const onViewRef = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    }
  });

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  return (
    <View
      style={{
        alignItems: "center",
        width: width,
        height: height * 0.3,
        backgroundColor: "white",
      }}
    >
      <FlatList
        data={images}
        renderItem={(item) => (
          <Image
            source={{ uri: item.item }}
            style={{
              width: width * 0.5,
              height: height * 0.2,
              resizeMode: "stretch",
              marginTop: 30,
            }}
          ></Image>
        )}
        style={{ width: width * 0.5, height: height * 0.25 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width * 0.5}
        snapToAlignment="center"
        decelerationRate={"fast"}
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onViewRef.current}
      ></FlatList>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 7 }}>
        {images.map((_, index) => (
          <View
            key={index}
            style={{
              width: 10,
              height: 10,
              borderRadius: 50,
              backgroundColor: activeIndex === index ? "#5d3ebd" : "#c9c9c9",
            }}
          ></View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
