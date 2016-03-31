(function(w,d) {

  var preference = w.localStorage.getItem('mia-language-preference');

  var englishRedirect = 'http://www.miausa.org';
  var spanishRedirect = 'http://es.miausa.org';

  var writeLanguageCookie = function(lang) {
    window.localStorage.setItem('mia-language-preference', lang);
  };

  var buildModalWrapper = function() {
    var modalWrapper = d.createElement('div');
    modalWrapper.style.width = '100%';
    modalWrapper.style.height = '100%';
    modalWrapper.style.fontSize = '24px';
    modalWrapper.style.paddingTop = "100px";
    modalWrapper.style.backgroundColor = 'rgba(0,0,0,0.2)';
    modalWrapper.id = 'langModalWrapper';

    return modalWrapper;
  }

  var buildModal = function() {
    var modal = d.createElement('div');
    modal.style.maxWidth = "300px";
    modal.style.margin = "auto";
    modal.style.padding = "20px";
    modal.style.borderRadius = "15px 0px 15px 0px";
    modal.style.border = "1px solid #bcbcbc";
    modal.style.backgroundColor = "#f9f9f9";
    modal.id = 'langModal';

    return modal;
  }

  var buildModalText = function(text) {
    var mt = d.createElement('div');
    mt.style.fontFamily = "Verdana,Geneva,sans-serif";
    mt.style.textAlign = "center";
    mt.style.marginBottom = "10px";
    mt.style.color = "#515151";
    mt.fontSize = "2rem";
    mt.appendChild(d.createTextNode(text));

    return mt;
  }

  var buildModalButton = function(language) {
    var mb = d.createElement('button');
    mb.style.width = "100px";
    mb.style.backgroundColor = "#FFFFFF";
    mb.style.fontSize = "18px";
    mb.style.border = "1px solid #515151";
    mb.style.display = "block";
    mb.style.margin = "10px auto";
    mb.style.padding = "10px";
    mb.style.color = "#ff3233"
    mb.style.cursor = "pointer";
    mb.style.fontFamily = "Helvetica Neue";
    mb.id = "mia-" + language;
    mb.appendChild(d.createTextNode(language));

    return mb;
  }

  var popupLanguageWindow = function() {
    var modalWrapper = buildModalWrapper();
    var modal = buildModal();
    d.body.appendChild(modalWrapper);
    mw = d.getElementById('langModalWrapper');
    mb1 = buildModalButton('English');
    mb2 = buildModalButton('Espanol');
    mt = buildModalText('Please select your language');

    mw.appendChild(modal);

    mb = d.getElementById('langModal');

    mb.appendChild(mt);
    mb.appendChild(mb1);
    mb.appendChild(mb2);
  }

  var addClickListeners = function() {
    var eng = d.getElementById('mia-English');
    var esp = d.getElementById('mia-Espanol');

    eng.addEventListener('click',function() {
      writeLanguageCookie('english');
      window.location.href = englishRedirect;
    });

    esp.addEventListener('click', function() {
      window.location.href = spanishRedirect;
      writeLanguageCookie('spanish');
    });
  }
  
  var init = function() {
    if(preference && preference.length && preference.length > 0) {
      writeLanguageCookie(preference);
    }
    else {
      popupLanguageWindow();
      addClickListeners();
    }
  }

  init();

})(window, document);
