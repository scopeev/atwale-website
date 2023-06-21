/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Atawaale Child Support Uganda. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export function appendToDom(element: HTMLElement, parent?: HTMLElement) {
    if (parent) {
        parent.appendChild(element);
    } else {
        document.body.append(element);
    }
}

export function appendElements(nodes: Node[], parent?: HTMLElement) {
    if (parent) {
        parent.append(...nodes);
    }
}

export function createElement<T extends keyof HTMLElementTagNameMap>(
    element: T,
    classList?: string[]
) {
    const _e = document.createElement(element);
    if (classList) {
        _e.classList.add(...classList);
    }
    return _e;
}

export function $(element: string, container?: HTMLElement): HTMLElement {
    let elementItem: HTMLElement

    if (container) {
        elementItem = container.querySelector(element)! as HTMLElement;
    } else {

        elementItem = document.querySelector(element)! as HTMLElement
    };

    return elementItem;
}