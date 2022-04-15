import Vue, { VueConstructor } from 'vue';
import { ComponentBody } from '@marvr/storyblok-rich-text-types';
import SbComponentFallback from '../components/ComponentFallback.vue';

export type ComponentResolverFunction = (
  a: ComponentBody,
) => ComponentResolverFunctionResponse;

export interface ComponentResolverFunctionResponse {
  component: VueConstructor;
  data: {
    props?: ComponentBody;
  };
}

export interface ComponentResolvers {
  _fallback: typeof Vue;
  // @TODO: Don't allow `undefined` - any idea?
  [key: string]: typeof Vue | ComponentResolverFunction | undefined;
}

export const defaultComponentResolvers: ComponentResolvers = {
  _fallback: SbComponentFallback,
};
