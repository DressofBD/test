// Submit button disable
let inp = $('[type=text]'),
    btn = $('[type=submit]')
btn.prop('disabled', true)

inp.on('input', () => {
  let empty = []
  inp.map(v => empty.push(inp.eq(v).val()))
  btn.prop('disabled', empty.includes(''))
})


// color according to number
$.fn.colorize = function () {
   return this.each(function() {
      var $this = $(this), number = $this.text();
      $this.css({color: number < 25 ? "red"
                      : number < 50 ? "#df7300"
                      : number < 75 ? "#577700"
                      : "darkgreen"});
   });
};
$(".s-block").colorize();


$(function() {
  $('.top-navs a').click(function() {

    // Check for active
    $('.top-navs a').removeClass('active');
    $(this).addClass('active');

    // Display active tab
    let currentTab = $(this).attr('href');
    $('.tabs-content div.tab-desc').hide();
    $(currentTab).show();

    return false;
  });
});



