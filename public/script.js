var addBtn = $(".add-btn")
var input = $(".input-box")
var clearBtn = $(".clear-btn")
let flag = 0
deleteBtn = ' <span class="delete-btn glyphicon glyphicon-trash"></span>'
checkBtn = '<span class="check-btn glyphicon glyphicon-ok"></span>'

$(".add-form").submit(function(e){
  e.preventDefault()
  if(flag === 1){
      $('.add-items').empty()
      flag=0
  }
  if($(".input-box").val() != "" && flag===0){
  e.preventDefault()
  $('.list').append('<li>'+ input.val()+ deleteBtn +checkBtn+'</li>')
  input.val('')

  $('.delete-btn').click(function(){
    var p = $(this).parent()
    p.fadeOut(function(){
      p.remove()
    })
  })
  $('.check-btn').click(function(){
    var p = $(this).parent()
    p.fadeOut(1000 ,function(){
      $('.completed-tasks-list').append(p)
      p.fadeIn()
    })
  })
}})

clearBtn.click(function(){
  $('ul').empty()
  $('.add-items').html(`
    <h1>
    <i style="font-size: 3em;" class="fas fa-box-open"></i>
    <div>Hurray!</div>
    </h1>
     You're done for today!`)
     flag = 1
})

$('.dark-mode-theme').click(function(){
  $('body').toggleClass("dark")
  const temp = $('.dark-mode-theme button span').html()
  $('.dark-mode-theme button span').html(temp === 'Dark' ? 'Light': 'Dark')
})
