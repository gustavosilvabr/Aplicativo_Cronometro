import React, { Component } from 'react';
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class App extends Component{
  
  constructor(props){
    super(props);
    this.state={
      numero:0,
      text:'vai',
      ultimo:null,
    };
    //variavel do timer do relogio
    this.timer = null;

    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
};


vai(){
  if(this.timer != null){
    //aqui vai parar o timer
    clearInterval(this.timer);
    this.timer = null;
     this.setState({text:'vai'})
  }else{
   this.timer = setInterval(()=>{
      this.setState({numero:this.state.numero + 0.1})
    },100);
    this.setState({text:'parar'})
  };
};

limpar(){
  clearInterval(this.timer);
  this.timer = null;
  this.setState({
    ultimo:this.state.numero,
    numero:0,
    text:'vai'});
};


  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          hidden={false}
        />
        <Text style={styles.textTitulo}>CRONOMETRO 1.0</Text>
        <View style={styles.AreaTextoBotao}>
          <Image style={styles.img} source={require('./cronometro.png')} />
          <Text style={styles.textCronometro}>{this.state.numero.toFixed(1)}</Text>
          <View style={styles.botaoArea}>

            <TouchableOpacity style={styles.botao} onPress={this.vai}>
              <Text style={styles.textBotao}>{this.state.text}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao} onPress={this.limpar}>
              <Text style={styles.textBotao}>limpar</Text>
            </TouchableOpacity>
        

          </View>
          <View style={styles.areaUltimo}>
              <Text style={styles.textoUltimo}>
               {this.state.ultimo > 0  ?'Ultimo tempo: ' + this.state.ultimo.toFixed(1) +'s' : '' }</Text>
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    strecher:true,
    flex: 1,
    backgroundColor: '#297c89',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height:'100%',
  },
  textTitulo: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    borderWidth: 1.5,
    padding: 10,
    borderRadius: 10,
    marginTop:10,
  },
  img: {
    marginVertical: 20,
  },
  AreaTextoBotao: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoArea: {
    width: '100%',
    flexDirection: 'row',
    gap: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -80,
    padding: 10,
  },
  textCronometro: {
    color: 'white',
    fontSize: 70,
    fontWeight: 'bold',
    position: 'static',
    zIndex: 1,
    top: -185,
  },
  botao: {
    borderWidth: 5,
    borderRadius: 20,
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },

  textBotao: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black'
  },
  areaUltimo:{

  },
  textoUltimo:{
     fontSize:25,
     fontStyle:'italic',
     color:'white'
  }
});