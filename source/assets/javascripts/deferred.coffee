#= require _zepto

$('.question').on 'click', ->
  $(this)
    .find('.answer')
    .toggleClass('show')

$('.answer').on 'click', 'a', (e) ->
  e.stopPropagation()
