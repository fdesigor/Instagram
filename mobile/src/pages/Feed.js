import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import api from '../services/api.js';

import camera from '../assets/camera.png';
import more from '../assets/more.png';
import like from '../assets/like.png';
import comment from '../assets/comment.png';
import send from '../assets/send.png';

export default class Feed extends Component {
  
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <TouchableOpacity style={{ marginRight: 20 }} onPress={() => navigation.navigate('New')} >
        <Image source={camera} />
      </TouchableOpacity>
    ),
  });

  state = {
    feed: [],
  };

  async componentDidMount(){
      // this.registerToSocket();

      const response = await api.get('posts');

      this.setState({ feed: response.data });
  }

  render() {
    return (
      <View>
        <FlatList 
          data={this.state.feed}
          keyExtractor={post => post._id}
          renderItem={({ item }) => (
            <View>
              <View>
                <View>
                  <Text>{item.author}</Text>
                  <Text>{item.place}</Text>
                </View>

                <Image source={more} />
              </View>

              <Image source={{ uri: `http://10.0.0.105:3333/${item.image}` }} />

              <View>
                <View>
                  <TouchableOpacity>
                    <Image source={like} />
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Image source={comment} />
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Image source={send} />
                  </TouchableOpacity>
                </View>

                <Text>{item.likes} curtidas</Text>
                <Text>{item.description}</Text>
                <Text>{item.hashtags}</Text>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}
