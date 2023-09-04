import { View,Button,Image,Text ,Pressable} from "react-native";

const logoImage = require("./assets/adaptive-icon.png");
export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button
      title= "Press"
      onPress={()=>{console.log("Button pressed")}}
      color='midnightblue'
      />
<Pressable onPress={()=>{console.log("Image Pressed")}}>

<Image source={logoImage} style={{ width: 300, height: 300 }} />
</Pressable>
<Pressable onPress={()=>{console.log("Text Pressed")}}>
<Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis turpis eu magna convallis ultricies. Proin tempor orci non bibendum commodo. Quisque imperdiet ex ut lectus accumsan, vel auctor nisi ultricies. Mauris sem lorem, tincidunt quis libero sed, eleifend porta augue. Ut accumsan dignissim eros, eget auctor quam porta aliquam. Nulla varius elit vel tempor lacinia. Pellentesque eu elit at nulla efficitur ornare in sed ligula. Ut erat nibh, egestas non lacus ac, tristique cursus ipsum. Sed sed lacus metus. Donec mauris sapien, finibus in velit sed, elementum ullamcorper metus. Nulla facilisi. Curabitur congue fermentum diam id rutrum. Nam quis ipsum cursus, placerat neque vitae, sodales diam. In accumsan nunc in arcu ullamcorper, et fermentum eros tincidunt. Integer in lorem vel sem faucibus mollis nec a augue.

c lectus vitae finibus. Aenean tincidunt, tortor et rutrum rhoncus, mauris ex rutrum nisi, non varius tellus leo sit amet augue. Sed in turpis id quam vulputate ullamcorper in non dolor. Maecenas ut sollicitudin odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque at ipsum id arcu ultrices scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque rhoncus, augue ac molestie feugiat, sem magna faucibus ante, a rutrum sapien nulla in tortor. Suspendisse laoreet ut nisl et euismod. Nullam faucibus sollicitudin varius. Ut laoreet mattis mauris in tristique.

Maecenas iaculis volutpat orci non consequat. Praesent consequat rutrum nulla, quis congue augue rutrum scelerisque. Etiam ultrices bibendum molestie. Curabitur non dictum arcu. Donec sit amet tellus vel nulla molestie tristique. Proin at sem tellus. Integer non purus vitae elit feugiat fermentum. Pellentesque ac tempus metus. Sed gravida at ipsum a interdum. Donec elit magna, molestie at augue ac, blandit elementum velit. Suspendisse leo velit, fermentum et mollis eget, tincidunt consequat dolor. Sed sed sollicitudin mi, nec blandit est. Nunc feugiat dolor ac tortor bibendum congue. Cras lobortis semper ante, nec elementum turpis auctor vel. Curabitur eleifend lobortis ornare. Suspendisse sed lectus at lectus commodo sollicitudin quis ut velit.

Mauris rutrum commodo tortor. Integer eget risus aliquam, rutrum magna non, lacinia nulla. In ac pretium arcu, sit amet consectetur augue. Etiam hendrerit dictum porttitor. Nullam tristique id est a commodo. Pellentesque lobortis id lectus a maximus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum molestie dapibus ipsum.

Nullam eu odio sit amet tellus sodales iaculis sed a nibh. Etiam eget euismod ipsum, quis faucibus purus. Duis molestie ornare augue, nec mattis metus maximus id. Aliquam aliquam mi et nulla rutrum, et viverra mi luctus. Suspendisse nisl nisl, eleifend nec ex id, pretium sollicitudin augue. Quisque gravida, massa sit amet vehicula mattis, sem enim placerat nisl, ut commodo odio eros ac sem. Morbi a volutpat erat, sed pretium elit. Pellentesque elementum feugiat rhoncus. Nullam sed justo sem. Fusce aliquet non nulla id sodales. Nulla massa arcu, luctus vel mattis eget, ornare eu leo.

Integer ac neque sapien. Morbi venenatis massa id interdum laoreet. In hac habitasse platea dictumst. Praesent sed sollicitudin purus. Vestibulum quis blandit arcu. Sed tincidunt bibendum lorem at feugiat. Maecenas pharetra, urna vitae imperdiet iaculis, magna diam sagittis velit, vel varius tortor nibh vitae felis. Duis at elit ornare, placerat risus vitae, viverra nunc. Sed arcu ligula, aliquet a rutrum vitae, semper sit amet sem. Vestibulum arcu diam, facilisis a ornare ut, mattis a lectus. Fusce odio tellus, posuere nec dui sed, rutrum efficitur lorem. Sed sollicitudin quam et turpis dictum congue.

Nam fringilla nec nibh eget placerat. Morbi et dignissim diam, vel sollicitudin nibh. Ut ultrices rhoncus tortor. In hac habitasse platea dictumst. Nam vehicula ex ac pulvinar posuere. Sed sem urna, laoreet a varius in, consectetur non libero. Nam non bibendum felis, et pharetra mi. Cras hendrerit at lectus at tincidunt. Vestibulum at lorem vulputate, venenatis neque eu, volutpat ipsum. Nam tincidunt, nunc non commodo pellentesque, leo sem pellentesque felis, convallis feugiat sem odio eu leo.

Maecenas efficitur libero magna, vehicula ultricies tellus porttitor et. Morbi molestie sit amet ex nec lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam metus libero, accumsan quis dictum et, varius eget erat. Proin justo libero, gravida iaculis arcu sodales, pretium ultrices tellus. Phasellus pellentesque dictum nibh, ut facilisis lorem semper in. Nullam euismod enim lacus, eu facilisis lorem sodales ac. Sed purus nunc, vulputate in mollis id, rutrum eu libero. In arcu nibh, mollis non egestas at, pellentesque sit amet libero. Ut feugiat turpis non diam hendrerit malesuada. Proin euismod velit eu facilisis pharetra. Pellentesque vestibulum dolor ac egestas scelerisque. Duis eleifend accumsan magna at sollicitudin. Integer pulvinar augue metus, nec volutpat lorem feugiat ac. Donec in augue metus. Ut elementum tincidunt ante at semper.

trum sapien non magna gravida, et facilisis nisl tristique. Maecenas eu lectus fringilla, malesuada enim quis, vulputate elit. Aliquam dignissim velit ut libero semper luctus. Morbi eget leo fringilla, lobortis elit fermentum, vehicula urna. Ut eget gravida mauris. Etiam congue, dolor et fermentum posuere, tortor sem elementum nisi, vel posuere augue nisl a dolor. Nulla gravida eu sapien et mollis. Fusce mollis mauris gravida, commodo metus id, sagittis turpis. Phasellus tincidunt orci eu odio mollis rhoncus. Suspendisse imperdiet felis quis placerat mattis. Sed id sagittis enim. Cras quis est a libero dapibus pretium.

Generated 50 paragraphs, 4528 words, 30540 bytes of Lorem Ipsum

      </Text>
      </Pressable>
    </View>
  );
}
