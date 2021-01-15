/**
 * Required to prevent window problems in Server Side Render(SSR) 
 * with Angular Universal.
 */
import { createWindow } from 'domino';
import { existsSync, readFileSync } from 'fs';
import { join } from 'path';
import * as ws from 'ws';
import * as xhr2 from 'xhr2';

const DIST_FOLDER: string = join(process.cwd(), 'dist/vakers/browser');
const INDEX_HTML: string = existsSync(join(DIST_FOLDER, 'index.original.html')) ? 'index.original.html' : 'index.html';

const TEMPLATE: string = readFileSync(join(DIST_FOLDER, INDEX_HTML)).toString();
const win: any = createWindow(TEMPLATE);

// Ignite UI browser objects abstractions
(global as any).window = win;
(global as any).document = win.document;

(global as any).self = win;
(global as any).IDBIndex = win.IDBIndex;
(global as any).document = win.document;
(global as any).navigator = win.navigator;
(global as any).getComputedStyle = win.getComputedStyle;
(global as any).Event = win.Event;
(global as any).KeyboardEvent = win.KeyboardEvent;
(global as any).MouseEvent = win.MouseEvent;
(global as any).FocusEvent = win.FocusEvent;
(global as any).PointerEvent = win.PointerEvent;
(global as any).HTMLElement = win.HTMLElement;
(global as any).HTMLElement.prototype.getBoundingClientRect = () => {
    return {
        left: '',
        right: '',
        top: '',
        bottom: ''
    };
};

// WebSockets
(global as any).WebSocket = ws;
(global as any).XMLHttpRequest = xhr2;

// Other optional depending on application configuration
(global as any).object = win.object;
(global as any).navigator = win.navigator;
(global as any).localStorage = win.localStorage;
(global as any).DOMTokenList = win.DOMTokenList;