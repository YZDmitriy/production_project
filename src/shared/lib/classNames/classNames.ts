type Mods = Record<string, boolean | string>;

export function classNames(
  cls: string,
  mods: Mods = {},
  additional?: Array<string | undefined>
): string {
  const defaultAdditional = additional ?? [];

  return [
    cls,
    ...defaultAdditional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
  ]
    .join(' ')
    .trim();
}
