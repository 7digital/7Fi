SevenFi.main = function main() {
  SevenFi.getPath('mainPage.mainPane').append() ;

  // Step 2. Set the content property on your primary controller.
  // This will make your app come alive!

  // TODO: Set the content property on your primary controller
  // ex: SevenFi.contactsController.set('content',SevenFi.contacts);

} ;

function main() { SevenFi.main(); }
; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('seven_fi');