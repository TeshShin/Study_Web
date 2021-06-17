var Links = {
    setColor:function(color) {
      var alist = document.querySelectorAll('a');
      var i = 0;

      while (i < alist.length) {
        alist[i].style.color = color;
        i = i + 1;
      }
    }
  }
  var Body = {
    setColor:function(color) {
      document.querySelector('body').style.color = color;
    },
    setBackgroundColor:function(color) {
      document.querySelector('body').style.backgroundColor = color;
    },
    setBorderColor:function(color) {
      document.querySelector('body').style.borderColor = color;
    }
  }
  function nightDayHandler(self) {
    if(self.value === 'night'){
      Body.setBackgroundColor('black');
      Body.setColor('white');
      Body.setBorderColor('white');
      self.value = 'day';

      Links.setColor('lightgreen');
    } else{
      Body.setBackgroundColor('white');
      Body.setColor('black');
      Body.setBorderColor('black');
      self.value = 'night';

      Links.setColor('mediumaquamarine');
    }
  }
