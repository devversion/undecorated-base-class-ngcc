Reproduce incorrect `setClassMetadata` generation with `ngcc`.

1) Run `yarn`
2) Run `yarn ivy-ngcc`
3) Inspect `node_modules/@angular/cdk/esm5/a11y.es5.js` and search for `autoCapture`.

Inspect how ngtsc generated a `setClassMetadata` call with duplicated `autoCapture`
properties. e.g.

```js
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(CdkTrapFocus, [{
        type: Directive,
        args: [{
                selector: '[cdkTrapFocus]',
                exportAs: 'cdkTrapFocus'
            }]
    }], function () { return [{ type: ElementRef }, { type: FocusTrapFactory }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { _elementRef: [], _focusTrapFactory: [], _previouslyFocusedElement: [], _document: [], focusTrap: [], enabled: [{
            type: Input,
            args: ['cdkTrapFocus']
        }], enabled: [], autoCapture: [{
            type: Input,
            args: ['cdkTrapFocusAutoCapture']
        }], autoCapture: [], ngOnDestroy: [], ngAfterContentInit: [], ngDoCheck: [] });
    return CdkTrapFocus;
}());
```