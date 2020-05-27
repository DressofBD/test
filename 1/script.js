$(":input").click(function (e) {
  if(e.shiftKey)  {
    var input = this;

    if(input.selectionEnd === input.selectionStart) {
      input.setSelectionRange(input.selectionStart, input.selectionStart)
      return;
    }
    
    if(input.selectionDirection === 'forward') {
      input.setSelectionRange(input.selectionEnd, input.selectionEnd)
      return;
    }
    if(input.selectionDirection === 'backward') {
      input.setSelectionRange(input.selectionStart, input.selectionStart)
      return;
    }
  }
});

$(':input').mousedown(function(e) {
  if(e.shiftKey) {
    $(this).addClass('selection');
  }
});

$(':input').mouseup(function(e) {
  if(e.shiftKey) {
    $(this).removeClass('selection');
  }
});

$(":input").focus(function (e) {
    var input = this;
    input.setSelectionRange(input.value.lenght - 1, input.value.lenght - 1);
});