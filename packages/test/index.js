import {ViewChild, ChangeDetectionStrategy, ViewEncapsulation, Component, TemplateRef} from '@angular/core';

class _MatMenuBase {
    templateRef = null;
}

_MatMenuBase.ctorParameters = () => [];
_MatMenuBase.propDecorators = {
    templateRef: [{ type: ViewChild, args: [TemplateRef, { static: false },] }]
};

// Uncommenting this fixes the issue. This is because the class is decorated
// then and Ngcc would run the base_def decorator handler.
// _MatMenuBase.decorators = [{type: ViewChild, args: []}]


class MatMenu extends _MatMenuBase {
}


class _MatMenu extends MatMenu {}

_MatMenu.decorators = [
    { type: Component, args: [{
        selector: 'mat-menu',
        template: "<ng-template><div class=\"mat-menu-panel\" [ngClass]=\"_classList\" (keydown)=\"_handleKeydown($event)\" (click)=\"closed.emit('click')\" tabindex=\"-1\" role=\"menu\"><div class=\"mat-menu-content\"><ng-content></ng-content></div></div></ng-template>",
                styles: [],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                exportAs: 'matMenu',
            },] },
];
/** @nocollapse */
_MatMenu.ctorParameters = () => [];