(function(w,d) {

  var preference = w.localStorage.getItem('mia-language-preference');
  console.log(preference);
  console.log(typeof preference);

  var eng = d.getElementById('mia-english');
  var esp = d.getElementById('mia-spanish');
  var clr = d.getElementById('clear');

  console.log(eng);
  console.log(esp);

  var englishRedirect = 'http://www.miausa.org';
  var spanishRedirect = 'http://es.miausa.org';

  eng.addEventListener('click',function() {
    writeLanguageCookie('english');
    window.location.href = englishRedirect;
  });

  esp.addEventListener('click', function() {
    window.location.href = spanishRedirect;
    writeLanguageCookie('spanish');
  });
  clr.addEventListener('click', function(){
    window.localStorage.removeItem('mia-language-preference');
  })

  var writeLanguageCookie = function(lang) {
    window.localStorage.setItem('mia-language-preference', lang);
  };

  var buildModalContainer = function() {
    var modalWrapper = d.createElement('div');
    modalWrapper.style.width = '100%';
    modalWrapper.style.height = '100%';
    modalWrapper.style.fontSize = '24px';
    modalWrapper.style.backgroundColor = 'rgba(0,0,0,0.5)';
    modalWrapper.id = 'langModalWrapper';

    return modalWrapper;
  }
  var buildModal = function() {
    var modal = d.createElement('div');
    modal.style.width = '50%';
    modal.style.height = '50%';
    modal.id = 'langModal';
    var text = d.createTextNode('Please Select your Language');
    modal.appendChild(text);
    return buildModal;

  }
  var buildModalButtons = function() {
    var mb1 = d.createElement('button');
    mb1.style.width = ""
  }
  var popupLanguageWindow = function() {
    var modalWrapper = buildModalContainer();
    var modal = buildModal();
    modalWrapper.appendChild(modal);


    console.log(modalWrapper);
    d.body.appendChild(modalWrapper);
  }

  if(preference && preference.length && preference.length > 0) {
    writeLanguageCookie(preference);
  }
  else {
    popupLanguageWindow();

  }


})(window, document);
