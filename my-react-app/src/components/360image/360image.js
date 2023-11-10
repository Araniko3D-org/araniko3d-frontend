// Import necessary modules
import React from "react";
import { AppRegistry, View, Image } from "react-360";

// Create a React component
class Your360ImageComponent extends React.Component {
  render() {
    return (
      <View>
        <Image
          style={{
            width: 1000, // Adjust width as needed
            height: 600, // Adjust height as needed
          }}
          source={{ uri: "path/to/your/360-image.jpg" }}
        />
      </View>
    );
  }
}

// Register the component
AppRegistry.registerComponent(
  "Your360ImageComponent",
  () => Your360ImageComponent
);
