export default function removeOpenClose() {
  const backMenuBtn = $(document).find('.back-menu');
  const openers = $(document).find('.open-close');

  backMenuBtn.on('click', function () {
    console.log(typeof openers);
    openers.removeClass('active');
    $('.banner').style.backgroundColor = 'red';
  });
}
