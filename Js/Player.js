class Player {
    constructor(){
      this.index = null;
      this.distance = 0;
      this.name = null;
  
      this.rank = null; 
      this.allPlayers = null;
    }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }  

    update(){
      var playerIndex = "player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
       // distance:this.distance
      });
    }
  
    static getPlayerInfo(){
      var playerInfoRef = database.ref('player');
      playerInfoRef.on("value",(data)=>{
        player = data.val();
      })
    }
  
    playerInfo(){
      database.ref('player').on("value",(data)=>{
        this.players = data.val();
      })
    }
  
    static updatePlayers(){
      database.ref('/').update({
        players: null
      })
    }
  }