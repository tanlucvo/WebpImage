import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'webp-image' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

type WebpImageProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'WebpImageView';

export const WebpImageView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<WebpImageProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
