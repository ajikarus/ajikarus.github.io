;(function ($) {
  const $window = $(window)
  const $body = $('body')

  const skel = window.skel || function () {
    throw new Error('Skel not defined')
  }

  skel.breakpoints({
    wide: '(max-width: 1680px)',
    normal: '(max-width: 1280px)',
    narrow: '(max-width: 980px)',
    narrower: '(max-width: 840px)',
    mobile: '(max-width: 736px)',
    mobilep: '(max-width: 480px)'
  })

  // Disable animations/transitions until the page has loaded.
  $body.addClass('is-loading')

  $window.on('load', function () {
    $body.removeClass('is-loading')
  })

  // Fix: Placeholder polyfill.
  $('form').placeholder()

  // Prioritize "important" elements on narrower.
  skel.on('+narrower -narrower', function () {
    $.prioritize(
      '.important\\28 narrower\\29',
      skel.breakpoint('narrower').active
    )
  })

  $('#header').on('click', function (e) {
    e.preventDefault()
    $window.scrollTo('#main', 250)
  })
  $('#main header').click(function () {
    $window.scrollTo('#price', 150)
  })
  $('#main footer').click(function () {
    $window.scrollTo('#footer header', 150)
  })
  $('#footer').click(function () {
    $window.scrollTo('#header', 150)
  })
  /*
  Directive by HTML5 UP
  html5up.net | @ajlkn
  Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
  */
})(window.jQuery)
