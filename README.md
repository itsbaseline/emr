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

CTRL+a activatorKey:
Send the CTRL+a key-sequence to the focused terminal.

CTRL+a BACKSPACE:
Switch the focus to the previous terminal in sequence.

CTRL+a SPACE:
Switch the focus to the next terminal in sequence.

CTRL+a LEFT/RIGHT/UP/DOWN:
Switch the focus to the best matching terminal in a direction.

CTRL+a 1/2/.../9:
Directly switch to a particular terminal.

CTRL+a n:
Toggle showing/hiding of terminal numbers.

CTRL+a z:
Toggle the zooming of focused terminal.

CTRL+a v:
Switch the focused terminal into visual/scrolling mode. Use PAGEUP/PAGEDOWN during this mode to scroll up/down. Any other key leaves this mode.

CTRL+a l:
Relayout the screen.

CTRL+a r:
Restart the program in the focused terminal.

CTRL+a k:
Kill the application and all shell commands in all terminals.

CTRL+a ?:
Show help window.

## TODO

[] read the file as an argument
[] run the part you want