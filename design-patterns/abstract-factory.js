class Button {
  render() {
    throw new Error("render() must be implemented");
  }
}
class Checkbox {
  check() {
    throw new Error("check() must be implemented");
  }
}

class WindowsButton extends Button {
  render() {
    console.log("Rendering windows button");
  }
}
class WindowsCheckbox extends Checkbox {
  check() {
    console.log("check windows checkbox");
  }
}

class GUIFactory {
  createButton() {
    throw new Error("Button must be implemented!");
  }
  createCheckbox() {
    throw new Error("Checkbox must be implemented!");
  }
}

class WindowsFactory extends GUIFactory {
  createButton() {
    return new WindowsButton();
  }
  createCheckbox() {
    return new WindowsCheckbox();
  }
}

function renderUI(factory) {
  const button = factory.createButton();
  const checkbox = factory.createCheckbox();
  button.render();
  checkbox.check();
  //   return { button, checkbox };
}

renderUI(new WindowsFactory());
