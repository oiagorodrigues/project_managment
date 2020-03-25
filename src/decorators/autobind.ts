export function autobind(_: any, __: any, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  return {
    configurable: true,
    get() { return originalMethod.bind(this) }
  } as PropertyDescriptor
}
