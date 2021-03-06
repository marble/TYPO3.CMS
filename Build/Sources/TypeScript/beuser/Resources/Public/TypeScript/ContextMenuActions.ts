/*
 * This file is part of the TYPO3 CMS project.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * The TYPO3 project - inspiring people to share!
 */

/**
 * Module: TYPO3/CMS/Beuser/ContextMenuActions
 *
 * JavaScript to handle permissions module from context menu
 * @exports TYPO3/CMS/Beuser/ContextMenuActions
 */
class ContextMenuActions {
  /**
   * Open permission module for given uid
   *
   * @param {string} table
   * @param {int} uid of the page
   */
  public openPermissionsModule = (table: string, uid: number): void => {
    if (table === 'pages') {
      top.TYPO3.Backend.ContentContainer.setUrl(
        top.TYPO3.settings.AccessPermissions.moduleUrl +
          '&id=' + uid +
          '&tx_beuser_system_beusertxpermission[action]=edit' +
          '&tx_beuser_system_beusertxpermission[controller]=Permission' +
          '&returnUrl=' + this.getReturnUrl(),
      );
    }
  }

  private getReturnUrl = (): string => {
    return encodeURIComponent(top.list_frame.document.location.pathname + top.list_frame.document.location.search);
  }
}

export = new ContextMenuActions();
