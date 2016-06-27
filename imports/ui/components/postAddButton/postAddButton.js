import angular from 'angular';
import angularMeteor from 'angular-meteor';

import buttonTemplate from './postAddButton.html';
import modalTemplate from './postAddModal.html';
import { name as PostAdd } from '../postAdd/postAdd';

class PostAddButton {
  constructor($mdDialog, $mdMedia) {
    'ngInject';

    this.$mdDialog = $mdDialog;
    this.$mdMedia = $mdMedia
  }

  open(event) {
    console.log(event);
    this.$mdDialog.show({
      controller($mdDialog) {
        'ngInject';

        this.close = () => {
          $mdDialog.hide();
        }
      },
      controllerAs: 'postAddModal',
      template: modalTemplate,
      targetEvent: event,
      parent: angular.element(document.body),
      clickOutsideToClose: true,
      fullscreen: this.$mdMedia('sm') || this.$mdMedia('xs')
    });
  }
}

const name = 'postAddButton';

export default angular.module(name, [
  angularMeteor,
  PostAdd
]).component(name, {
  template: buttonTemplate,
  controllerAs: name,
  controller: PostAddButton
});
