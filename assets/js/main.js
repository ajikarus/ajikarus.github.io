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

  // ScrollTo points
  $('#header').click(function (e) {
    if (e.target.nodeName === 'A') return
    $window.scrollTo('#main', 250)
  })

  $('#main header').click(function (e) {
    if (e.target.nodeName === 'A' || e.target.nodeName === 'IMG') return
    $window.scrollTo('#price', 150)
  })

  $('#price').click(function (e) {
    if (e.target.nodeName === 'A' || e.target.nodeName === 'TH') return
    $window.scrollTo('#main footer', 150)
  })

  $('#main footer').click(function (e) {
    if (e.target.nodeName === 'A') return
    $window.scrollTo('#footer header', 150)
  })

  $('#footer').click(function (e) {
    if (e.target.nodeName === 'A') return
    $window.scrollTo('#header', 150)
  })

  $('#prices').basictable()

  $('#promo').click(function (e) {
    window.location.href = $(this).find('img').attr('src')
  })

  /*
   * Directive by HTML5 UP
   * html5up.net | @ajlkn
   * Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
   */
})(window.jQuery)
