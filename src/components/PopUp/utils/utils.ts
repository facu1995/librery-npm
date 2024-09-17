export function joinClasses(...classes: string[]) {
  return classes
    .filter(
      (className) => typeof className === 'string' && className.trim() !== ''
    )
    .join(' ');
}
