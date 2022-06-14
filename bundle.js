const { createApp } = Vue

  createApp({
    data() {
      return {
	rnd : 0,
        combo:[
          'ltsui519@gmail.com:melt8238',
          'nick11951@yahoo.com:csi3167',
          'cathrinebk@gmail.com:sus1sig',
          'maiduybao@yahoo.com:duy1183',
          'clherbs69@gmail.com:kach0134',
          'mybutifultjs@yahoo.com:Tristan1T',
          'mantrini11@hotmail.com:Balkywin1',
          'nataliefichera@yahoo.com:chester143',
          'dayana.kallyne@uol.com.br:060808ff'
        ],
        mail: '',
        pass: ''
      }
    },
    methods:{
      gen(e){
        var x = this.combo[Math.floor(Math.random() * this.combo.length)];
        x = x.split(':');
        this.mail = x[0];
        this.pass = x[1];
        e.preventDefault();
      }
    }
    
  }).mount('#app')