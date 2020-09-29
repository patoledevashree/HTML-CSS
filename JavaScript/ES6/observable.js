const obsever = {
    next: function(value){
        console.log(value);
    },
    error : function(error){
        console.log(error);
    },
    completed: function(){
        console.log('Completed')
    }
}

Rx.Observable.create(function(obs){
    obs.next('A value')
})
.subscribr(obsever);