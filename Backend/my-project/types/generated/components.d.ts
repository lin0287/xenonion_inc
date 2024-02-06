import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsGallery extends Schema.Component {
  collectionName: 'components_components_galleries';
  info: {
    displayName: 'Gallery';
  };
  attributes: {
    Title: Attribute.String;
    Pictures: Attribute.Media;
  };
}

export interface ComponentsTextBlock extends Schema.Component {
  collectionName: 'components_components_text_blocks';
  info: {
    displayName: 'Text-Block';
  };
  attributes: {
    Title: Attribute.String;
    Content: Attribute.RichText;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.gallery': ComponentsGallery;
      'components.text-block': ComponentsTextBlock;
    }
  }
}
