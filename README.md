## Install 

```
npm install -g emr
```

## Run Project

```
emr run
```

## Example YAML File

```yaml
title: Micro Frontend
description: Micro Frontend Workstation
projects:
  order:
    title: Order
    run: cd folder && npm run serve
  dashboard:
    title: Dashboard
    run: npm run dev
```

## Terminal Commands

CTRL+activator activator:
Send the CTRL+activator key-sequence to the focused terminal.

CTRL+activator BACKSPACE:
Switch the focus to the previous terminal in sequence.

CTRL+activator SPACE:
Switch the focus to the next terminal in sequence.

CTRL+activator LEFT/RIGHT/UP/DOWN:
Switch the focus to the best matching terminal in a direction.

CTRL+activator 1/2/.../9:
Directly switch to a particular terminal.

CTRL+activator n:
Toggle showing/hiding of terminal numbers.

CTRL+activator z:
Toggle the zooming of focused terminal.

CTRL+activator v:
Switch the focused terminal into visual/scrolling mode. Use PAGEUP/PAGEDOWN during this mode to scroll up/down. Any other key leaves this mode.

CTRL+activator l:
Relayout the screen.

CTRL+activator r:
Restart the program in the focused terminal.

CTRL+activator k:
Kill the application and all shell commands in all terminals.

CTRL+activator ?:
Show help window.