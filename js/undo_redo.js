
const undoBtn = document.getElementById('jsUndo');
const redoBtn = document.getElementById('jsRedo');

canvas.on('object:added',function(){
  if(!isRedoing){
    h = [];
  }
  isRedoing = false;
});

var isRedoing = false;
var h = [];
function undo(){
  if(canvas._objects.length>0){
   h.push(canvas._objects.pop());
   canvas.renderAll();
  }
}
function redo(){
  
  if(h.length>0){
    isRedoing = true;
   canvas.add(h.pop());
  }
}
undoBtn.addEventListener('click',undo);
redoBtn.addEventListener('click',redo);