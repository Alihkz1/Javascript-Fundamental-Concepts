const requiredMetadata = new WeakMap<object, Set<string>>();

function Required(): PropertyDecorator {
  return function (target: any, context: ClassFieldDecoratorContext) {
    let props = requiredMetadata.get(target);
    if (!props) {
      props = new Set<string>();
      requiredMetadata.set(target, props);
    }
    props.add(context.name.toString());
  };
}

function Validate(obj: any): boolean {
  return false;
}

class User {
  @Required()
  name?: string = "222";
  @Required()
  email?: string;
}

const userClass = new User();
userClass.name = "Alien";

// console.log(Validate(userClass));
