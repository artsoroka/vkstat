var maxRunning = 3; 

var queue = []; 
var run = function(fn){
  fn(); 
};

setInterval(function(){
  for(var i=0; i < maxRunning; i++){
    if( queue.length > 0) run(queue.shift()); 
  }
}, 1000); 

module.exports = function(tasks){
	queue = queue.concat(tasks); 
}; 