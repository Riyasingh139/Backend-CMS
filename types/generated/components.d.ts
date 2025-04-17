import type { Schema, Struct } from '@strapi/strapi';

export interface SharedMenuLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_menu_links';
  info: {
    description: '';
    displayName: 'menuLinks';
  };
  attributes: {
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String;
    submenuLinks: Schema.Attribute.Component<'shared.sub-links', true>;
    url: Schema.Attribute.String;
  };
}

export interface SharedSubLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_sub_links';
  info: {
    displayName: 'subLinks';
  };
  attributes: {};
}

export interface SharedSubmenuLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_submenu_links';
  info: {
    displayName: 'submenuLink';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.menu-links': SharedMenuLinks;
      'shared.sub-links': SharedSubLinks;
      'shared.submenu-link': SharedSubmenuLink;
    }
  }
}
