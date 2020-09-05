$('.list-btn button').click(function(){
	$(this).addClass('current')
	$('.list-btn button').not($(this)).removeClass('current')
})


$('.btn-dinda').click(function(){
	$('.rani').addClass('actived')
	$('.dinda').addClass('actived')
	$('.agas').removeClass('actived')
	$('.adrian').removeClass('actived')
	$('.wahbud').removeClass('actived')

	$('.kristina').removeClass('actived')
	$('.pujayana').removeClass('actived')
	$('.jaka').removeClass('actived')
	$('.mankz').removeClass('actived')
})

$('.btn-rani').click(function(){
	$('.rani').removeClass('actived')
	$('.dinda').removeClass('actived')
	$('.agas').removeClass('actived')
	$('.adrian').removeClass('actived')
	$('.wahbud').removeClass('actived')

	$('.kristina').removeClass('actived')
	$('.pujayana').removeClass('actived')
	$('.jaka').removeClass('actived')
	$('.mankz').removeClass('actived')
})

$('.btn-agas').click(function(){
	$('.agas').addClass('actived')
	$('.rani').addClass('actived')
	$('.dinda').removeClass('actived')
	$('.adrian').removeClass('actived')
	$('.wahbud').removeClass('actived')

	$('.kristina').removeClass('actived')
	$('.pujayana').removeClass('actived')
	$('.jaka').removeClass('actived')
	$('.mankz').removeClass('actived')
})

$('.btn-adrian').click(function(){
	$('.adrian').addClass('actived')
	$('.agas').removeClass('actived')
	$('.rani').addClass('actived')
	$('.dinda').removeClass('actived')
	$('.wahbud').removeClass('actived')

	$('.kristina').removeClass('actived')
	$('.pujayana').removeClass('actived')
	$('.jaka').removeClass('actived')
	$('.mankz').removeClass('actived')
})

$('.btn-wahbud').click(function(){
	$('.adrian').removeClass('actived')
	$('.agas').removeClass('actived')
	$('.rani').addClass('actived')
	$('.dinda').removeClass('actived')
	$('.wahbud').addClass('actived')

	$('.kristina').removeClass('actived')
	$('.pujayana').removeClass('actived')
	$('.jaka').removeClass('actived')
	$('.mankz').removeClass('actived')
})

$('.btn-pujayana').click(function(){
	$('.adrian').removeClass('actived')
	$('.agas').removeClass('actived')
	$('.rani').addClass('actived')
	$('.dinda').removeClass('actived')
	$('.wahbud').removeClass('actived')

	$('.kristina').removeClass('actived')
	$('.pujayana').addClass('actived')
	$('.jaka').removeClass('actived')
	$('.mankz').removeClass('actived')
})

$('.btn-kristina').click(function(){
	$('.adrian').removeClass('actived')
	$('.agas').removeClass('actived')
	$('.rani').addClass('actived')
	$('.dinda').removeClass('actived')
	$('.wahbud').removeClass('actived')

	$('.kristina').addClass('actived')
	$('.pujayana').removeClass('actived')
	$('.jaka').removeClass('actived')
	$('.mankz').removeClass('actived')
})