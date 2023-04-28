export namespace Input {
  type KeyState = {
    isDown: boolean;
    strength: number;
  };

  const keyStates: Record<string, KeyState> = {
    ui_up: { isDown: false, strength: 0.0 },
    ui_down: { isDown: false, strength: 0.0 },
    ui_left: { isDown: false, strength: 0.0 },
    ui_right: { isDown: false, strength: 0.0 },
  };

  let keyPad: Map<string, string> = new Map();
  keyPad.set("ArrowUp", "ui_up");
  keyPad.set("KeyW", "ui_up");
  keyPad.set("ArrowDown", "ui_down");
  keyPad.set("KeyS", "ui_down");
  keyPad.set("ArrowLeft", "ui_left");
  keyPad.set("KeyA", "ui_left");
  keyPad.set("ArrowRight", "ui_right");
  keyPad.set("KeyD", "ui_right");

  document.addEventListener("keydown", (event) => onKeyEvent(event, true));
  document.addEventListener("keyup", (event) => onKeyEvent(event, false));

  function onKeyEvent(event: KeyboardEvent, isDown: boolean): void {
    const key = keyPad.get(event.code);
    if (!key) {
      return;
    }
    if (keyStates[key]) {
      keyStates[key].isDown = isDown;
    }
  }

  export function isKeyPressed(key: string) {
    return keyStates[key].isDown;
  }

  export function getActionStrength(key: string) {
    return keyStates[key].isDown ? 1 : 0;
  }
}
