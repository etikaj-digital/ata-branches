
  document.querySelectorAll('a[data-tab]').forEach(function(link){
    console.log('Adding listener to ',link);
    link.addEventListener('click', changeTabs);
  });

  function changeTabs(e){

    e.preventDefault();

    var src = e.srcElement;

    // if target already active then ignore
    if (src.parentNode.className.indexOf('is-active') != -1) return;

    // hide current active tab
    var el = document.querySelector('div.tabs>ul>li.is-active');
    el.className = el.className.replace('is-active','');
    el = document.querySelector('div.tab.is-open');
    el.className = el.className.replace('is-open','');

    // show new tab
    src.parentNode.className = src.parentNode.className + ' is-active';
    el = document.querySelector('div#' + src.getAttribute('data-tab'));
    el.className = el.className + ' is-open';

    return false;
  }
