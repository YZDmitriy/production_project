import { FeatureFlags } from '@/shared/types/featureFlags';

// ФИЧИ НЕ МЕНЯЮТСЯ В ХОДЕ СЕССИИ, ИХ НЕ ОБЯЗАТЕЛЬНО ДЕЛАТЬ РЕАКТИВНЫМИ!
// РЕАКТИВНЫЕ ФИЧИ МЕНЯЮТСЯ
let featureFlags: FeatureFlags;

export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
  if (newFeatureFlags) {
    featureFlags = newFeatureFlags;
  }
}

// export function getFeatureFlags(flag: keyof FeatureFlags) {
//   return featureFlags[flag];
// }

export function getFeatureFlags(flag: keyof FeatureFlags) {
  if (!featureFlags) {
    return false;
  }
  return featureFlags[flag];
}
